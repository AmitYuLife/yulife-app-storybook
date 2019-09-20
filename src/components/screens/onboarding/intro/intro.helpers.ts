import { CaretDirection } from "@molecules/tooltip/tooltip";
import { TOOLTIP_TYPES } from "@molecules/tooltip/tooltip.types";
import { Style } from "@styles/index";
import { StyleSheet } from "react-native";
import { tooltipStyles } from "./intro.styles";

export function getTooltipProps(index: number, dailyStepsTop: number, yucoinTop: number) {
    switch (index) {
        case 0:
            return {
                type: TOOLTIP_TYPES.WELCOME
            };
        case 1:
            return {
                type: TOOLTIP_TYPES.COINS,
                positionStyle: tooltipStyles.coinsTooltip,
                caretStyle: tooltipStyles.coinsCaret
            };
        case 2:
            return {
                type: TOOLTIP_TYPES.DAILY_STEPS_CTA,
                positionStyle: StyleSheet.flatten([
                    tooltipStyles.dailyStepsCtaTooltip,
                    { top: dailyStepsTop - Style.SCALE_UP_AND_DOWN(62) }
                ])
            };
        case 3:
            return {
                type: TOOLTIP_TYPES.QUESTS_NAV,
                positionStyle: tooltipStyles.navTooltip,
                caretDirection: "bottom" as CaretDirection,
                caretStyle: tooltipStyles.questsNavCaret
            };
        case 4:
            return {
                type: TOOLTIP_TYPES.TODAYS_YUCOIN,
                positionStyle: StyleSheet.flatten([
                    tooltipStyles.dailyStepsCtaTooltip,
                    { top: yucoinTop - Style.SCALE_UP_AND_DOWN(30) }
                ])
            };
        case 5:
            return {
                type: TOOLTIP_TYPES.LEADERBOARD,
                positionStyle: tooltipStyles.navTooltip,
                caretDirection: "bottom" as CaretDirection,
                caretStyle: tooltipStyles.leaderboardCaret
            };
        case 6:
            return {
                type: TOOLTIP_TYPES.STREAKS,
                positionStyle: tooltipStyles.streaksTooltip,
                caretStyle: tooltipStyles.streaksCaret
            };
        case 7:
            return {
                type: TOOLTIP_TYPES.REWARDS,
                positionStyle: tooltipStyles.navTooltip,
                caretDirection: "bottom" as CaretDirection,
                caretStyle: tooltipStyles.rewardsCaret
            };
    }
}

export function getHighlightedLabel(activeIndex: number) {
    switch (activeIndex) {
        case 3:
            return "quests";
        case 5:
            return "leaderboard";
        case 7:
            return "rewards";
    }
}
