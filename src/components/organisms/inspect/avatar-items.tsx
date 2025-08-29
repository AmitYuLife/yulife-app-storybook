import React, { memo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { ActivityAvatar } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { COMPARISON_STATS_SECTION, LEFT_USER, RIGHT_USER, SINGLE_USER } from "@ids";
import { t } from "@locale";
import { IAvatarFrame } from "@redux/leaderboards/leaderboards.types";
interface IProps {
  avatarUri: string;
  opponentAvatarUri?: string;
  name?: string;
  inspectOtherUser: boolean;
  avatarFrame: IAvatarFrame;
  opponentAvatarFrame?: IAvatarFrame;
}

const AvatarItems = ({
  avatarUri,
  avatarFrame,
  opponentAvatarFrame,
  opponentAvatarUri,
  name,
  inspectOtherUser,
}: IProps) => {
  return (
    <>
      {inspectOtherUser ? (
        <View style={styles.opponentStateWrapper} testID={COMPARISON_STATS_SECTION}>
          <ActivityAvatar
            name={name}
            avatarUri={avatarUri}
            opponent={true}
            inspectOtherUser={inspectOtherUser}
            testID={LEFT_USER}
            avatarFrame={avatarFrame}
          />
          <View style={styles.vs}>
            <TextTemplate type="b2b" color={Colours.neutral.n500}>
              {t("labels.vs")}
            </TextTemplate>
          </View>
          <ActivityAvatar
            name={t("labels.you")}
            avatarUri={opponentAvatarUri}
            avatarFrame={opponentAvatarFrame}
            opponent={false}
            inspectOtherUser={inspectOtherUser}
            testID={RIGHT_USER}
          />
        </View>
      ) : (
        <ActivityAvatar
          name={t("labels.you")}
          avatarUri={avatarUri}
          opponent={false}
          avatarFrame={avatarFrame}
          inspectOtherUser={inspectOtherUser}
          testID={SINGLE_USER}
        />
      )}
    </>
  );
};

export default memo(AvatarItems);

const styles = StyleSheet.create({
  vs: {
    paddingTop: Style.adjust(2),
    paddingStart: Style.adjust(2),
    marginTop: Style.adjust(80),
    height: Style.adjust(40),
    width: Style.adjust(40),
    borderWidth: Style.adjust(1),
    borderRadius: Style.adjust(20),
    borderColor: Colours.neutral.n100,
    alignItems: "center",
    justifyContent: "center",
  },
  opponentStateWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
