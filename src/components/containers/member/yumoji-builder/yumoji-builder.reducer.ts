import { IItemList } from "@components/screens/member/yu-screen/yumoji-builder/components/yumoji-builder-item-list";
import { ItemListItems } from "@components/screens/member/yu-screen/yumoji-builder/components/yumoji-item";
import {
  GetYumojiBuilderCategoryList_getYumojiBuilderCategoryList as YumojiBuilderCategoryList,
  GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts as YumojiBuilderInitialParts,
  GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items_parts as YumojiBuilderItemParts,
} from "@graphql/_core/schema";
import { AvatarBodyType, AvatarPartType } from "@graphql/_core/schema/globalTypes";

export enum ActionTypes {
  INITIAL_STATE = "INITIAL_STATE",
  SET_MULTIPLE_PARTS = "SET_MULTIPLE_PARTS",
  SET_SELECTED_BODY = "SET_SELECTED_BODY",
  SET_CATEGORIES = "SET_CATEGORIES",
  SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY",
  SET_ITEM_LIST = "SET_ITEM_LIST",
  ON_BACK_PRESSED = "ON_BACK_PRESSED",
}

export type IParts = Record<string, YumojiBuilderInitialParts>;
export type IDispatch = ({ type, payload }: IAction) => void;

export interface IState {
  parts: IParts;
  partId: string;
  hidesPartTypes: AvatarPartType[];
  categories: {
    items: YumojiBuilderCategoryList[];
    loading: boolean;
  };
  itemList: IItemList;
  selectedCategoryId: string;
  matchType: string;
  bodyType: AvatarBodyType;
  bodySelected: boolean;
  emptyMessage: string;
  hasUnsavedChanges: boolean;
}

export interface IAction {
  type: ActionTypes;
  payload?: any;
}

const filters: { [key: string]: Array<keyof YumojiBuilderItemParts> } = {
  partId: ["partId"],
  exactVariant: ["partId", "colorSchemeId"],
};

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

const transformItems = (items: ItemListItems[], yumojiParts: IParts, matchType: string) =>
  items.map((item) => {
    const { parts: [part] = [] } = item;

    const yumojiPart = yumojiParts[part.partType];
    const matchFilters = filters[matchType];

    return {
      ...item,
      isSelected: matchFilters.every((filter) => part[filter] === (yumojiPart?.[filter] ?? "")),
    };
  });

export const INITIAL_STATE: IState = {
  parts: {},
  partId: "",
  hidesPartTypes: [],
  categories: {
    items: [],
    loading: true,
  },
  itemList: {
    title: "",
    items: [],
    loading: true,
  },
  selectedCategoryId: "",
  matchType: "",
  bodyType: AvatarBodyType.neutral,
  bodySelected: false,
  emptyMessage: "",
  hasUnsavedChanges: false,
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.INITIAL_STATE: {
      const parts = transformParts(action.payload);
      const bodyType = getBodyTypeFromParts(parts);
      return {
        ...state,
        parts,
        bodyType,
      };
    }

    case ActionTypes.SET_MULTIPLE_PARTS: {
      const isSinglePart = action.payload.length === 1;
      const partId = isSinglePart ? action.payload[0].partId : "";

      const parts = {
        ...state.parts,
        ...transformParts(action.payload),
      };

      return {
        ...state,
        partId,
        parts,
        itemList: {
          ...state.itemList,
          items: transformItems(state.itemList.items, parts, state.matchType),
        },
        hasUnsavedChanges: true,
      };
    }

    case ActionTypes.SET_SELECTED_BODY: {
      return {
        ...state,
        bodySelected: action.payload.bodySelected,
        hasUnsavedChanges: action.payload.bodyType !== state.bodyType || state.hasUnsavedChanges,
      };
    }

    case ActionTypes.SET_CATEGORIES: {
      const firstCategory = action.payload[0];
      return {
        ...state,
        categories: {
          items: action.payload,
          loading: false,
        },
        selectedCategoryId: firstCategory.id,
        matchType: firstCategory.matchType,
      };
    }

    case ActionTypes.SET_SELECTED_CATEGORY: {
      return {
        ...state,
        selectedCategoryId: action.payload.id,
        matchType: action.payload.matchType,
        emptyMessage: !state.partId ? action?.payload?.children?.emptyMessage : "",
        itemList: {
          ...state.itemList,
          loading: true,
        },
      };
    }

    case ActionTypes.SET_ITEM_LIST: {
      const items = transformItems(action.payload.items, state.parts, state.matchType);
      return {
        ...state,
        partId: items.find(({ isSelected }) => isSelected)?.parts?.[0]?.partId || "",
        itemList: {
          title: action.payload.title,
          items,
          loading: false,
        },
      };
    }

    case ActionTypes.ON_BACK_PRESSED: {
      return {
        ...state,
        bodySelected: false,
        selectedCategoryId: state.categories.items[0]?.id,
        matchType: state.categories.items[0]?.matchType,
        emptyMessage: "",
        parts: {},
        partId: "",
      };
    }

    default: {
      throw new Error();
    }
  }
};

export const getBodyTypeFromParts = (parts: IParts) => {
  if (!parts?.body?.partId) {
    return AvatarBodyType.neutral;
  }

  if (parts.body.partId.includes("female")) {
    return AvatarBodyType.female;
  }

  return AvatarBodyType.male;
};
