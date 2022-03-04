import React, { memo } from "react";
import { InfoCard } from "@components/molecules";
import { Image } from "@atoms";
import { Style } from "@styles";
import style from "./info-card-list.styles";

export type IInfoCardListCard = {
  icon: {
    id: string;
    uri: string;
  };
  title: string;
  description: string;
};

interface IProps {
  cards: IInfoCardListCard[];
}

const _InfoCardList = ({ cards }: IProps) => {
  return (
    <>
      {cards.map(({ icon, title, description }) => (
        <InfoCard
          key={title}
          icon={<Image width={Style.adjust(24)} height={Style.adjust(24)} resizeMode="contain" source={icon} />}
          title={title}
          description={description}
          wrapperStyle={style.taskWrapper}
          titleStyle={style.taskTitle}
        />
      ))}
    </>
  );
};

export const InfoCardList = memo(_InfoCardList);
