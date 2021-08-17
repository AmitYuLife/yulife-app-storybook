const sanatize = require('sanitize-filename');
const MAX_FILE_LENGTH = 255;

import * as path from "path";
import { readdirSync } from "fs";

let assetPath = '';
const getAssetPath = () => {
  if (assetPath) {
    return assetPath;
  }
  const items = readdirSync(path.join(__dirname, "..", "e2e-report"));
  assetPath = items.find(i => i.includes("ios.sim.debug"));

  return assetPath;
}

export const getTestPath = (test: Mocha.Test, status: string) => {
  let path = [test.title];
  let parent = test.parent;
  while (parent) {
    if (parent.title) {
      path.push(`${parent.title.replace(":", "_")}`);
    }
    parent = parent.parent;
  }
  const prefix = getStatusSign(status);
  const all = path.reverse().join(" ");
  const folder = constructSafeFilename(prefix, all);
  const folderPath = getAssetPath();
  return [
    `./${folderPath}/${folder}/testDone.png`,
    `./${folderPath}/${folder}/testStart.png`
  ];
}

// extracted from detox
const constructSafeFilename = (prefix = '', trimmable = '', suffix = '') => {
  const nonTrimmableLength = prefix.length + suffix.length;
  const trimmed = trimmable.slice(-MAX_FILE_LENGTH + nonTrimmableLength);
  const unsafe = prefix + trimmed + suffix;
  const sanitized = sanatize(unsafe, { replacement: '_' });
  return sanitized;
}

const getStatusSign = (status: string) => {
  switch (status) {
    case 'passed': return '✓ ';
    case 'failed': return '✗ ';
    default: return '';
  }
}
