import type { Config } from 'tailwindcss'
import { grass, grassDark, olive, oliveDark } from '@radix-ui/colors'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-bg-1': oliveDark.olive1,
      'dark-bg-2': oliveDark.olive2,
      'dark-bg-3': oliveDark.olive3,
      'dark-button-hover': grassDark.grass3,
      'dark-button-border': grassDark.grass8,
      'dark-button-active': grassDark.grass5,
      'dark-text-1': oliveDark.olive12,
      'dark-text-2': oliveDark.olive11,
      'bg-1': olive.olive1,
      'bg-2': olive.olive2,
      'bg-3': olive.olive3,
      'button-hover': grass.grass3,
      'button-border': grass.grass8,
      'button-active': grass.grass5,
      'text-1': olive.olive12,
      'text-2': olive.olive11,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
