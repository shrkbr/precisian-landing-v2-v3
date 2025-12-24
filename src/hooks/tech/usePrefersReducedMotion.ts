import { useState, useEffect } from 'react';

/**
 * Hook para detectar preferência do usuário por movimento reduzido
 * Essencial para acessibilidade em interfaces com muitas animações
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') {
      return;
    }

    // Check for media query support
    if (!window.matchMedia) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook para controlar animações baseado na preferência do usuário
 * Retorna um objeto com configurações de animação
 */
export function useAnimationConfig() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return {
    prefersReducedMotion,
    // Durações ajustadas para acessibilidade
    duration: prefersReducedMotion ? 0 : undefined,
    // Desabilitar animações infinitas
    shouldAnimate: !prefersReducedMotion,
    // Classes CSS condicionais
    getAnimationClass: (normalClass: string, reducedClass?: string) => {
      return prefersReducedMotion ? (reducedClass || '') : normalClass;
    },
    // Propriedades para Framer Motion
    getMotionProps: (normalProps: object, reducedProps?: object) => {
      return prefersReducedMotion ? (reducedProps || { animate: false }) : normalProps;
    }
  };
}