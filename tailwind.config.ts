import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|button|card|divider|ripple|spinner).js"
  ],
	theme: {
		extend: {
			width: {
				'1/8': '12.5%',
				'3/8': '37.5%',
			},
			aspectRatio: {
				'4/3': '4 / 3',
				'16/9': '16 / 9',
			},
			fontFamily: {
				saturday: ['Saturday', 'sans-serif'],
			},
			borderColor: {
				'darkest-black': '#000000',
			},
			opacity: {
				100: '1',
			},
			spacing: {
				'dot-size': '1px'
			},
			backgroundImage: {
                'radial-gradient': 'radial-gradient(circle, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5))',
            },
			colors: {
				dot: 'rgba(0,0,0,0.6)',
				"linkColor": "#4F6CFF",
				"border": "hsl(var(--border))",
              "input": "hsl(var(--input))",
              "ring": "hsl(var(--ring))",
              "background": "hsl(var(--background))",
              "foreground": "hsl(var(--foreground))",             
              "destructive": {
                "DEFAULT": "hsl(var(--destructive))",
                "foreground": "hsl(var(--destructive-foreground))"
              },
              "muted": {
                "DEFAULT": "hsl(var(--muted))",
                "foreground": "hsl(var(--muted-foreground))"
              },
              "accent": {
                "DEFAULT": "hsl(var(--accent))",
                "foreground": "hsl(var(--accent-foreground))"
              },
              "popover": {
                "DEFAULT": "hsl(var(--popover))",
                "foreground": "hsl(var(--popover-foreground))"
              },
              "card": {
                "DEFAULT": "hsl(var(--card))",
                "foreground": "hsl(var(--card-foreground))"
              }
            },
		},

        borderRadius: {
              "lg": "var(--radius)",
              "md": "calc(var(--radius) - 2px)",
              "sm": "calc(var(--radius) - 4px)"
            },
        keyframes: {
              "accordion-down": {
                "from": {
                  "height": "0"
                },
                "to": {
                  "height": "var(--radix-accordion-content-height)"
                }
              },
              "accordion-up": {
                "from": {
                  "height": "var(--radix-accordion-content-height)"
                },
                "to": {
                  "height": "0"
                }
              }
            }
    },
	corePlugins: {
		aspectRatio: false,
	},
	darkMode: "class",
	plugins: [
		nextui(),
        require("tailwindcss-animate"),
		require('@tailwindcss/aspect-ratio'),
    ],
};
export default config;
