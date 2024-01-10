const stats = require("../e2e-report/results")

const passPercent = stats.numPassedTests === 0 && stats.numFailedTests === 0 ? 0 : ((stats.numPassedTests / (stats.numPassedTests + stats.numFailedTests)) * 100).toFixed(2)

console.log(`${stats.numPassedTests} passes | ${stats.numFailedTests} failures | ${stats.numPendingTests} skipped | (${passPercent}% pass)`);