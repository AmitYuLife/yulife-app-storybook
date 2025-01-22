import { memo } from "react";
import { View, ScrollView } from "react-native";
import styles from "./active-duels.styles";
import UserSteps from "./subcomponents/user-steps";
import TodaysDuels from "./subcomponents/duels-today";
import TomorrowsDuels from "./subcomponents/duels-tomorrow";
import Invitations from "./subcomponents/duel-invitations";

const ActiveDuels = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
        <UserSteps />
        <TodaysDuels />
        <TomorrowsDuels />
        <Invitations />
      </ScrollView>
    </View>
  );
};

export default memo(ActiveDuels);
