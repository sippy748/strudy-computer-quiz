module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        trailingComma: "all",
      },
    ],
  },
};
