/** @type {import('tailwindcss').Config} */
export default {
	darkMode: false,
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		fontFamily: {
		  blackops: ['Black Ops One', 'cursive'],
		  sans: ['Black Ops One', 'cursive'],
		  mono: ['var(--font-mono)', 'monospace'],
		},
		borderRadius: {
		  DEFAULT: 'var(--radius, 0.5rem)',
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  

		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },

		  
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  },
		  /* Syntax Highlighting */
		  keyword: 'hsl(var(--keyword))',
		  institution: 'hsl(var(--institution-color))',
		  third: 'hsl(var(--third))',
		 

		  function: 'hsl(var(--function))',
		  variable: 'hsl(var(--variable))',
		  string: 'hsl(var(--string))',
		  comment: 'hsl(var(--comment))',
		  number: 'hsl(var(--number))',
		  operator: 'hsl(var(--operator))'
		}
	  }
	},
	plugins: [
	  require("tailwindcss-animate"),
	  require('tailwind-scrollbar')({ nocompatible: true }) 
	],
  };
  