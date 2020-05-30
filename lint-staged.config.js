module.exports = {
  './src/**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  './src/**/*.+(ts|tsx|js|jsx|json|yml|yaml)': ['prettier --write'],
}
