const normalize = (remValue) => {
  return remValue.toFixed(4).replace(/\.?0+$/, "");
};
const pxToRem = (pxValue) => {
  const rem = pxValue / 16;
  return `${normalize(rem)}rem`;
};

module.exports = {
  createTailwindSpacingConfig: (rawConfig) => {
    const converted = {};
    Object.keys(rawConfig).map((key) => {
      // vgap values are converted to rem
      if (/^vgap/.test(key)) {
        converted[key] = pxToRem(rawConfig[key]);
        return;
      }
      // px for others
      converted[key] = `${rawConfig[key]}px`;
    });
    return converted;
  },
};
