const readline = require("readline"); // tslint:disable-line

export const skip = () => true;

export const manualTest = (message = "the test pass") => {
    if (process.env.SKIP_MANUAL === "true") {
        return null;
    }
    return async () => {
        const result = await readLine(`\n\ndid "${message}" pass? ('y' or 'n')`);

        if (result !== "y") {
            const error = await readLine("What was the error?");
            const device = await readLine("What devices did you test on?", "iPhone 7");
            throw new Error(`${error} (device ${device})`);
        }
    };
};

const readLine = async (message: string, defaultAnswer: string = null) => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });

        const postfix = defaultAnswer ? ` (${defaultAnswer}) ` : ` `;

        rl.question(`${message}${postfix}`, (answer: string) => {
            rl.close();
            resolve(answer || defaultAnswer);
        });
    });
};
