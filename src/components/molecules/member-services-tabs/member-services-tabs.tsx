import * as React from "react";
import { View } from "react-native";
import MemberServiceTab from "./member-services-tab/member-services-tab";
import styles from "./member-services-tabs.styles";
import { MemberService } from "./member-services.models";

export interface Tab {
  id: string;
  title: MemberService;
  handleTabClick: () => void;
  shouldDisplayTab: boolean;
}

interface IProps {
  tabs: Tab[];
  activeTabId: string;
}

function MemberServicesTabs({ tabs, activeTabId }: IProps) {
  if (!tabs[0].shouldDisplayTab || !tabs[1].shouldDisplayTab) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <MemberServiceTab isActive={activeTabId === tabs[0].id} onPress={tabs[0].handleTabClick} label={tabs[0].title} />
      <View style={styles.dividerWrapper}>
        <View style={styles.divider} />
      </View>
      <MemberServiceTab
        isActive={activeTabId === tabs[1].id}
        onPress={tabs[1].handleTabClick}
        isFlipped={tabs[0].shouldDisplayTab}
        label={tabs[1].title}
      />
    </View>
  );
}

export default MemberServicesTabs;
