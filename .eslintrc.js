module.exports = {
  extends: ["airbnb-base", "plugin:prettier/recommended"],
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
