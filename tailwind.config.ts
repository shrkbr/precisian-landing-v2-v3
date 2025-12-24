import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Tech Colors for Cyberpunk Theme
        tech: {
          primary: "#FD68B3",      // Precisian pink neon
          secondary: "#7000ff",    // Purple complement
          success: "#00ff88",      // Matrix green
          warning: "#ffaa00",      // Amber warning
          error: "#ff4444",        // Red error neon
          surface: "#0a0a0a",      // Elevated surfaces
          elevated: "#151515",     // Highest elevation
        },
        neon: {
          pink: "#FD68B3",
          purple: "#7000ff",
          green: "#00ff88",
          amber: "#ffaa00",
          red: "#ff4444",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-fast": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0.3" },
          "25%": { transform: "translateY(-15px) translateX(8px)", opacity: "0.7" },
          "50%": { transform: "translateY(-25px) translateX(-5px)", opacity: "0.5" },
          "75%": { transform: "translateY(-10px) translateX(12px)", opacity: "0.8" },
          "100%": { transform: "translateY(0) translateX(0)", opacity: "0.3" },
        },
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        // Tech/Cyberpunk Animations
        "tech-scan": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
        "tech-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "tech-glow": {
          "0%, 100%": {
            textShadow: "0 0 5px currentColor, 0 0 10px currentColor",
            boxShadow: "0 0 5px currentColor, 0 0 10px currentColor",
          },
          "50%": {
            textShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
            boxShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
        },
        "tech-typewriter": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "tech-pulse-neon": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 5px currentColor)" },
          "50%": { opacity: "0.7", filter: "drop-shadow(0 0 20px currentColor)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "float-fast": "float-fast 2s ease-in-out infinite",
        "scroll-up": "scroll-up 20s linear infinite",
        // Tech Animations
        "tech-scan": "tech-scan 3s linear infinite",
        "tech-blink": "tech-blink 1s infinite",
        "tech-glow": "tech-glow 2s ease-in-out infinite",
        "tech-typewriter": "tech-typewriter 2s steps(40, end)",
        "tech-pulse-neon": "tech-pulse-neon 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
