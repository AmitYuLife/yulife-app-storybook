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
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { IRightIcon } from "@atoms/generic-heading/generic-heading.types";

interface IProps {
  onClose: () => void;
  onRefresh: () => void;
  joinCommunityGoal: (options: MutationFunctionOptions<JoinCommunityGoal, JoinCommunityGoalVariables>) => Promise<{}>;
  data: GetCommunityGoals_getCommunityGoals[];
  loading: boolean;
}

const RIGHT_ICON: IRightIcon = { icon: "EDIT" };

const CommunityGoalsScreen: React.FC<IProps> = ({ onClose, onRefresh, joinCommunityGoal, data = [], loading }) => {
  const handleRightIconPress = () => {
    Navigation.push(ROUTES.communityGoals, {
      component: {
        id: ROUTES.changeMemberNickname,
        name: ROUTES.changeMemberNickname,
      },
    });
  };

  return (
    <SafeAreaView style={styles.wrapper} testID={"comunitygoals"}>
      <GenericHeading
        heading="Community Goals"
        onLeftIconPress={onClose}
        rightIcon={RIGHT_ICON}
        onRightIconPress={handleRightIconPress}
      />
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
