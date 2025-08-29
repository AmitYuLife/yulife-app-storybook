import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { TextTemplate } from "@atoms";
import { RadioIcon } from "@atoms/icon/radio-icon";
import { BoxOption } from "@molecules";

interface ListItem {
  label: string;
  checked: boolean;
}

interface IProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected: boolean;
  onPress?: () => void;
  selectedStyle?: ViewStyle;
  list: ListItem[];
}
const ChecklistInfoCard = ({ icon, title, description, isSelected, onPress, list, selectedStyle }: IProps) => {
  return (
    <BoxOption
      onPress={onPress}
      isSelected={isSelected}
      selectedStyle={[styles.checked, selectedStyle]}
      innerHeight={Style.adjust(255)}
    >
      <View style={[styles.wrapper]}>
        <View style={styles.header}>
          {icon}
          <View style={styles.title}>
            <TextTemplate type="l1b">{title}</TextTemplate>
          </View>
          <TextTemplate type="l1" textAlign="center">
            {description}
          </TextTemplate>
        </View>
        <View>
          {list.map((i) => (
            <View key={i.label} style={styles.listWrapper}>
              <RadioIcon checked={i.checked} />
              <View style={styles.listLabel}>
                <TextTemplate type="l1b" color={i.checked ? Colours.status.su400 : Colours.status.er300}>
                  {i.label}
                </TextTemplate>
              </View>
            </View>
          ))}
        </View>
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(162),
    paddingHorizontal: Style.adjust(16),
    paddingTop: Style.adjust(16),
    borderRadius: 8,
    borderColor: Colours.metallic.m100,
  },
  header: {
    alignItems: "center",
    marginBottom: Style.adjust(16),
  },
  title: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(8),
  },
  listWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingStart: Style.adjust(8),
    marginBottom: Style.adjust(8),
  },
  listLabel: {
    marginStart: Style.adjust(8),
  },
  checked: {
    backgroundColor: "#EBF5ED",
    borderColor: Colours.status.su400,
    borderWidth: 1,
  },
});

export default memo(ChecklistInfoCard);
