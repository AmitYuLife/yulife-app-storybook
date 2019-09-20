import { Text } from "@atoms/index";
import { GetMobileCopy_getMobileCopy_screens_intro } from "@graphql/_core/schema";
import * as React from "react";
import { Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import assets from "./assets";
import { getStyleFromCaretPosition } from "./tooltip.helpers";
import { TOOLTIP_TYPES, TooltipTypes } from "./tooltip.types";
import styles from "./toolttip.styles";
import WelcomeTooltip from "./welcome-tooltip";

interface IProps {
    type: TooltipTypes;
    positionStyle?: StyleProp<ViewStyle>;
    caretDirection?: CaretDirection;
    caretStyle?: StyleProp<ViewStyle>;
    onPressCta: () => void;
    copy: GetMobileCopy_getMobileCopy_screens_intro;
}

export type CaretDirection = "left" | "right" | "top" | "bottom";

export default class Tooltip extends React.PureComponent<IProps> {
    public render() {
        const { copy, type, positionStyle, caretDirection, caretStyle, onPressCta } = this.props;
        if (type === TOOLTIP_TYPES.WELCOME) {
            return <WelcomeTooltip onPressCta={onPressCta} copy={copy.welcome} />;
        }
        return (
            <View style={[styles.tooltipWrapper, positionStyle]}>
                <View>
                    <View style={styles.shadow} />
                    <View style={StyleSheet.flatten([styles.tooltip, styles.genericPadding])}>
                        <View
                            style={StyleSheet.flatten([
                                styles.caretWrapper,
                                getStyleFromCaretPosition(caretDirection),
                                caretStyle
                            ])}
                        >
                            <Image source={assets.caret} style={styles.caret} />
                        </View>
                        <Text bold={true} style={StyleSheet.flatten([styles.description, styles.genericHeading])}>
                            {this.renderHeaderText()}
                        </Text>
                        <Text style={styles.description}>{this.renderSecondaryText()}</Text>
                        <TouchableOpacity onPress={onPressCta} activeOpacity={0.6}>
                            <View style={styles.buttonInsideWrapper}>
                                {/* copies are the same for non-welcome tooltips so I just returned one for now */}
                                <Text style={styles.generalTooltipCTA}>{copy.yucoin.ctaLabel}</Text>
                                <Image style={styles.check} source={assets.check} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    private renderHeaderText = () => {
        const { copy, type } = this.props;
        switch (type) {
            case TOOLTIP_TYPES.COINS:
                return copy.yucoin.heading;
            case TOOLTIP_TYPES.DAILY_STEPS_CTA:
                return copy.dailyStepsCTA.heading;
            case TOOLTIP_TYPES.QUESTS_NAV:
                return copy.questsNav.heading;
            case TOOLTIP_TYPES.TODAYS_YUCOIN:
                return copy.todaysYucoin.heading;
            case TOOLTIP_TYPES.LEADERBOARD:
                return copy.leaderboardsNav.heading;
            case TOOLTIP_TYPES.STREAKS:
                return copy.streaks.heading;
            case TOOLTIP_TYPES.REWARDS:
                return copy.rewardsNav.heading;
        }
    };

    private renderSecondaryText = () => {
        const { copy, type } = this.props;
        switch (type) {
            case TOOLTIP_TYPES.COINS:
                return copy.yucoin.subheading;
            case TOOLTIP_TYPES.DAILY_STEPS_CTA:
                return copy.dailyStepsCTA.subheading;
            case TOOLTIP_TYPES.QUESTS_NAV:
                return copy.questsNav.subheading;
            case TOOLTIP_TYPES.TODAYS_YUCOIN:
                return copy.todaysYucoin.subheading;
            case TOOLTIP_TYPES.LEADERBOARD:
                return copy.leaderboardsNav.subheading;
            case TOOLTIP_TYPES.STREAKS:
                return copy.streaks.subheading;
            case TOOLTIP_TYPES.REWARDS:
                return copy.rewardsNav.subheading;
        }
    };
}
