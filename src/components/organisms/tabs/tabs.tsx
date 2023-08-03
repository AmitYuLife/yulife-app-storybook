import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { PressableWithDelay } from "@molecules";
import LinearGradient from "react-native-linear-gradient";

interface IIcon {
  width?: number;
  height?: number;
  colour?: string;
}

export interface IList {
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
    <View>
      <View style={styles.wrapper}>
        {list.map(({ name, Icon, onPress }) => {
          const isSelected = name === selected;
          const colour = isSelected ? Colours.primary.p600 : "#5C5757";
          const border = isSelected ? styles.listBorder : {};
          return (
            <PressableWithDelay
              key={name}
              style={styles.listWrapper}
              onPress={() => {
                setSelected(name);
                onPress();
              }}
            >
              <View style={[styles.list, border]}>
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
      <LinearGradient
        useAngle={true}
        angle={180}
        colors={["#F5F5F5", "#F6F6F6", "#F7F7F7", "#F8F8F8", "#F9F9F9", "#FAFAFA"]}
        locations={[0.16, 0.16, 0.16, 0.16, 0.16, 0.16]}
        style={[styles.whiteFade]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  listWrapper: {
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  list: {
    flexDirection: "row",
  },
  listBorder: {
    borderBottomColor: Colours.primary.p600,
    borderBottomWidth: 3,
  },
  listName: {
    marginLeft: Style.adjust(8),
    paddingBottom: Style.adjust(8),
  },
  whiteFade: {
    width: "100%",
    height: Style.adjust(7),
  },
});

export default memo(Tabs);
