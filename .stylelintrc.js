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
    "color-hex-length": "short",
    "color-no-invalid-hex": true,
    "declaration-colon-space-after": "always",
    "max-empty-lines": 2,
    "max-nesting-depth": 4,
    "selector-max-id": 1,
    "scss/dollar-variable-pattern": /.+/,
    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      "rules",
      "at-rules"
    ]
  }
};