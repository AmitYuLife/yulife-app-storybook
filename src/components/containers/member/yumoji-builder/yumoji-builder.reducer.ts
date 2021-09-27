import {
  GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList as YumojiBuilderCategoryList,
  GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts as YumojiBuilderInitialParts,
  GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory as YumojiBuilderItemsForCategory,
  GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items as YumojiBuilderItemsForCategoryItems,
} from "@graphql/_core/schema";
import { AvatarBodyType } from "@graphql/_core/schema/globalTypes";

export enum ActionTypes {
  INITIAL_STATE = "INITIAL_STATE",
  SET_MULTIPLE_PARTS = "SET_MULTIPLE_PARTS",
  SET_SELECTED_BODY = "SET_SELECTED_BODY",
  SET_CATEGORIES = "SET_CATEGORIES",
  SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY",
  SET_ITEM_LIST = "SET_ITEM_LIST",
}

export type IParts = Record<string, YumojiBuilderInitialParts>;
export type IDispatch = ({ type, payload }: IAction) => void;

interface ItemListItems extends YumojiBuilderItemsForCategoryItems {
  isSelected: boolean;
}

export interface IItemList extends YumojiBuilderItemsForCategory {
  items: ItemListItems[];
}

export interface IState {
  parts: IParts;
  partId: string;
  categories: YumojiBuilderCategoryList[];
  itemList: IItemList;
  selectedCategoryId: string;
  matchType: string;
  bodyType: AvatarBodyType;
  bodySelected: boolean;
}

export interface IAction {
  type: ActionTypes;
  payload: any;
}

const transformParts = (parts: YumojiBuilderInitialParts[]): IParts =>
  parts.reduce((acc, part) => {
    const { partType } = part;
    return {
      ...acc,
      [partType]: {
        ...part,
      },
    };
  }, {});

const transformItems = (items: any[], yumojiParts: IParts, matchType: string) =>
  items.map((item) => {
    const { parts } = item;
    const part = parts[0];

    const checkBy = matchType === "exactVariant" ? "colorSchemeId" : matchType;
    const yumojiPartsMatch =
      checkBy === "colorSchemeId" ? yumojiParts[part.partType]?.colorSchemeId : yumojiParts[part.partType]?.partId;

    const isSelected = yumojiPartsMatch === part[checkBy];

    return {
      ...item,
      isSelected,
    };
  });

export const INITIAL_STATE: IState = {
  parts: {},
  partId: "",
  categories: [],
  itemList: {
    title: "",
    items: [],
  },
  selectedCategoryId: "",
  matchType: "",
  bodyType: AvatarBodyType.neutral,
  bodySelected: false,
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.INITIAL_STATE: {
      const parts = transformParts(action.payload);
      return {
        ...state,
        parts,
        bodyType: parts?.body?.partId?.includes("female") ? AvatarBodyType.female : AvatarBodyType.male,
      };
    }

    case ActionTypes.SET_MULTIPLE_PARTS: {
      const parts = {
        ...state.parts,
        ...transformParts(action.payload),
      };

      const isSinglePart = action.payload.length === 1;

      return {
        ...state,
        partId: isSinglePart ? action.payload[0].partId : "",
        parts,
        itemList: {
          ...state.itemList,
          items: transformItems(state.itemList.items, parts, state.matchType),
        },
      };
    }

    case ActionTypes.SET_SELECTED_BODY: {
      return {
        ...state,
        bodySelected: action.payload,
      };
    }

    case ActionTypes.SET_CATEGORIES: {
      const firstCategory = action.payload[0];
      return {
        ...state,
        categories: action.payload,
        selectedCategoryId: firstCategory.id,
        matchType: firstCategory.matchType,
      };
    }

    case ActionTypes.SET_SELECTED_CATEGORY: {
      return {
        ...state,
        selectedCategoryId: action.payload.id,
        matchType: action.payload.matchType,
      };
    }

    case ActionTypes.SET_ITEM_LIST: {
      return {
        ...state,
        itemList: {
          title: action.payload.title,
          items: transformItems(action.payload.items, state.parts, state.matchType),
        },
      };
    }

    default: {
      throw new Error();
    }
  }
};
