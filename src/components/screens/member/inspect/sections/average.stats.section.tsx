import React, { memo } from "react";
import { AvatarItems } from "@organisms";
import { Colours, Style, StyleSheet } from "@styles";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import AverageItem, { IAverageItem } from "@components/molecules/inspect/average-item";
import { INSPECT_ACTIVITY_SECTION, INSPECT_ACTIVITY_PERIOD, INSPECT_ACTIVITY_HEADER } from "@ids";
import { IAvatarFrame } from "@redux/leaderboards/leaderboards.types";

export interface ActivityItems {
  title: string;
  subTitle: string;
  avatarUri: string;
  opponentAvatarUri?: string;
  name?: string;
  averageItems: IAverageItem[];
  avatarFrame?: IAvatarFrame;
  opponentAvatarFrame?: IAvatarFrame;
}

interface IProps {
  activity: ActivityItems;
  inspectOtherUser: boolean;
}

const AverageStatsSection = ({ activity, inspectOtherUser }: IProps) => {
  const {
    avatarUri,
    opponentAvatarUri,
    name,
    averageItems,
    title: activitySectionTitle,
    subTitle: activitySectionSubTitle,
  } = activity;

  return (
    <View testID={INSPECT_ACTIVITY_SECTION}>
      <View style={styles.activityHeader}>
        <TextTemplate type="h3" testID={INSPECT_ACTIVITY_HEADER}>
          {activitySectionTitle}
        </TextTemplate>
        <TextTemplate type="b2" testID={INSPECT_ACTIVITY_PERIOD}>
          {activitySectionSubTitle}
        </TextTemplate>
      </View>

      <View style={styles.box}>
        {!inspectOtherUser ? (
          <>
            <AvatarItems avatarUri={avatarUri} inspectOtherUser={inspectOtherUser} avatarFrame={activity.avatarFrame} />
            {averageItems?.map(({ icon, value, name: statsName, id, label }) => (
              <AverageItem icon={icon} value={value} name={statsName} key={id} label={label} />
            ))}
          </>
        ) : (
          <>
            <AvatarItems
              avatarUri={avatarUri}
              avatarFrame={activity.avatarFrame}
              opponentAvatarFrame={activity.opponentAvatarFrame}
              opponentAvatarUri={opponentAvatarUri}
              name={name}
              inspectOtherUser={inspectOtherUser}
            />
            {averageItems?.map(({ icon, value, name: statsName, opponentIsWinner, opponentValue, id, label }) => (
              <AverageItem
                icon={icon}
                value={value}
                name={statsName}
                opponentIsWinner={opponentIsWinner}
                opponentValue={opponentValue}
                label={label}
                key={id}
              />
            ))}
          </>
        )}
      </View>
    </View>
  );
};

export default memo(AverageStatsSection);

const styles = StyleSheet.create({
  box: {
    borderColor: Colours.neutral.n100,
    backgroundColor: Colours.neutral.white,
    borderWidth: Style.adjust(1),
    borderRadius: Style.adjust(8),
    paddingHorizontal: Style.adjust(16),
    paddingVertical: Style.adjust(4),
    marginVertical: Style.adjust(16),
  },
  activityHeader: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(8),
    alignItems: "center",
  },
});
