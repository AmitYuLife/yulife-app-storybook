import React, { FC, useCallback, useEffect, useReducer } from "react";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { AvatarBuilderHeading } from "@components/screens/member/yu-screen/avatar-builder/avatar.types";
import { Loading } from "@atoms";
import { AvatarBodyType } from "@graphql/_core/schema/globalTypes";
import YumojiBuilder from "@components/screens/member/yu-screen/yumoji-builder/yumoji-builder";
import { ActionTypes, INITIAL_STATE, reducer } from "./yumoji-builder.reducer";
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

interface IProps {
  componentId: string;
  heading: AvatarBuilderHeading;
}

const YumojiBuilderContainer: FC<IProps> = ({ heading }) => {
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(reducer, INITIAL_STATE);

  useQuery<GetYumojiBuilderCategoryList>(GQL_QUERY_GET_YUMOJI_BUILDER_CATEGORY_LIST, {
    onCompleted: ({ getYumojiBuilderCategoryList }) =>
      dispatch({ type: ActionTypes.SET_CATEGORIES, payload: getYumojiBuilderCategoryList }),
    fetchPolicy: "cache-and-network",
  });

  const [getYumojiBuilderInitialParts, { loading: loadingInitialParts }] = useLazyQuery<
    GetYumojiBuilderInitialParts,
    GetYumojiBuilderInitialPartsVariables
  >(GQL_QUERY_GET_YUMOJI_BUILDER_INITIAL_PARTS, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => dispatch({ type: ActionTypes.INITIAL_STATE, payload: data?.getYumojiBuilderInitialParts }),
  });

  const [getYumojiBuilderItemsForCategory] = useLazyQuery<
    GetYumojiBuilderItemsForCategory,
    GetYumojiBuilderItemsForCategoryVariables
  >(GQL_QUERY_GET_YUMOJI_BUILDER_ITEMS_FOR_CATEGORY, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) =>
      dispatch({ type: ActionTypes.SET_ITEM_LIST, payload: data?.getYumojiBuilderItemsForCategory }),
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
  }, [state.selectedCategoryId, state.bodyType, state.partId]);

  const handleBodySelected = useCallback((payload) => dispatch({ type: ActionTypes.SET_SELECTED_BODY, payload }), [
    state.bodySelected,
  ]);

  if (loadingInitialParts) {
    return <Loading />;
  }

  if (state.bodySelected) {
    return (
      <YumojiBuilder
        state={state}
        dispatch={dispatch}
        onBackPressed={() => handleBodySelected(false)}
        heading={heading}
      />
    );
  }

  return (
    <>
      <SelectBody
        onMaleBodySelected={() => {
          getYumojiBuilderInitialParts({
            variables: {
              bodyType: AvatarBodyType.male,
            },
          });
        }}
        onFemaleBodySelected={() => {
          getYumojiBuilderInitialParts({
            variables: {
              bodyType: AvatarBodyType.female,
            },
          });
        }}
        onContinue={() => handleBodySelected(true)}
        heading={heading}
        bodyType={state.bodyType}
      />
    </>
  );
};

export default YumojiBuilderContainer;
