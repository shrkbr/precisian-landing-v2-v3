// Tech Components - Cyberpunk UI Library
// Base components with tech/cyberpunk aesthetic

// Import all components first
import { GlowCard, StatsCard } from './GlowCard';
import { NeonText, NeonHeading, TerminalText } from './NeonText';
import { GridPattern, RadarGrid, MatrixRain, HologramEffect } from './GridPattern';
import { TechButton, TerminalButton, ActionButton, GhostButton, DangerButton } from './TechButton';
import { ProgressIndicator, TechSpinner, StepProgress } from './ProgressIndicator';
import {
  StatusBadge,
  ServerStatusBadge,
  ConnectionStatusBadge,
  ProgressStatusBadge,
  SecurityStatusBadge,
  APIStatusBadge,
  RealtimeStatusGrid
} from './StatusBadge';
import { TerminalHero, CompactTerminalHero } from './TerminalHero';
import DVQStepperTech from './DVQStepperTech';
import CaseStudiesGridTech from './CaseStudiesGridTech';
import TrustSignalsTech from './TrustSignalsTech';

// TechPage Components
import { TechNav } from './TechNav';
import { TechHero } from './TechHero';
import { ProblemSection } from './ProblemSection';
import { DVQArchitecture } from './DVQArchitecture';
import { ModuleSection } from './ModuleSection';
import { PartnerSection } from './PartnerSection';
import { ImpactGrid } from './ImpactGrid';
import { CTAForm } from './CTAForm';
import { TechFooter } from './TechFooter';
import { TerminalCard } from './TerminalCard';
import { SectionHeader } from './SectionHeader';
import { CaseCard } from './CaseCard';
import { useTypingEffect, useMultiLineTyping } from '../../hooks/tech/useTypingEffect';
import { usePrefersReducedMotion, useAnimationConfig } from '../../hooks/tech/usePrefersReducedMotion';

// Re-export all components
export {
  // Cards
  GlowCard,
  StatsCard,

  // Text
  NeonText,
  NeonHeading,
  TerminalText,

  // Patterns
  GridPattern,
  RadarGrid,
  MatrixRain,
  HologramEffect,

  // Buttons
  TechButton,
  TerminalButton,
  ActionButton,
  GhostButton,
  DangerButton,

  // Progress
  ProgressIndicator,
  TechSpinner,
  StepProgress,

  // Status
  StatusBadge,
  ServerStatusBadge,
  ConnectionStatusBadge,
  ProgressStatusBadge,
  SecurityStatusBadge,
  APIStatusBadge,
  RealtimeStatusGrid,

  // Hero
  TerminalHero,
  CompactTerminalHero,

  // Feature Components
  DVQStepperTech,
  CaseStudiesGridTech,
  TrustSignalsTech,

  // TechPage Components
  TechNav,
  TechHero,
  ProblemSection,
  DVQArchitecture,
  ModuleSection,
  PartnerSection,
  ImpactGrid,
  CTAForm,
  TechFooter,
  TerminalCard,
  SectionHeader,
  CaseCard,

  // Hooks
  useTypingEffect,
  useMultiLineTyping,
  usePrefersReducedMotion,
  useAnimationConfig
};

// Types
export type {
  GlowCardProps,
  NeonTextProps,
  GridPatternProps,
  TechButtonProps,
  ProgressIndicatorProps,
  StatusBadgeProps
} from './types';

// Component groups for easier imports
export const Cards = {
  GlowCard,
  StatsCard
};

export const Text = {
  NeonText,
  NeonHeading,
  TerminalText
};

export const Patterns = {
  GridPattern,
  RadarGrid,
  MatrixRain,
  HologramEffect
};

export const Buttons = {
  TechButton,
  TerminalButton,
  ActionButton,
  GhostButton,
  DangerButton
};

export const Progress = {
  ProgressIndicator,
  TechSpinner,
  StepProgress
};

export const Status = {
  StatusBadge,
  ServerStatusBadge,
  ConnectionStatusBadge,
  ProgressStatusBadge,
  SecurityStatusBadge,
  APIStatusBadge,
  RealtimeStatusGrid
};

export const Heroes = {
  TerminalHero,
  CompactTerminalHero
};

export const Features = {
  DVQStepperTech,
  CaseStudiesGridTech,
  TrustSignalsTech
};

export const Hooks = {
  useTypingEffect,
  useMultiLineTyping,
  usePrefersReducedMotion,
  useAnimationConfig
};