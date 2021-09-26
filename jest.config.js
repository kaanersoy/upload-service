module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/**/constant.ts',
    '!**/node_modules/**',
    '!**/node_modules_prune/**',
    '!**/vendor/**',
    '!**/test/**',
    '!<rootDir>/src/helpers/**',
    '!**/config/**',
    '!<rootDir>/index.ts',
    '!**/**.config.{ts,js}',
    '!<rootDir>/types.d.ts',
    '!<rootDir>/src/registry.ts',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/node_modules_prune/',
    '<rootDir>/dist/',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
