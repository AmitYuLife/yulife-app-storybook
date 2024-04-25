import { RemoteImage } from "@graphql/__generated";

export enum FLAT_LIST_ITEM {
  PAD = "PAD",
  YU_WORLD_OPTION = "YU_WORLD_OPTION",
}

interface IFlatListItemPad {
  type: FLAT_LIST_ITEM.PAD;
}

interface IFlatListItemYuWorldOption {
  type: FLAT_LIST_ITEM.YU_WORLD_OPTION;
  data: {
    remoteUrl: RemoteImage;
  };
}

export type IYumojiSwipePartItem = IFlatListItemPad | IFlatListItemYuWorldOption;
