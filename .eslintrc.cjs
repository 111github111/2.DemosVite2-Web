module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        'plugin:vue/vue3-recommended',
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "vue-eslint-parser",
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "prettier/prettier": "off", // 关闭格式化及其检查
        "no-empty": "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "no-unused-vars": "off",
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        '@typescript-eslint/no-non-null-assertion': "off",
        '@typescript-eslint/ban-types': "off",
        '@typescript-eslint/no-explicit-any': "off",
        "no-irregular-whitespace": "off",
        "vue/no-v-html": "off",
        "vue/html-self-closing": "off",
        "vue/html-closing-bracket-newline": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/multiline-html-element-content-newline": "off",
        // "vue/name-property-casing": "off",
        "vue/multi-word-component-names": "off",
        "accessor-pairs": "off",
        'comma-dangle': 0,  // [2, 'never'],
        'comma-spacing': 0, // [2, { 'before': false, 'after': true }],
        'comma-style': 0,   // [2, 'last'],
        'constructor-super': 2,
        'curly': 0, // [2, 'multi-line'],
        'dot-location': [2, 'property'],
        'eol-last': 2,
        'arrow-spacing': [2, { 'before': true, 'after': true }],
        'block-spacing': [2, 'always'],
        'brace-style': [2, '1tbs', {
            'allowSingleLine': true
        }],
        "linebreak-style": "off",
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)",
            ],
            env: {
                jest: true,
            },
        },
    ],
};

