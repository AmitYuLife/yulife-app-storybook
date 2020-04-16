const path = require("path");
const fs = require("fs");

(function() {
    const data = fs.readdirSync(path.join(__dirname, "../", "src/graphql/_core/schema"), "utf-8");

    let str = "";

    for (const file of data) {
        if (file.includes(".ts") && file !== "globalTypes.ts") {
            str += `export * from "./${file.replace(".ts", "")}";\n`;
        }
    }

    fs.writeFileSync(path.join(__dirname, "../", "src/graphql/_core/schema/index.ts"), str, "utf-8");
})();
