import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Radio, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { PressableWithDelay } from "@molecules";

interface ICommunity {
  id: string;
  name: string;
}

interface IProps {
  communities: ICommunity[];
  onSelect: (id: string) => void;
  defaultSelected: string;
}

const LeaderboardCommunityOverlay = ({ communities, onSelect, defaultSelected }: IProps) => {
  const [selected, setSelected] = useState(defaultSelected || "");
  return (
    <View style={styles.wrapper}>
      {communities.map((community) => (
        <PressableWithDelay
          style={styles.button}
          key={community.id}
          onPress={() => {
            setSelected(community.id);
            onSelect(community.id);
          }}
        >
          <TextTemplate type="b2" textAlign="center">
            {community.name}
          </TextTemplate>
          <View style={styles.radio}>
            <Radio selected={selected === community.id} />
          </View>
        </PressableWithDelay>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingHorizontal: Style.adjust(24),
  },
  button: {
    width: "100%",
    flexDirection: "row",
    marginBottom: Style.adjust(16),
  },
  radio: {
    position: "absolute",
    right: 0,
  },
});

export default memo(LeaderboardCommunityOverlay);
