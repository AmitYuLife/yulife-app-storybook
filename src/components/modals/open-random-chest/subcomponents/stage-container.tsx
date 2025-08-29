import { memo, ReactNode } from "react";
import { View } from "react-native";

import { StyleSheet } from "@styles";
interface IStageContainerProps {
  children: ReactNode;
}

const StageContainer = ({ children }: IStageContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default memo(StageContainer);
