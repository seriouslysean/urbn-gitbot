module.exports = {
    "extends": [
        "eslint:recommended",
        "airbnb-base",
        "plugin:node/recommended"
    ],
    "rules": {
        "node/exports-style": ["error", "module.exports"],
        "node/prefer-global/buffer": ["error", "always"],
        "node/prefer-global/console": ["error"],
        "node/prefer-global/process": ["error", "always"],
        "node/prefer-global/url-search-params": ["error", "always"],
        "node/prefer-global/url": ["error", "always"],
        "no-console": "off",
        "no-unused-vars": ["error", {
            "args": "none"
        }],
        "quotes": ["error", "single"]
    },
    "env": {
        "node": true
    }
}