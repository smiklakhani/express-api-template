module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all"
      }
    ],
    eqeqeq: ["error", "always"],
    "no-undef": "warn",
    "no-console": "warn",
    "no-unused-vars": [1, { argsIgnorePattern: "res|next|^err" }]
  }
};
