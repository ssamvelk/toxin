module.exports = {
  extends: [
    "stylelint-config-airbnb",
    "stylelint-config-rational-order",
    "stylelint-config-prettier"
  ],
  plugins: [
    "stylelint-order",
    "stylelint-scss"
  ],
  rules:{
    "indentation": 2,
    "block-no-empty": true,
    // "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "max-empty-lines": 2,
  }
};