const stats = require("../e2e-report/results")

const passPercent = stats.numFailedTests === 0 ? "100" : ((stats.numPassedTests / stats.numTotalTests) * 100).toFixed(2)

console.log(`${stats.numPassedTests} passes | ${stats.numFailedTests} failures | ${stats.numPendingTests} skipped | (${passPercent}% pass)`);