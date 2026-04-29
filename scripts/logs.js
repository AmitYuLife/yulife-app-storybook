const { prompt } = require("enquirer");
const open = require("open");

/**
 *  Usage `pnpm logs` or `pnpm logs <TAG>`
 */
const logs = async () => {
    const [, , userId] = process.argv;

    const { environment } = await prompt([
        
        {
            type: "autocomplete",
            name: "environment",
            message: "For which environment do you want logs?",
            initial: 0,
            choices: ["production", "uat", "develop"],
        },
    ]);

    let encodedURL;

    const defaultColumns = "service,env,@deviceId,@version";

    const datadogURL = new URL("https://app.datadoghq.eu/logs");

    let queryValue = `source:react-native env:${environment}`;

    if (userId) {
        queryValue += ` @userId:*${userId}*`;
    }

    datadogURL.searchParams.append("query", queryValue);
    datadogURL.searchParams.append("cols", defaultColumns);
    encodedURL = datadogURL.href;

    await open(encodedURL);
    console.log("Opening URL in your default browser: ", encodedURL);
};

logs().catch(console.error);
