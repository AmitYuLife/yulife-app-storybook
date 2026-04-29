import { SharedValue } from "react-native-reanimated";
import Box from "@atoms/box/box";
import { SduiAction } from "@redux/user/user.types";
import PathwaysAdviceCard from "../pathways-advice-card/pathways-advice-card";
import PathwaysVisibilityWrapper from "../pathways-visibility-wrapper/pathways-visibility-wrapper";
import AdviceEmptySection from "./pathways-advice-empty-section";

type UserPathwayItem = {
  onPress: SduiAction;
  onScrollIntoView?: SduiAction;
  backgroundColor: string;
  shadowColor: string;
  id: string;
  image: {
    id: string;
    uri?: string;
  };
  heading: string;
  label: string;
};

export type PathwayAdviceSectionProps = {
  items?: Array<UserPathwayItem>;
  scrollY?: SharedValue<number>;
};

export const PathwaysAdviceSection = ({ items, scrollY }: PathwayAdviceSectionProps) => {
  if (!items) {
    return null;
  }

  if (items.length === 0) {
    return <AdviceEmptySection />;
  }

  return (
    <Box gap={20}>
      {items.map((val) => (
        <PathwaysVisibilityWrapper key={val.id} scrollY={scrollY} onScrollIntoView={val.onScrollIntoView}>
          <PathwaysAdviceCard
            heading={val.heading}
            label={val.label}
            onPress={val.onPress}
            image={val.image?.uri}
            backgroundColor={val.backgroundColor}
            shadowColor={val.shadowColor}
          />
        </PathwaysVisibilityWrapper>
      ))}
    </Box>
  );
};
