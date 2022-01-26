const plugin = require("tailwindcss/plugin");
const { createTailwindSpacingConfig } = require("./src/utils/css");

// prepare spacing values for Tailwind
const spacingConfig = createTailwindSpacingConfig({
  0: 0,
  "1px": 1,
  "hgap-2xs": 5,
  "hgap-xs": 12,
  "hgap-sm": 20,
  "hgap-md": 40,
  "hgap-lg": 60,
  "hgap-xl": 100,
  "vgap-2xs": 4,
  "vgap-xs": 7,
  "vgap-sm": 15,
  "vgap-md": 30,
  "vgap-lg": 45,
  "vgap-xl": 60,
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}", "./*.js"],

  theme: {
    spacing: spacingConfig,
    screens: {
      sm: "580px",
      md: "820px",
      lg: "1240px",
      xl: "1380px",
      "2xl": "1630px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      10: "10px",
    },
    fontFamily: {
      futura: ["Futura", "Century Gothic", "sans-serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontSize: {
      xs: ["0.875rem", { lineHeight: "1rem" }],
      sm: ["0.95rem", { lineHeight: "1.5" }],
      base: ["1.1rem", { lineHeight: "1.7" }],
      lg: ["1.3rem", { lineHeight: "1.5" }],
      xl: ["1.8rem", { lineHeight: "1.4" }],
      "2xl": ["2.4rem", { lineHeight: "1.4" }],
    },
    lineHeight: {
      none: "1",
      tight: "1.4",
      snug: "1.6",
      normal: "1.8",
      relaxed: "1",
      loose: "2.3",
    },
    extend: {
      colors: {
        "zudo-link": "#d97706",
      },
    },
  },

  plugins: [
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".clearfix": {
          "::after": {
            content: "",
            clear: "both",
            display: "table",
          },
        },
        ".text-shadow-md": {
          "text-shadow": "0.05em 0.05em 0 #ccc",
        },
        ".text-shadow-none": {
          "text-shadow": "none",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
