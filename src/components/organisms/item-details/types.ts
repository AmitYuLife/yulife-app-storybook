import { Image } from "@redux/_core/types";

export type ItemDetails = {
  type: "simple" | "tipCard" | "itemReward";
  id: string;
  title?: string;
  description?: string;
  image: Image;
};
