/* eslint-disable @typescript-eslint/no-var-requires */
const recommendedConfig = require("@typescript-eslint/eslint-plugin").configs["eslint-recommended"]

/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:compat/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
    "plugin:svelte/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "svelte/valid-compile": "off",
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      // see: https://github.com/sveltejs/eslint-plugin-svelte/issues/632
      rules: recommendedConfig.overrides[0].rules,
    },
  ],
}
