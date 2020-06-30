import { transformAvatar } from "./avatar-builder/avatar-builder.helper";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sampleDataFromServer = require("./yu-screen-avatar.data");

export const avatarFiller = transformAvatar(sampleDataFromServer);
