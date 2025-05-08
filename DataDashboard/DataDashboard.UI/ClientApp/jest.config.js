module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jsdom',
    globalSetup: 'jest-preset-angular/global-setup',
    transform: {
      '^.+\\.(ts|html)$': 'ts-jest',
      '^.+\\.js$': 'babel-jest',
    },
    testMatch: ['**/+(*.)+(spec).+(ts)?(x)'],
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    coverageReporters: ['html', 'lcov', 'text-summary'],
    paths: {
      "@wtw/models": ["src/app/store/models/index.ts"],
      "@wtw/services": ["src/app/store/services/index.ts"],
      "@wtw/store": ["src/app/store/index.ts"]
    }
  };
  