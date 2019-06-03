export type AssetType = keyof typeof assets;

const assets = {
    background: require("../../../../../../assets/leaderboards/background.png"),
    steps: require("../../../../../../assets/leaderboards/steps.png"),
    coins: require("../../../../../../assets/leaderboards/yucoin.png"),
    mindful: require("../../../../../../assets/leaderboards/island.png"),
    first: require("../../../../../../assets/leaderboards/first.png"),
    second: require("../../../../../../assets/leaderboards/second.png"),
    third: require("../../../../../../assets/leaderboards/third.png"),
    offline: require("../../../../../../assets/leaderboards/offline.png"),
    arrowUp: require("../../../../../../assets/leaderboards/arrow-up.png"),
    arrowDown: require("../../../../../../assets/leaderboards/arrow-down.png")
};

export default assets;
