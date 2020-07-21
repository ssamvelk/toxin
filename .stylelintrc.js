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
    // "rule-empty-line-before": "never",
  }
};