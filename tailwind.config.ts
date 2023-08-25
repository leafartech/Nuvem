import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "my": "#0066FF"
      },
      boxShadow: {
        "my": "0px 2px 18px 0px"
      },
      boxShadowColor: {
        "myColor": "rgba(236, 236, 236"
      }
    },
  },
  plugins: [],
}
export default config
