const fs = require("fs");
const path = require("path");

const specsDirectory = "e2e"
const outputJsonFile = "e2e/scenarios.json"

const projects = [
	"activity",
	"admin",
	"battle_pass",
	"benefits",
	"challenges",
	"challenges_extended",
	"dental",
	"group_health",
	"group_health_two",
    "health",
    "personal",
    "pli",
    "products",
    "south_africa",
    "usa",
    "worlds_progression",
    "yuscreen"
]

const scenarios = {}

const processFile = (filePath) => {
	const content = fs.readFileSync(filePath, "utf-8")

	const featureMatch = content.match(/Feature(?:Skip)?\("(.*?)",/)
	const scenarioMatches = content.match(/Scenario(?:Skip)?\("(.*?)",/g) || []

	if (featureMatch && scenarioMatches.length > 0) {
		const projectName = filePath.split("/")[1]
		const subfolderName = filePath.split("/")[2]
		const fileName = path.basename(filePath)
		const featureName = featureMatch[1]

		if (!scenarios[projectName]) {
			scenarios[projectName] = {}
		}

		if (!scenarios[projectName][subfolderName]) {
			scenarios[projectName][subfolderName] = {}
		}

		scenarios[projectName][subfolderName][fileName] =
			scenarios[projectName][subfolderName][fileName] || {}
		scenarios[projectName][subfolderName][fileName][featureName] =
			scenarioMatches.map((match) => match.match(/Scenario(?:Skip)?\("(.*?)",/)[1])
	}
}

const processDirectory = (directoryPath) => {
	const files = fs.readdirSync(directoryPath)

	files.forEach((file) => {
		const filePath = path.join(directoryPath, file)

		if (fs.statSync(filePath).isDirectory()) {
			processDirectory(filePath)
		} else if (filePath.endsWith(".spec.ts")) {
			processFile(filePath)
		}
	})
}

projects.forEach((project) => {
	const projectPath = path.join(specsDirectory, project)

	if (fs.existsSync(projectPath)) {
		processDirectory(projectPath)
	}
})

fs.writeFileSync(outputJsonFile, JSON.stringify(scenarios, null, 2))

console.log(`JSON file generated: ${outputJsonFile}`)