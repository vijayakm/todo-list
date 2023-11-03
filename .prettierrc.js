module.exports = {
    "printWidth": 90,
    "tabWidth": 4,
    "trailingComma": "all",
    "singleQuote": true,
    "trailingComma": "all",
    "semi": true,
    "plugins": [require.resolve("@trivago/prettier-plugin-sort-imports")],
    "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true,
    "importOrderCaseInsensitive": true
  }