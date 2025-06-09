import { RemoteImage } from "@graphql/__generated";

export type TipCard = {
  id: string;
  title?: string;
  description?: string;
  icon?: RemoteImage;
};

export type SmokingCelebrationDisplayProps = {
  id: string;
  title?: string;
  daysHeading?: string;
  yuCoin?: number;
  image?: RemoteImage;
  description?: string;
  tips?: TipCard[];
  ctaLabel?: string;
};
