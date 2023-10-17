import { Source } from "react-native-fast-image";
import React, { memo, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image, SkeletonLoading, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { PressableWithDelay } from "@molecules";
import { LEADBOARD_TAB } from "@ids";

interface IIcon {
  width?: number;
  height?: number;
  colour?: string;
}

interface IIcons {
  icon: Source;
  selectedIcon: Source;
  width?: number;
  height?: number;
}

export interface IList {
  name: string;
  Icon?: React.MemoExoticComponent<({ width, height, colour }: IIcon) => JSX.Element>;
  icons?: IIcons;
  onPress: () => void;
}

interface IProps {
  list: IList[];
  defaultTab?: number;
  isLoading?: boolean;
  initialLoading?: boolean;
}

const Tabs = ({ list, defaultTab, isLoading }: IProps) => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(list[defaultTab <= list?.length - 1 ? defaultTab : 0]?.name);
  }, [list, defaultTab]);

  return (
    <View style={styles.wrapper}>
      {list?.map(({ name, Icon, icons, onPress }) => {
        const isSelected = name === selected;
        const colour = isSelected ? Colours.primary.p600 : "#5C5757";
        const border = isSelected ? styles.listBorder : {};

        return (
          <PressableWithDelay
            key={name}
            style={styles.listWrapper}
            onPress={() => {
              if (!isLoading) {
                setSelected(name);
                onPress();
              }
            }}
          >
            <View style={[styles.list, border]}>
              {!Icon ? null : <Icon colour={colour} />}
              {!icons ? null : (
                <Image
                  source={isSelected ? icons.selectedIcon : icons.icon}
                  width={icons.width}
                  height={icons.height}
                />
              )}
              <View style={styles.listName}>
                <TextTemplate color={colour} type={isSelected ? "b2b" : "b2"} testID={LEADBOARD_TAB(name)}>
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

const TabsLoading = memo(() => (
  <View style={styles.wrapper}>
    <View style={styles.listWrapper}>
      <SkeletonLoading style={styles.loadingList} />
    </View>
    <View style={styles.listWrapper}>
      <SkeletonLoading style={styles.loadingList} />
    </View>
  </View>
));

const _Tabs = ({ list, defaultTab, isLoading, initialLoading }: IProps) => (
  <View>{initialLoading ? <TabsLoading /> : <Tabs list={list} isLoading={isLoading} defaultTab={defaultTab} />}</View>
);

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
    borderBottomWidth: 2,
  },
  listName: {
    marginLeft: Style.adjust(8),
    paddingBottom: Style.adjust(8),
  },
  loadingList: {
    width: Style.adjust(72),
    height: Style.adjust(23),
  },
});

export default memo(_Tabs);
