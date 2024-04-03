import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'light-blue': '#98c1d9',
      'dark-blue': '#3d5a80',
      'white-blue': '#E0FBFC',
      'special-red': '#EE6C4D',
      'special-black': '#293241'
    }
  },
  plugins: []
};
export default config;
