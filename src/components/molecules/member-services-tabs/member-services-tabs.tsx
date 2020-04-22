import * as React from "react";
import { SFC } from "react";
import { View } from "react-native";
import MemberServiceTab from "./member-services-tab/member-services-tab";
import styles from "./member-services-tabs.styles";

interface IProps {
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  activeTabIndex: number;
}

const MemberServicesTabs: SFC<IProps> = ({ onLeftTabPress, onRightTabPress, activeTabIndex }) => (
  <View style={styles.wrapper}>
    <MemberServiceTab isActive={activeTabIndex === 0} onPress={onLeftTabPress} label="YuMatter" />
    <View style={styles.dividerWrapper}>
      <View style={styles.divider} />
    </View>
    <MemberServiceTab isActive={activeTabIndex === 1} onPress={onRightTabPress} isFlipped={true} label="SmartHealth" />
  </View>
);

export default MemberServicesTabs;
