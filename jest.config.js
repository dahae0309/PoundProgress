module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png)$": "identity-obj-proxy",
  }
}