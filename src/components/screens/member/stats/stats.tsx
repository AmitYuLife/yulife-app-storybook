import { Close, GenericHeading } from "@atoms/index";
import * as React from "react";
import { Image, SafeAreaView, SectionList, StyleSheet, TouchableOpacity, View } from "react-native";
import { GetHighlights_getUserStats, GetHighlights_getUserStats_data as Card } from "../../../../graphql/_core/schema";
import { Style } from "../../../../styles";
import { Text } from "../../../atoms";
import BestScoreCard from "./cards/best-score-card";
import ComparisonCard from "./cards/comparison-card";
import GeneralInfoCard from "./cards/general-info-card";
import RecommendationInfoCard from "./cards/recommendation-info-card";
import WeeklyGraphCard from "./cards/weekly-graph-card";
import styles from "./stats.styles";
import { STATS_TITLE, STATS_SCREEN } from "@ids";

interface IProps {
  data?: GetHighlights_getUserStats[];
  onPressClose: () => void;
  onPressActivityHistory: () => void;
}

const Stats = ({ data, onPressClose, onPressActivityHistory }: IProps) => (
  <SafeAreaView style={styles.wrapper} testID={STATS_SCREEN}>
    <GenericHeading heading={"statistics"} />
    <View style={{ backgroundColor: "#FAFAFE" }}>
      {!data ? null : (
        <SectionList
          contentContainerStyle={styles.sectionListContainer}
          style={styles.sectionList}
          sections={data}
          stickySectionHeadersEnabled={false}
          keyExtractor={(item, index) => item.cardType + index} // WTF? each card should have its own id
          renderItem={({ item, section: { category } }) => getItem(item, category, onPressActivityHistory)}
          renderSectionHeader={({ section: { title, titleColor, category, index } }) => (
            <HeaderSection title={title as string} titleColor={titleColor} category={category} index={index} />
          )}
        />
      )}
    </View>
    <Close onPress={onPressClose} />
  </SafeAreaView>
);

export default Stats;

function getItem(card: Card, category: string, onPressActivityHistory: () => void) {
  switch (card.cardType) {
    case "general":
      return <GeneralInfoCard title={card.title} titleColor={card.titleColor} value={card.value} unit={card.unit} />;
    case "bestScore":
      return (
        <BestScoreCard
          title={card.title}
          titleColor={card.titleColor}
          value={card.value}
          unit={card.unit}
          date={card.date}
          subTitleColor={card.subTitleColor}
          dateText={card.dateText}
        />
      );
    case "insights":
    case "motivation":
    case "achievement":
      return (
        <RecommendationInfoCard
          title={card.title}
          category={category}
          titleColor={card.titleColor}
          cardType={card.cardType}
        />
      );
    case "graph":
      return (
        <WeeklyGraphCard
          title={card.title}
          titleColor={card.titleColor}
          weeklyValue={card.graphData.weekData}
          unit={card.unit}
          averageLineColor={card.graphData.averageLineColor}
          graphColor={card.graphData.graphColor}
          category={category}
        />
      );
    case "comparison":
      return (
        <ComparisonCard
          title={card.title}
          titleColor={card.titleColor}
          firstTitle={card.comparisonData.firstTitle}
          firstTitleColor={card.comparisonData.firstTitleColor}
          firstValue={card.comparisonData.firstValue}
          secondTitle={card.comparisonData.secondTitle}
          secondTitleColor={card.comparisonData.secondTitleColor}
          secondValue={card.comparisonData.secondValue}
        />
      );
    case "activityHistory":
      return (
        <View style={styles.activityHistoryWrapper}>
          <TouchableOpacity onPress={onPressActivityHistory}>
            <Text style={styles.activityHistory}>{card.title}</Text>
          </TouchableOpacity>
        </View>
      );
    default:
      return <View />;
  }
}

interface IHeaderProps {
  title: string;
  titleColor: string;
  category: string;
  index: number;
}

function HeaderSection({ title, titleColor, category, index }: IHeaderProps) {
  return (
    <View
      style={StyleSheet.flatten([styles.headerWrapper, { paddingTop: Style.SCALE_UP_AND_DOWN(index === 0 ? 24 : 12) }])}
    >
      <View style={styles.iconWrapper}>
        <Image style={styles.logo} source={getCategorySourceImage(category)} />
      </View>
      <Text style={StyleSheet.flatten([styles.headerTitle, { color: titleColor }])} testID={STATS_TITLE(title)}>
        {title}
      </Text>
    </View>
  );
}

function getCategorySourceImage(category: string) {
  switch (category) {
    case "coin":
      return require("../../../../../assets/stats/yucoin.png");
    case "challenge":
      return require("../../../../../assets/stats/challenges.png");
    case "step":
      return require("../../../../../assets/stats/steps.png");
    case "mindfulness":
      return require("../../../../../assets/stats/mindfulness.png");
    case "cycling":
      return require("../../../../../assets/stats/cycling.png");
    default:
      return require("../../../../../assets/stats/yucoin.png");
  }
}
