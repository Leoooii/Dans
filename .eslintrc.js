module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "max-len": ["error", { code: 100 }],
  },
};
