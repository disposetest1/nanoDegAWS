module.exports = {
    reporters: [
      'default',
      [ 'jest-junit', {
        outputDirectory: "./test-results/jest",
        outputName: "results.xml",
      } ]
    ]
  };