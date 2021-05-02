export default {
  testPathIgnorePatterns: ['/.next/', '/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': './node_modules/babel-jest'
  }
}
