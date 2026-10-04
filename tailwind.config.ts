import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Manrope"', '"DM Sans"', 'sans-serif'],
				display: ['"Fraunces"', 'serif'],
				headline: ['"Fraunces"', 'serif'],
				italic: ['"Instrument Serif"', 'serif'],
				serif: ['"Instrument Serif"', '"Fraunces"', 'serif'],
				mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
			},
			colors: {
				studioBg: '#FAF8F5',
				studioText: '#111111',
				studioMuted: '#6B6B6B',
				studioBorder: '#E8E4DE',
				ignition: {
					orange: '#FF4D1C',
					amber: '#FFB020',
					glow: 'rgba(255, 77, 28, 0.08)',
				},
				night: '#0B0B0C',
				warmWhite: '#F4EFE8',
				ignis: {
					50: '#FFF5F0',
					100: '#FFE7DE',
					200: '#FFC8B8',
					300: '#FFA085',
					400: '#FF6D47',
					500: '#FF4D1C', // Signature Ignition Orange
					600: '#E63400',
					700: '#B82900',
					800: '#8A1F00',
					900: '#5C1400',
				},
				studio: {
					paper: '#F8F8F5',
					card: '#FFFFFF',
					charcoal: '#17181C',
					obsidian: '#0D0E11',
					slate: '#5A5B60',
					border: 'rgba(23, 24, 28, 0.08)',
					'border-strong': 'rgba(23, 24, 28, 0.16)',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1.5rem',
				'3xl': '2rem',
				'4xl': '2.5rem',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					from: { opacity: '0', transform: 'translateY(30px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					from: { opacity: '0', transform: 'scale(0.95)' },
					to: { opacity: '1', transform: 'scale(1)' }
				},
				'marquee-left': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' }
				},
				'marquee-right': {
					'0%': { transform: 'translateX(-50%)' },
					'100%': { transform: 'translateX(0%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'marquee-left': 'marquee-left 35s linear infinite',
				'marquee-right': 'marquee-right 45s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
