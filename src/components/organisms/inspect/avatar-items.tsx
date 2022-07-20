import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { ActivityAvatar } from "@molecules";
import { Colours, Style } from "@styles";

interface IProps {
  avatarUri: string;
  opponentAvatarUri?: string;
  name?: string;
  inspectOtherUser: boolean;
}

const AvatarItems = ({ avatarUri, opponentAvatarUri, name, inspectOtherUser }: IProps) => {
  return (
    <>
      {inspectOtherUser ? (
        <View style={styles.opponentStateWrapper}>
          <ActivityAvatar name={name} avatarUri={avatarUri} opponent={true} inspectOtherUser={inspectOtherUser} />
          <View style={styles.vs}>
            <TextTemplate type="b2b" color={Colours.neutral.n500}>
              VS
            </TextTemplate>
          </View>
          <ActivityAvatar
            name="You"
            avatarUri={opponentAvatarUri}
            opponent={false}
            inspectOtherUser={inspectOtherUser}
          />
        </View>
      ) : (
        <ActivityAvatar name="You" avatarUri={avatarUri} opponent={false} inspectOtherUser={inspectOtherUser} />
      )}
    </>
  );
};

export default memo(AvatarItems);

const styles = StyleSheet.create({
  vs: {
    paddingTop: Style.adjust(2),
    paddingLeft: Style.adjust(2),
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
