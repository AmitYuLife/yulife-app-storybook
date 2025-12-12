import Box from "@atoms/box/box";
import { SduiAction } from "@redux/user/user.types";
import PathwaysAdviceCard from "../pathways-advice-card/pathways-advice-card";
import AdviceEmptySection from "./pathways-advice-empty-section";

type UserPathwayItem = {
  onPress: SduiAction;
  backgroundColor?: string;
  shadowColor?: string;
  id: string;
  image: {
    id: string;
    uri?: string | null;
  };
  heading: string;
  label: string;
};

export type PathwayAdviceSectionProps = {
  items: Array<UserPathwayItem>;
};

export const PathwaysAdviceSection = ({ items }: PathwayAdviceSectionProps) => {
  if (!items) {
    return null;
  }

  if (items.length === 0) {
    return <AdviceEmptySection />;
  }

  return (
    <Box gap={20}>
      {items.map((val) => (
        <PathwaysAdviceCard
          key={val.id}
          heading={val.heading}
          label={val.label}
          onPress={val.onPress}
          image={val.image?.uri}
          backgroundColor={val.backgroundColor}
          shadowColor={val.shadowColor}
        />
      ))}
    </Box>
  );
};
