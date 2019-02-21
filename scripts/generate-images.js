const path = require("path");
const fs = require("fs");

const assetsPath = path.join(__dirname, "../assets");

(function generateImages() {
    let resFile = `// tslint:disable\nconst images = {\n`;
    const [dsStore, ...folders] = fs.readdirSync(assetsPath);

    for (const folder of folders) {
        resFile += `    "${folder}": {\n`;
        const images = Array.from(
            new Set(
                fs
                    .readdirSync(path.join(assetsPath, folder))
                    .filter((file) => file.endsWith(".png"))
                    .map((file) => file.replace("@2x.png", "").replace("@3x.png", "").replace(".png", ""))
            )
        );

        for (const image of images) {
            resFile += `        "${image}": require("../assets/${folder}/${image}.png"),\n`;
        }

        resFile += `    },\n`;
    }

    resFile += `}\nexport default images;\n`;

    fs.writeFileSync(path.join(__dirname, "../src/images.ts"), resFile, "utf8");
})();
