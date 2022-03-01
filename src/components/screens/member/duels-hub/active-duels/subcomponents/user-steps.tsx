import React, { useMemo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { useSelector } from "react-redux";
import { TextTemplate } from "@atoms";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { DuelImage } from "../../subcomponents";
import { addCommasToNumber } from "@utils";
import { getUserAvatar } from "@redux/user/user.selectors";

const UserSteps = () => {
  const dailySteps = useSelector(getDailySteps);
  const avatar = useSelector(getUserAvatar);
  const avatarSource = useMemo(() => avatar?.avatarRemoteFiles?.pngMini, [avatar]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <DuelImage size="medium" uri={avatarSource} />
      </View>
      <TextTemplate type={"b2b"} color={Colours.yuscreen.white}>
        {`${addCommasToNumber(dailySteps)} steps today`}
      </TextTemplate>
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
  imageWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: Style.adjust(50),
    paddingTop: 10,
    marginRight: Style.adjust(8),
  } as ViewStyle,
});

export default UserSteps;
