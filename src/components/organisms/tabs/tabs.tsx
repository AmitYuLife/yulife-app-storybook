import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { PressableWithDelay } from "@molecules";

interface IIcon {
  width?: number;
  height?: number;
  colour?: string;
}

interface IList {
  name: string;
  Icon: React.MemoExoticComponent<({ width, height, colour }: IIcon) => JSX.Element>;
  onPress: () => void;
}

interface IProps {
  list: IList[];
  defaultTab?: number;
}

const Tabs = ({ list, defaultTab }: IProps) => {
  const [selected, setSelected] = useState(list[defaultTab <= list.length - 1 ? defaultTab : 0]?.name);
  return (
    <View style={styles.wrapper}>
      {list.map(({ name, Icon, onPress }, index) => {
        const isSelected = name === selected;
        const colour = isSelected ? Colours.primary.p600 : "#5C5757";
        const border = isSelected ? styles.listBorder : {};
        return (
          <PressableWithDelay
            key={name}
            onPress={() => {
              setSelected(name);
              onPress();
            }}
          >
            <View style={[styles.list, border, { marginRight: index === list.length - 1 ? 0 : Style.adjust(40) }]}>
              {!Icon ? null : <Icon colour={colour} />}
              <View style={styles.listName}>
                <TextTemplate color={colour} type={isSelected ? "b2b" : "b2"}>
                  {name}
                </TextTemplate>
              </View>
            </View>
          </PressableWithDelay>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingLeft: Style.adjust(32),
    paddingRight: Style.adjust(32),
  },
  list: {
    flexDirection: "row",
  },
  listBorder: {
    borderBottomColor: Colours.primary.p600,
    borderBottomWidth: 2,
  },
  listName: {
    marginLeft: Style.adjust(8),
    paddingBottom: Style.adjust(8),
  },
});

export default memo(Tabs);
