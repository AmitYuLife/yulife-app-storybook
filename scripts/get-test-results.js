const stats = require("../e2e/__report/mochawesome").stats;
console.log(stats.passes + " passes, " + stats.failures + " failures, " + stats.pending + " pending" + "(" + stats.passPercent + "% pass)");