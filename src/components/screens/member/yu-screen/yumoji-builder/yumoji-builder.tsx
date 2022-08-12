import React, { FC, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { GenericHeadingPad, GenericHeadingAbsolute } from "@organisms";
import { Colours, Style } from "@styles";
import YumojiBuilderCategories from "./components/yumoji-builder-categories";
import YumojiBuilderItemList from "./components/yumoji-builder-item-list";
import { ActionTypes, IState, IDispatch } from "@components/containers/member/yumoji-builder/yumoji-builder.reducer";
import { ScalableYumoji } from "@organisms/yumoji/scalableYumoji";
import { GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts as YumojiBuilderInitialParts } from "@graphql/_core/schema";
import { useBackHandler } from "@hooks";
import { BODY_TYPE } from "@ids";

interface IProps {
  state: IState;
  dispatch: IDispatch;
  onBackPressed: () => void;
  heading: string;
  updateAvatar: () => void;
}

const AVATAR_WIDTH = Style.adjust(160) * 0.73;
const AVATAR_HEIGHT = Style.adjust(340) * 0.73;

const YumojiBuilder: FC<IProps> = ({ state, dispatch, onBackPressed, updateAvatar, heading }) => {
  const categoryProps = useMemo(() => {
    const category =
      state?.selectedCategoryId &&
      state.categories?.items.find(
        (cat) =>
          cat.id === state.selectedCategoryId ||
          cat.children?.some((childCat) => childCat.id === state.selectedCategoryId)
      );
    return {
      preview: {
        top: category?.previewTop || 0,
        left: category?.previewLeft || 0,
        zoom: 1,
      },
      zoom: category?.previewZoom || 1,
    };
  }, [state.categories, state.selectedCategoryId]);
  const onPress = useCallback(
    (id, matchType, children) =>
      dispatch({ type: ActionTypes.SET_SELECTED_CATEGORY, payload: { id, matchType, children } }),
    [dispatch]
  );

  const updateUserAvatar = useCallback((payload) => dispatch({ type: ActionTypes.SET_MULTIPLE_PARTS, payload }), [
    dispatch,
  ]);

  const items = useMemo(() => Object.values(state?.parts) as YumojiBuilderInitialParts[], [state?.parts]);

  useBackHandler(() => {
    onBackPressed();
    return true;
  });

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.elementWrapper}>
        <View style={styles.yumoji}>
          <ScalableYumoji
            preview={categoryProps.preview}
            height={AVATAR_HEIGHT * categoryProps.zoom}
            width={AVATAR_WIDTH * categoryProps.zoom}
            items={items}
            bodyType={state.bodyType}
            testID={BODY_TYPE(state.bodyType)}
          />
        </View>
        <YumojiBuilderCategories
          categories={state.categories.items}
          loading={state.categories.loading}
          selectedCategoryId={state.selectedCategoryId}
          onPress={onPress}
        />
        <YumojiBuilderItemList
          itemList={state.itemList}
          selectedCategoryId={state.selectedCategoryId}
          updateUserAvatar={updateUserAvatar}
          emptyMessage={state.emptyMessage}
        />
      </View>
      <GenericHeadingAbsolute
        leftIcon="BACK"
        heading={heading}
        onLeftIconPress={onBackPressed}
        onRightIconPress={updateAvatar}
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
    height: AVATAR_HEIGHT,
    overflow: "hidden",
  },
});

export default YumojiBuilder;
