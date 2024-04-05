import { MEDIA_2 } from "../../_data";

export type FiitMediaCategory = "Rebalance" | "Strength" | "Cardio"

export type FiitMediaList = typeof MEDIA_2[]
export interface fiitCopy {
  title: string;
  description: string;
  logo: string;
  smallLogo: string;
  challengeName: string;
  duration: string;
}

export interface fiitCategory {
  title: FiitMediaCategory;
  description: string;
  media: FiitMediaList;
}

export interface fiitCategoryList extends Array<fiitCategory> {}