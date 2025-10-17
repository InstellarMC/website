// These are all the custom `@` (at) rules that we use within our custom PostCSS plugins
const CUSTOM_AT_RULES = [
  // Tailwind-specific at-rules
  "apply",
  "layer",
  "responsive",
  "reference",
  "utility",
  "theme",
  "custom-variant",
  "screen",
  "source",
  "tailwind",
  "variants",
];

/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    // Allow Tailwind-based CSS Rules
    "at-rule-no-unknown": [true, { ignoreAtRules: CUSTOM_AT_RULES }],
    // Allow the `@apply` at rule as its part of Tailwind
    "at-rule-no-deprecated": [true, { ignoreAtRules: CUSTOM_AT_RULES }],
    // Enforce the use of string notation for @import rules
    "import-notation": "string",
    // Enforces the order of the CSS properties to be in alphabetical order
    "order/properties-alphabetical-order": true,
  },
};
