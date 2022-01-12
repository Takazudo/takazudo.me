const lengthCollection = {
  "0": 0,
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
};

const lengthCollectionPx = {};
Object.keys(lengthCollection).map((key) => {
  lengthCollectionPx[key] = `${lengthCollection[key]}px`;
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],

  theme: {
    spacing: {
      ...lengthCollectionPx,
    },
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
      futura: ["Futura", "Hind", 'sans-serif'],
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
      sm: ["1rem", { lineHeight: "1.5" }],
      base: ["1.125rem", { lineHeight: "1.7" }],
      lg: ["1.5rem", { lineHeight: "1.5" }],
      xl: ["1.8rem", { lineHeight: "1.6" }],
      "2xl": ["2.7rem", { lineHeight: "1.4" }],
    },
    lineHeight: {
      none: "1",
      tight: "1.4",
      snug: "1.6",
      normal: "1.8",
      relaxed: "1",
      loose: "2.3",
    },
    extend: {},
  },

  plugins: [],
};
