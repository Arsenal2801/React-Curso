module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ['node_modules/(?!@storybook)'],
    setupFiles: ['./jest.setup.js']
}