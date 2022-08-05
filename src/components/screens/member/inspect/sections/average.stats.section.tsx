import React, { memo } from "react";
import { AvatarItems } from "@organisms";
import { Colours, Style } from "@styles";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import AverageItem, { IAverageItem } from "@components/molecules/inspect/average-item";

export interface ActivityItems {
  title: string;
  subTitle: string;
  avatarUri: string;
  opponentAvatarUri?: string;
  name?: string;
  averageItems: IAverageItem[];
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
    <View>
      <View style={styles.activityHeader}>
        <TextTemplate type="h3">{activitySectionTitle}</TextTemplate>
        <TextTemplate type="b2">{activitySectionSubTitle}</TextTemplate>
      </View>

      <View style={styles.box}>
        {!inspectOtherUser ? (
          <>
            <AvatarItems avatarUri={avatarUri} inspectOtherUser={inspectOtherUser} />
            {averageItems?.map(({ icon, value, name: statsName, id, label }) => (
              <AverageItem icon={icon} value={value} name={statsName} key={id} label={label} />
            ))}
          </>
        ) : (
          <>
            <AvatarItems
              avatarUri={avatarUri}
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
