import React, { memo } from "react";
import { InfoCard } from "@components/molecules";
import { Image } from "@atoms";
import { Style } from "@styles";
import style from "./info-card-list.styles";
import { mapServerStyles } from "@components/sdui";
import { GetGoalDetailsQuery } from "@graphql/__generated";

export type IInfoCardListCard = {
  icon: {
    id: string;
    uri?: string;
  };
  title: string;
  description: string;
  styles?: GetGoalDetailsQuery["getGoalDetails"]["infoCards"][0]["styles"];
};

interface IProps {
  cards: IInfoCardListCard[];
}

const _InfoCardList = ({ cards }: IProps) => {
  return (
    <>
      {cards.map(({ icon, title, description, styles }, index) => (
        <InfoCard
          key={`${title}-${description}-${index}`}
          icon={<Image width={Style.adjust(24)} height={Style.adjust(24)} resizeMode="contain" source={icon} />}
          title={title}
          description={description}
          wrapperStyle={{ ...style.taskWrapper, ...mapServerStyles(styles) }}
        />
      ))}
    </>
  );
};

export const InfoCardList = memo(_InfoCardList);
