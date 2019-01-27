// module.exports = {
//   extends: ["standard"],
//   plugins: ["standard", "react","jsx-a11y", "import", "graphql"],
//   rules: {
//     "no-var": "error", // optional, recommended when using es6+
//     "no-unused-vars": 1, // recommended
//     "arrow-spacing": ["error", {
//       before: true,
//       after: true
//     }], // recommended
//     indent: ["error", 2],
//     "comma-dangle": [
//       "error",
//       {
//         objects: "only-multiline",
//         arrays: "only-multiline",
//         imports: "never",
//         exports: "never",
//         functions: "never",
//       },
//     ],

//     // options to emulate prettier setup
//     semi: ["error", "never"],
//     "max-len": ["error", {
//       code: 80
//     }],
//     "template-curly-spacing": ["error", "always"],
//     "arrow-parens": ["error", "as-needed"],

//     // standard.js
//     "space-before-function-paren": [
//       "error",
//       {
//         named: "always",
//         anonymous: "always",
//         asyncArrow: "always",
//       },
//     ],
//     "arrow-body-style": "off",
//     "camelcase": "warn",
//     "func-names": "off",
//     "global-require": "warn",
//     "import/no-dynamic-require": "warn",
//     "import/no-extraneous-dependencies": "off",
//     "no-console": "off",
//     "no-multi-assign": "off",
//     "no-param-reassign": "warn",
//     "no-plusplus": "off",
//     "no-shadow": "warn",
//     "no-underscore-dangle": "warn",
//     "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }],
//     "no-nested-ternary": "off",
//     "no-unused-vars": "warn",
//     "prefer-destructuring": "off",
//     "prettier/prettier": ["error"],
//     "react/jsx-uses-vars": "error",
//     "react/no-deprecated": "off",
//     // standard plugin - options
//     "standard/object-curly-even-spacing": ["error", "either"],
//     "standard/array-bracket-even-spacing": ["error", "either"],
//     "standard/computed-property-even-spacing": ["error", "even"],
//     "standard/no-callback-literal": ["error", ["cb", "callback"]],

//     // react plugin - options
//     "react/jsx-uses-react": "error",
//     "react/jsx-uses-vars": "error",
//   },
//   parser: "babel-eslint",
//   parserOptions: {
//     "ecmaVersion": 8,
//     "sourceType": "module",
//     "ecmaFeatures": {
//       "jsx": true
//     }
//   },
// }
