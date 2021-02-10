import React, { useMemo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { useSelector } from "react-redux";
import { Text } from "@atoms";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { useQuery } from "@apollo/react-hooks";
import { GetYulifer } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import { DuelImage } from "../../subcomponents";
import { addCommasToNumber } from "@services/utils";

const UserSteps = () => {
  const dailySteps = useSelector(getDailySteps);
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-and-network",
  });
  const avatarSource = useMemo(() => {
    return data?.getYulifer?.avatarRemoteFiles?.pngMini;
  }, [data]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <DuelImage size="medium" uri={avatarSource} />
      </View>
      <Text bold={true} style={styles.text}>
        {addCommasToNumber(dailySteps)} steps today
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: Style.adjust(50),
    marginTop: Style.adjust(24),
    marginBottom: Style.adjust(40),
    paddingLeft: Style.adjust(8),
    backgroundColor: Colours.blue.b200,
    borderRadius: 8,
  } as ViewStyle,
  text: {
    color: Colours.yuscreen.white,
    fontSize: Style.adjust(18),
    lineHeight: Style.adjust(22),
  } as TextStyle,
  imageWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: Style.adjust(50),
    paddingTop: 10,
    marginRight: Style.adjust(8),
  } as ViewStyle,
});

export default UserSteps;
