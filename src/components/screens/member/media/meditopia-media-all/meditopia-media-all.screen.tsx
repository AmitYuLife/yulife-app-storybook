import React, { memo, useMemo } from "react";
import { ScrollView } from "react-native";
import { Box } from "@atoms";
import { MediaListHeader } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad, MediaListItems } from "@organisms";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { Source } from "@atoms";

interface ISection {
  category: string;
  meditations: IITem[];
}

interface IMeditopiaMediaAllScreenProps {
  sections: ISection[];
  title: string;
  description: string;
  logo: Source;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  onMeditationPress: (item: IITem) => void;
}

const MeditopiaMediaAllScreen = ({
  sections,
  title,
  description,
  logo,
  onLeftIconPress,
  onRightIconPress,
  onMeditationPress,
}: IMeditopiaMediaAllScreenProps) => {
  const logoProps = useMemo(() => ({ uri: logo, width: 98, height: 20 }), [logo]);

  return (
    <Box height="100%">
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box mx={Style.adjust(16)}>
          <MediaListHeader title={title} description={description} logo={logoProps} />
          {sections.map((section) => (
            <Box key={section.category} mb={Style.adjust(8)}>
              <Box mb={Style.adjust(12)} mt={Style.adjust(16)}>
                <TextTemplate type="b1b">{section.category}</TextTemplate>
              </Box>
              <MediaListItems items={section.meditations} type="media" onPress={onMeditationPress} />
            </Box>
          ))}
        </Box>
      </ScrollView>
      <GenericHeadingAbsolute
        backgroundColor="transparent"
        onLeftIconPress={onLeftIconPress}
        color={Colours.neutral.n800}
        onRightIconPress={onRightIconPress}
        logo="yulife"
      />
    </Box>
  );
};

export default memo(MeditopiaMediaAllScreen);
