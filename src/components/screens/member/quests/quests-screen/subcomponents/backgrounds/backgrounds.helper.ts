export function platformAdjust(
    os: "ios" | "android" | "macos" | "windows" | "web",
    iphonex: boolean
) {
    if (iphonex || os === "android") {
        return 100;
    } else {
        return 0;
    }
}

export function platformAdjustPosition(
    os: "ios" | "android" | "macos" | "windows" | "web",
    iphonex: boolean
) {
    if (iphonex || os === "android") {
        return -50;
    } else {
        return 0;
    }
}
