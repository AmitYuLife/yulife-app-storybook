const glob = require("glob");
const fs = require("fs");
const rimraf = require("rimraf");
const { exec } = require("child_process");
const { detox } = require("../package.json");

const GDRIVE_CMD = `~/go/bin/gdrive --service-account gdrive.json`;

const execAsync = (cmd) => {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                return reject(error.message);
            }
            if (stderr) {
                return reject(stderr);
            }
            resolve(stdout);
        });
    });
}

const getFolderId = async (name, deviceName) => {
    try {
        const stdout = await execAsync(`${GDRIVE_CMD} list --query "name = '${name}'"`);
        const rows = stdout.split("\n");
        const needle = rows.find(r => r.includes(deviceName));
        if (needle) {
            const [folderId] = needle.split(" ");
            return folderId;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}

const removeFolderId = async (folderId) => {
    try {
        const stdout = await execAsync(`${GDRIVE_CMD} delete -r ${folderId}`);
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
}

const extractFilesIntoFolder = (testDirectory, deviceName) => {
    return new Promise(async (resolve, reject) => {
        glob(`${testDirectory}/ios*/**/*.png`, async (err, files) => {
            if (err) {
                reject(err);
            }
        
            // make folder (remove first)
            const folder = `${testDirectory}/${deviceName}`;
            rimraf.sync(folder);
            fs.mkdirSync(folder);
            
            files.map((file, i) => {
                fs.copyFileSync(file, `${folder}/${i + 1}.png`);
            });
            resolve(folder);
        });
    });
}

const uploadToGoogleDrive = async (testDirectory, deviceName, parentFolderId) => {
    try {
        await execAsync(`cd ${testDirectory} && ${GDRIVE_CMD} upload "${deviceName}" -r -p ${parentFolderId}`);
    } catch (e) {
        throw new Error(e);
    }
}

const init = async () => {
    const [_, __, testDirectory] = process.argv;
    const deviceName = detox.configurations["ios.sim.release"].name;
    const parentFolderId = `1gqhw9ZUvpT9ba2Ks5D5SZVc092GuTlsR`; // TODO: as arg?

    // extract locally
    console.log(`Extracting pngs into flat structure....`)
    const folderPath = await extractFilesIntoFolder(testDirectory, deviceName);

    // prepare gdrive folder
    console.log(`Clearing google drvie for ${deviceName}....`)
    const id = await getFolderId(deviceName, deviceName);
    if (id) {
        await removeFolderId(id);
    }

    // upload into gdrive folder
    console.log(`Uploading ${deviceName} to drive (may take a while)....`)
    await uploadToGoogleDrive(testDirectory, deviceName, parentFolderId);
}

init();


