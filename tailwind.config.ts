import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';
import { colors } from './src/styles/colors';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        1: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.04px' }],
        2: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0px' }],
        3: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0px' }],
        4: ['1.125rem', { lineHeight: '1.625rem', letterSpacing: '-0.04px' }],
        5: ['1.25rem', { lineHeight: '1.875rem', letterSpacing: '-0.08px' }],
        6: ['1.5rem', { lineHeight: '2.25rem', letterSpacing: '-0.1px' }],
        7: ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '-0.12px' }],
        8: ['2.1875rem', { lineHeight: '2.5rem', letterSpacing: '-0.16px' }],
        9: ['3.75rem', { lineHeight: '1', letterSpacing: '-0.4px' }],
      },
      fontWeight: {
        light: '300',
        regular: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }: PluginAPI) {
      const fontSizes = theme('fontSize') || {};
      const fontWeights = theme('fontWeight') || {};

      Object.keys(fontSizes).forEach((size) => {
        Object.keys(fontWeights).forEach((weight) => {
          const className = `text-${size}-${weight}`;
          const [fontSize, { lineHeight, letterSpacing }] = fontSizes[size];

          addComponents({
            [`.${className}`]: {
              fontSize,
              lineHeight,
              letterSpacing,
              fontWeight: fontWeights[weight],
            },
          });
        });
      });
    },
  ],
} satisfies Config;
