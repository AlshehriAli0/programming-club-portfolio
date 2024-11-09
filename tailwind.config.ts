import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-white": "#F3F4F5",
        biscay: "#174760",
        "smalt-blue": "#4C8494",
        "breaker-bay": "#6499A2",
        "slate-gray": "#65738B",
      },
    },
  },
  plugins: [],
} satisfies Config;
