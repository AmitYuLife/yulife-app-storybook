const sanatize = require('sanitize-filename');
const MAX_FILE_LENGTH = 255;

let folderPath = 'screenshots' // NOTE: this needs to be renamed from ios.debug.sim... whilst running on bitrise

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
