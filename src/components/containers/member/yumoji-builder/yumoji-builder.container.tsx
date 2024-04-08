import React, { useCallback, useEffect, useReducer, useRef } from "react";
import { useMutation, useLazyQuery, useQuery } from "@apollo/client";
import { Loading } from "@atoms";
import { AvatarBodyType } from "@graphql/_core/schema/globalTypes";
import YumojiBuilder from "@components/screens/member/yu-screen/yumoji-builder/yumoji-builder";
import { ActionTypes, IAction, INITIAL_STATE, IState, reducer } from "./yumoji-builder.reducer";
import {
  GQL_QUERY_GET_YUMOJI_BUILDER_INITIAL_PARTS,
  GQL_QUERY_GET_YUMOJI_BUILDER_CATEGORY_LIST,
  GQL_QUERY_GET_YUMOJI_BUILDER_ITEMS_FOR_CATEGORY,
} from "@graphql/yuscreen";
import {
  GetYumojiBuilderCategoryList,
  GetYumojiBuilderInitialParts,
  GetYumojiBuilderInitialPartsVariables,
  GetYumojiBuilderItemsForCategory,
  GetYumojiBuilderItemsForCategoryVariables,
} from "@graphql/_core/schema";
import SelectBody from "@components/screens/member/yu-screen/select-body/select-body";
import { showAwardModal, returnToYuScreen, showExitModal } from "./yumoji-builder.helpers";
import Logger from "@services/logging/logger";
import { cache } from "@services/image";
import { showGenericModal } from "@navigation/utils";
import { useBackHandler, useTranslation } from "@hooks";
import { useDispatch, useSelector } from "react-redux";
import { refreshTotalCoins } from "@redux/coins/coins.actions";
import { updateUserAvatarRemoteFiles } from "@redux/user/user.actions";
import { getUserAvatar } from "@redux/user/user.selectors";
import { gql } from "@graphql/__generated";
import { getActiveSocialGroupLeaderboard } from "@redux/leaderboards/leaderboards.selectors";

const YumojiBuilderContainer = () => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, INITIAL_STATE);
  const activeLeaderboard = useSelector(getActiveSocialGroupLeaderboard);
  const appDispatch = useDispatch();
  const avatar = useSelector(getUserAvatar);
  const translations = useTranslation([
    "modals.generic_modal.yumoji_builder.heading",
    "modals.generic_modal.yumoji_builder.subheading",
    "modals.generic_modal.yumoji_builder.cta_label",
    "labels.cta.back",
  ]);

  const hasYumoji = !!avatar?.avatarRemoteFiles?.pngFull;

  const [updateUserAvatar] = useMutation(gql("UpdateAvatarDocument"));

  const handleAvatarUpdate = useCallback(async () => {
    try {
      const response = await updateUserAvatar({
        variables: {
          avatar: Object.values(state.parts).map((item) => ({
            partId: item.partId || "",
            partType: item.partType || "",
            colorSchemeId: item.colorSchemeId || "",
          })),
        },

        refetchQueries: [
          {
            query: gql("GetMobileSocialGroupLeaderboardItemsDocument"),
            variables: {
              leaderboardId: activeLeaderboard?.leaderboardId,
            },
          },
        ],
      });

      appDispatch(updateUserAvatarRemoteFiles(response?.data?.updateUserAvatarParts?.avatarRemoteFiles));

      if (response.data?.updateUserAvatarParts?.rewarded) {
        appDispatch(refreshTotalCoins());
        showAwardModal(returnToYuScreen, response.data.updateUserAvatarParts.rewardAmount);
      } else {
        returnToYuScreen();
      }
    } catch (e) {
      Logger.error(e, { event: "@update_user_avatar_error", file: "yumoji-builder.container" });
    }
  }, [updateUserAvatar, dispatch, returnToYuScreen, state]);

  const updateAvatar = useCallback(() => {
    showGenericModal(
      translations["modals.generic_modal.yumoji_builder.heading"],
      translations["modals.generic_modal.yumoji_builder.subheading"],
      handleAvatarUpdate,
      translations["modals.generic_modal.yumoji_builder.cta_label"],
      translations["labels.cta.back"]
    );
  }, [handleAvatarUpdate, translations]);

  useQuery<GetYumojiBuilderCategoryList>(GQL_QUERY_GET_YUMOJI_BUILDER_CATEGORY_LIST, {
    onCompleted: async ({ getYumojiBuilderCategoryList }) => {
      await cache(getYumojiBuilderCategoryList.map(({ icon: { uri } }) => ({ uri })));
      dispatch({ type: ActionTypes.SET_CATEGORIES, payload: getYumojiBuilderCategoryList });
    },
    fetchPolicy: "cache-and-network",
  });

  const [getYumojiBuilderInitialParts, { loading: loadingInitialParts }] = useLazyQuery<
    GetYumojiBuilderInitialParts,
    GetYumojiBuilderInitialPartsVariables
  >(GQL_QUERY_GET_YUMOJI_BUILDER_INITIAL_PARTS, {
    fetchPolicy: "cache-and-network",
    onCompleted: async (data) => {
      await cache(data?.getYumojiBuilderInitialParts.map(({ remoteUrl: { uri } }) => ({ uri })));
      dispatch({ type: ActionTypes.INITIAL_STATE, payload: data?.getYumojiBuilderInitialParts });
    },
  });

  const [getYumojiBuilderItemsForCategory] = useLazyQuery<
    GetYumojiBuilderItemsForCategory,
    GetYumojiBuilderItemsForCategoryVariables
  >(GQL_QUERY_GET_YUMOJI_BUILDER_ITEMS_FOR_CATEGORY, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      dispatch({ type: ActionTypes.SET_ITEM_LIST, payload: data?.getYumojiBuilderItemsForCategory });
    },
  });

  useEffect(() => {
    getYumojiBuilderInitialParts({
      variables: {
        bodyType: AvatarBodyType.neutral,
      },
    });
  }, []);

  useEffect(() => {
    const { selectedCategoryId, bodyType, partId, parts } = state;

    const getPart = Object.values(parts).find((part) => part.categoryId === selectedCategoryId);

    if (selectedCategoryId && bodyType !== AvatarBodyType.neutral) {
      const variables = {
        categoryId: selectedCategoryId,
        bodyType,
        partId,
        colorSchemeId: getPart?.colorSchemeId,
      };

      getYumojiBuilderItemsForCategory({ variables });
    }
  }, [state.selectedCategoryId, state.bodyType]);

  const handleBodySelected = useCallback(
    (bodyType: AvatarBodyType) => {
      dispatch({ type: ActionTypes.SET_SELECTED_BODY, payload: { bodySelected: true, bodyType } });

      getYumojiBuilderInitialParts({
        variables: {
          bodyType,
        },
      });
    },
    [getYumojiBuilderInitialParts, dispatch]
  );

  const onBackPressed = useCallback(() => {
    dispatch({ type: ActionTypes.ON_BACK_PRESSED });
  }, []);

  const isBackPressed = useRef(false);

  const backButtonHandler = useCallback(() => {
    if (!isBackPressed.current) {
      isBackPressed.current = true;
      if (state.hasUnsavedChanges) {
        showExitModal(isBackPressed);
        return true;
      }

      return false;
    }

    // never
    return false;
  }, [isBackPressed, state.hasUnsavedChanges]);

  useBackHandler(backButtonHandler);

  const onPressExitButton = useCallback(() => {
    if (state.hasUnsavedChanges) {
      showExitModal(isBackPressed);
      return;
    }

    returnToYuScreen();
  }, [state.hasUnsavedChanges, isBackPressed]);

  if (loadingInitialParts) {
    return <Loading />;
  }

  if (state.bodySelected) {
    return (
      <YumojiBuilder state={state} dispatch={dispatch} onBackPressed={onBackPressed} updateAvatar={updateAvatar} />
    );
  }

  return (
    <SelectBody
      onContinue={handleBodySelected}
      bodyType={state.bodyType}
      onPressExitButton={onPressExitButton}
      hasYumoji={hasYumoji}
    />
  );
};

export default YumojiBuilderContainer;
