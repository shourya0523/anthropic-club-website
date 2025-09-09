/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coral: "#E17B5A",
        charcoal: "#2D2D2D",
        "neutral-light": "#F5F5F5",
        "neutral-dark": "#4A4A4A",
      },
      fontFamily: {
        primary: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Monaco", "Cascadia Code", "monospace"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 2vw, 1rem)",
        "fluid-base": "clamp(1rem, 2.5vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 3vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 3vw, 1.75rem)",
        "fluid-2xl": "clamp(1.5rem, 4vw, 2.5rem)",
        "fluid-3xl": "clamp(2rem, 5vw, 3.5rem)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #E17B5A" },
          "100%": { boxShadow: "0 0 20px #E17B5A, 0 0 30px #E17B5A" },
        },
      },
    },
  },
  plugins: [],
};
