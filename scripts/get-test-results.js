const stats = require("../e2e-report/mochawesome").stats;
console.log(
    stats.passes +
    " passes, "
    + stats.failures +
    " failures" +
    " (" +
    stats.passPercent +
    "% pass)",
);