import React, { memo } from "react";
import { InfoCard } from "@components/molecules";
import { Image } from "@atoms";
import { Style } from "@styles";
import style from "./info-card-list.styles";
import { GetGoalDetails_getGoalDetails_infoCards_styles as InfoCardStyle } from "@graphql/_core/schema/GetGoalDetails";
import { mapServerStyles } from "@components/sdui";

export type IInfoCardListCard = {
  icon: {
    id: string;
    uri: string;
  };
  title: string;
  description: string;
  styles: InfoCardStyle[];
};

interface IProps {
  cards: IInfoCardListCard[];
}

const _InfoCardList = ({ cards }: IProps) => {
  return (
    <>
      {cards.map(({ icon, title, description, styles }) => (
        <InfoCard
          key={title}
          icon={<Image width={Style.adjust(24)} height={Style.adjust(24)} resizeMode="contain" source={icon} />}
          title={title}
          description={description}
          wrapperStyle={{ ...style.taskWrapper, ...mapServerStyles(styles) }}
          titleStyle={style.taskTitle}
        />
      ))}
    </>
  );
};

export const InfoCardList = memo(_InfoCardList);
