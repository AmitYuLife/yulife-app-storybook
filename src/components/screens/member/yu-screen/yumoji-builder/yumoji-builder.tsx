import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { AvatarBuilderHeading } from "../avatar-builder/avatar.types";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { Colours, Style } from "@styles";
import YumojiBuilderCategories from "./components/yumoji-builder-categories";
import YumojiBuilderItemList from "./components/yumoji-builder-item-list";

import { ActionTypes, IState, IDispatch } from "@components/containers/member/yumoji-builder/yumoji-builder.reducer";
import { Yumoji } from "@organisms/yumoji/scalableYumoji";
import { GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts as YumojiBuilderInitialParts } from "@graphql/_core/schema";

interface IProps {
  state: IState;
  dispatch: IDispatch;
  onBackPressed: () => void;
  heading: AvatarBuilderHeading;
}

const AVATAR_WIDTH = Style.adjust(160) * 0.73;
const AVATAR_HEIGHT = Style.adjust(328) * 0.73;

const YumojiBuilder: FC<IProps> = ({ state, dispatch, onBackPressed, heading }) => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.elementWrapper}>
        <View style={styles.yumoji}>
          <Yumoji
            height={AVATAR_HEIGHT}
            width={AVATAR_WIDTH}
            items={Object.values(state?.parts) as YumojiBuilderInitialParts[]}
          />
        </View>
        <YumojiBuilderCategories
          categories={state.categories}
          selectedCategoryId={state.selectedCategoryId}
          onPress={(id, matchType) => dispatch({ type: ActionTypes.SET_SELECTED_CATEGORY, payload: { id, matchType } })}
        />
        <YumojiBuilderItemList
          itemList={state.itemList}
          updateUserAvatar={(payload) => {
            dispatch({ type: ActionTypes.SET_MULTIPLE_PARTS, payload });
          }}
        />
      </View>
      <GenericHeadingAbsolute
        leftIcon="BACK"
        heading={heading}
        onLeftIconPress={() => {
          onBackPressed();
        }}
        onRightIconPress={() => console.log("right ")}
        rightIcon="SAVE"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
  },
  elementWrapper: {
    flex: 1,
  },
  yumoji: {
    alignItems: "center",
  },
});

export default YumojiBuilder;
