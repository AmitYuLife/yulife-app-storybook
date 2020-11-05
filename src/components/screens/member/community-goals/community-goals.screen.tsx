import { MutationFunctionOptions } from "@apollo/react-common";
import * as React from "react";
import {
  GetCommunityGoals_getCommunityGoals,
  JoinCommunityGoal,
  JoinCommunityGoalVariables,
} from "@graphql/_core/schema";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { GenericHeading } from "@atoms";
import { Style } from "@styles";
import { EmptyCommunityGoals, CommunityGoal } from "./subcomponents";
import { View } from "react-native-animatable";

interface IProps {
  onClose: () => void;
  onRefresh: () => void;
  joinCommunityGoal: (options: MutationFunctionOptions<JoinCommunityGoal, JoinCommunityGoalVariables>) => Promise<{}>;
  data: GetCommunityGoals_getCommunityGoals[];
  loading: boolean;
}

const CommunityGoalsScreen: React.FC<IProps> = ({ onClose, onRefresh, joinCommunityGoal, data = [], loading }) => {
  return (
    <SafeAreaView style={styles.wrapper} testID={"comunitygoals"}>
      <GenericHeading heading="Community Goals" onLeftIconPress={onClose} />
      <FlatList
        style={styles.flatList}
        data={data}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyCommunityGoals />}
        refreshing={loading}
        onRefresh={onRefresh}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => <CommunityGoal goal={item} joinCommunityGoal={joinCommunityGoal} />}
        ListFooterComponent={<Footer />}
      />
    </SafeAreaView>
  );
};

export default CommunityGoalsScreen;

function keyExtractor({ id }: GetCommunityGoals_getCommunityGoals) {
  return id;
}

function Footer() {
  return <View style={styles.footer} />;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  flatList: {
    padding: Style.adjust(24),
  },
  footer: {
    height: Style.adjust(32),
  },
});
