module.exports = {
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["Build", "Docs", "Feat", "Fix", "Perf", "Test"],
    ],
    "scope-enum": [2, "always", ["FE", "BE"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
  },
};
