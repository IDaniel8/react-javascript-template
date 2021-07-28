module.exports = {
  '**/*.{js,jsx}': ['yarn lint --fix'],
  '**/*.{js,.jsx,json,md}': ['prettier --write'],
}
