const path = require("path")

module.exports = {
  setupFilesAfterEnv: [
    path.resolve(__dirname, "./jest-configs/setup-test-env.js")
  ],
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.(tsx?|jsx?)$": `<rootDir>/jest-configs/jest-preprocess.js`,
  },
  moduleNameMapper: {
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/jest-configs/__mocks__/file-mocks.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  collectCoverage: false,
  coverageReporters: [
    "lcov",
    "text",
    "html"
  ]
}
