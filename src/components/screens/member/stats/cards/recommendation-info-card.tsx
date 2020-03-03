import { Text } from "@atoms/index";
import * as React from "react";
import { SFC } from "react";
import { Image, StyleSheet, View } from "react-native";
import styles from "./recommendation-info-card.styles";

interface IProps {
    title: string;
    cardType: string;
    category: string;
    titleColor: string;
}
const RecommendationInfoCard: SFC<IProps> = ({ title, cardType, category, titleColor }) => {
    return (
        <View style={styles.wrapper}>
            <Text style={StyleSheet.flatten([styles.infotText, { color: titleColor }])}>{title}</Text>
            <Image style={styles.image} source={getImage(category, cardType)} />
        </View>
    );
};

function getImage(category: string, cardType: string) {
    switch (cardType) {
        case "insights":
            return getInsightsIcon(category);
        case "motivation":
            return getMotivationalIcon(category);
        case "achievement":
            return getAchievementIcon(category);
        default:
            return getAchievementIcon(category);
    }
}

function getInsightsIcon(category: string) {
    switch (category) {
        case "yucoin":
            return require("../../../../../../assets/stats/insights-yucoin.png");
        case "challenge":
            return require("../../../../../../assets/stats/insights-challenges.png");
        case "step":
            return require("../../../../../../assets/stats/insights-steps.png");
        case "mindfulness":
            return require("../../../../../../assets/stats/insights-mindfulness.png");
        case "cycling":
            return require("../../../../../../assets/stats/insights-cycling.png");
        default:
            return require("../../../../../../assets/stats/insights-yucoin.png");
    }
}

function getMotivationalIcon(category: string) {
    switch (category) {
        case "yucoin":
            return require("../../../../../../assets/stats/motivational-yucoin.png");
        case "challenge":
            return require("../../../../../../assets/stats/motivational-challenges.png");
        case "step":
            return require("../../../../../../assets/stats/motivational-steps.png");
        case "mindfulness":
            return require("../../../../../../assets/stats/motivational-mindfulness.png");
        case "cycling":
            return require("../../../../../../assets/stats/motivational-cycling.png");
        default:
            return require("../../../../../../assets/stats/motivational-yucoin.png");
    }
}

function getAchievementIcon(category: string) {
    switch (category) {
        case "yucoin":
            return require("../../../../../../assets/stats/achievement-yucoin.png");
        case "challenge":
            return require("../../../../../../assets/stats/achievement-challenges.png");
        case "step":
            return require("../../../../../../assets/stats/achievement-steps.png");
        case "mindfulness":
            return require("../../../../../../assets/stats/achievement-mindfulness.png");
        case "cycling":
            return require("../../../../../../assets/stats/achievement-cycling.png");
        default:
            return require("../../../../../../assets/stats/achievement-yucoin.png");
    }
}

export default RecommendationInfoCard;
