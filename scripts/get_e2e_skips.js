const fs = require('fs')
const path = require('path')

const e2eDir = path.join(__dirname, '../e2e') 

function processFile(filePath) {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const lines = fileContents.split('\n')
    const comments = []

    lines.forEach((line, lineNumber) => {
        let type = ''
        if (line.includes('@flaky')) {
            type = 'Flaky'
            line = line.replace('@flaky', '').trim()
        } else if (line.includes('@bug')) {
            type = 'Bug'
            line = line.replace('@bug', '').trim()
        } else if (line.includes('@update')) {
            type = 'Update'
            line = line.replace('@update', '').trim()
        }

        line = line.replace(/^\/\/\s*/, '').trim()

        if (type !== '' && line !== '') {
            const relativePath = path.relative(e2eDir, filePath)
            const [subfolder, fileName] = relativePath.split(path.sep)
            comments.push({
                Subfolder: subfolder ? `${subfolder}/${fileName}` : fileName,
                File: fileName,
                Line: lineNumber + 1,
                Type: type,
                Comment: line,
            })
        }
    })

    return comments
}

function exploreDirectory(directory) {
    const files = fs.readdirSync(directory)
    let result = []

    files.forEach((file) => {
        const filePath = path.join(directory, file)
        const stats = fs.statSync(filePath)

        if (stats.isDirectory()) {
            result = result.concat(exploreDirectory(filePath))
        } else if (file.endsWith('.spec.ts')) {
            result = result.concat(processFile(filePath))
        }
    })

    return result
}

const comments = exploreDirectory(e2eDir)

comments.sort((a, b) => {
    const subfolderComparison = a.Subfolder.localeCompare(b.Subfolder)
    if (subfolderComparison !== 0) return subfolderComparison
    const typeComparison = a.Type.localeCompare(b.Type)
    if (typeComparison !== 0) return typeComparison
    const fileComparison = a.File.localeCompare(b.File)
    if (fileComparison !== 0) return fileComparison
    return a.Line - b.Line
})

console.table(comments)
