#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const packageConfig = require(path.resolve("package.json"));
const version = packageConfig.version;
const today = new Date().toISOString().slice(0, 10);
const CHANGELOG = "CHANGELOG.md";

(function main() {
	fs.readFile(CHANGELOG, "utf8", (err, data) => {
		if (err) {
			throw err;
		}

		let textToReplace = `## [Unreleased]\n\n\n## [${version}] - ${today}`;

		const [first, second, third] = version.split(".");
		const major = Number(first);
		const minor = Number(second);

		// Find the previous release branch. When minor is 0 (major version bump),
		// find the latest release branch from the previous major version.
		let previousReleaseBranch;
		if (minor > 0) {
			previousReleaseBranch = `origin/release/${major}.${minor - 1}`;
		} else {
			const branches = require("child_process")
				.execSync(`git branch -r --list 'origin/release/${major - 1}.*' --sort=-version:refname`)
				.toString()
				.trim();
			const latestBranch = branches.split("\n")[0]?.trim();
			if (!latestBranch) {
				console.warn(`No previous release branch found for major version ${major - 1}, using develop HEAD~100`);
				previousReleaseBranch = "HEAD~100";
			} else {
				previousReleaseBranch = latestBranch;
			}
		}

		const revision = require("child_process")
			.execSync(
				`git log --pretty=format:'%C(yellow)%d%Creset %s' --abbrev-commit --date=relative --no-merges ${previousReleaseBranch}..origin/develop`,
			)
			.toString()
			.trim();

		// Build changelog blocks
		const changelogBlocks = {
			features: [],
			bugfixes: [],
			tasks: [],
			chores: [],
			improvements: [],
			extra: [],
		};

		const commits = revision.split("\n");

		for (const commit of commits) {
			const commitLowerCase = commit.toLowerCase();
			if (commitLowerCase.includes("bugfix")) {
				changelogBlocks.bugfixes.push(commit);
			} else if (commitLowerCase.includes("feature")) {
				changelogBlocks.features.push(commit);
			} else if (commitLowerCase.includes("chore")) {
				changelogBlocks.chores.push(commit);
			} else if (commitLowerCase.includes("task")) {
				changelogBlocks.tasks.push(commit);
			} else if (commitLowerCase.includes("improve")) {
				changelogBlocks.improvements.push(commit);
			} else if (commitLowerCase.includes("release")) {
				continue;
			} else {
				changelogBlocks.extra.push(commit);
			}
		}

		for (const block in changelogBlocks) {
			if (
				changelogBlocks.hasOwnProperty(block) &&
				changelogBlocks[block].length > 0
			) {
				textToReplace += `\n### ${block.charAt(0).toUpperCase() + block.slice(1)}\n\n`;
				textToReplace += "-   " + changelogBlocks[block].join("\n-   ");
				textToReplace += "\n";
			}
		}

		const newChangelog = data.replace(/## \[Unreleased\]/, textToReplace);

		fs.writeFile(CHANGELOG, newChangelog, "utf8", (err) => {
			if (err) {
				throw err;
			}
		});
	});
})();
