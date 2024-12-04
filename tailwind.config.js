/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      background: "var(--color-background)",
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
    },
    fontFamily: {
      sans: ["var(--font-sans)", "sans-serif"],
      script: ["var(--font-script)", "cursive"],
    },
  },
  plugins: [],
};
