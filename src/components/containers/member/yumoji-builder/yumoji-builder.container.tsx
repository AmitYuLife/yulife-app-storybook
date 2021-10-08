import React, { FC, useCallback, useEffect, useReducer } from "react";
import { useMutation, useLazyQuery, useQuery } from "@apollo/react-hooks";
import { AvatarBuilderHeading } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
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
import SelectBody from "@components/screens/member/yu-screen/select-body-new/select-body";
import { GQL_MUTATION_UPDATE_AVATAR, UpdateAvatarMutationTuple } from "@graphql/yuscreen/updateAvatar.gql";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { showAwardModal } from "./yumoji-builder.helpers";
import Logger from "@services/logging/logger";
import { cache } from "@services/image";
import { showGenericModal } from "@navigation/utils";

interface IProps {
  heading: AvatarBuilderHeading;
}

const YumojiBuilderContainer: FC<IProps> = ({ heading }) => {
  const [state, dispatch] = useReducer<React.Reducer<IState, IAction>>(reducer, INITIAL_STATE);

  const [updateUserAvatar]: UpdateAvatarMutationTuple = useMutation(GQL_MUTATION_UPDATE_AVATAR);

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
        // TODO: work out how to avoid refetch and instead set the fragment direct instead of re-fetching
        refetchQueries: ["GetYulifer", "GetLeaderboard"],
      });

      if (response.data?.updateUserAvatarParts?.rewarded) {
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
      "Great choices!",
      "Do you want to keep all the changes you made? (Equipped items on the YU screen are not affected by this change)",
      handleAvatarUpdate,
      "Save changes",
      "Discard changes"
    );
  }, [handleAvatarUpdate]);

  useQuery<GetYumojiBuilderCategoryList>(GQL_QUERY_GET_YUMOJI_BUILDER_CATEGORY_LIST, {
    onCompleted: ({ getYumojiBuilderCategoryList }) => {
      cache(getYumojiBuilderCategoryList.map(({ icon: { uri } }) => ({ uri })));
      dispatch({ type: ActionTypes.SET_CATEGORIES, payload: getYumojiBuilderCategoryList });
    },
    fetchPolicy: "cache-first",
  });

  const [getYumojiBuilderInitialParts, { loading: loadingInitialParts }] = useLazyQuery<
    GetYumojiBuilderInitialParts,
    GetYumojiBuilderInitialPartsVariables
  >(GQL_QUERY_GET_YUMOJI_BUILDER_INITIAL_PARTS, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      cache(data?.getYumojiBuilderInitialParts.map(({ remoteUrl: { uri } }) => ({ uri })));
      dispatch({ type: ActionTypes.INITIAL_STATE, payload: data?.getYumojiBuilderInitialParts });
    },
  });

  const [getYumojiBuilderItemsForCategory] = useLazyQuery<
    GetYumojiBuilderItemsForCategory,
    GetYumojiBuilderItemsForCategoryVariables
  >(GQL_QUERY_GET_YUMOJI_BUILDER_ITEMS_FOR_CATEGORY, {
    fetchPolicy: "cache-first",
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
    const { selectedCategoryId, bodyType, partId } = state;
    if (selectedCategoryId && bodyType !== AvatarBodyType.neutral) {
      const variables = {
        categoryId: selectedCategoryId,
        bodyType,
        partId,
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

  if (loadingInitialParts) {
    return <Loading />;
  }

  if (state.bodySelected) {
    return (
      <YumojiBuilder
        state={state}
        dispatch={dispatch}
        onBackPressed={onBackPressed}
        heading={heading}
        updateAvatar={updateAvatar}
      />
    );
  }

  return <SelectBody onContinue={handleBodySelected} heading={heading} bodyType={state.bodyType} />;
};

const returnToYuScreen = () => {
  Navigation.dismissAllModals();
  Navigation.popTo(ROUTES.yuScreen);
};

export default YumojiBuilderContainer;
