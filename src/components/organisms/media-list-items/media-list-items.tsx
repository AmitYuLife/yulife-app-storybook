import React, { memo } from "react";
import { Image as RNImage, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";
import { MEDIA_LIST_ITEM_DESCRIPTION, MEDIA_LIST_ITEM_TITLE } from "@ids";
import { BoxOption } from "@molecules";
import { Colours } from "@styles";
import { BOX_HEIGHT, IMAGE_HEIGHT, IMAGE_WIDTH, styles } from "./media-list-items.styles";
import MediaListItemsLoading from "./media-list-items-loading";
import { t } from "@locale";
import Markdown from "@molecules/markdown/markdown";
import { ArrowButton } from "@components/molecules/arrow-button";

export interface IITem {
  title: string;
  description: string;
  thumbnail: {
    uri: string;
    id: string;
  };
  formattedDuration?: string;
  reward?: number;
}

interface IProps {
  items: IITem[];
  type: "category" | "media";
  isLoading?: boolean;
  onPress: (item: IITem) => void;
}

const MediaListItems = ({ items, onPress, type, isLoading }: IProps) => {
  return (
    <>
      {isLoading ? (
        <MediaListItemsLoading items={3} />
      ) : (
        <>
          {items.map((item) => (
            <BoxOption
              key={`${item.title}-${item.formattedDuration}`}
              onPress={() => onPress(item)}
              isSelected={false}
              selectedStyle={{}}
              wrapperStyle={styles.wrapper}
              innerHeight={BOX_HEIGHT}
              testID={MEDIA_LIST_ITEM_TITLE(item.title)}
            >
              <View style={styles.main}>
                <View style={styles.imageWrapper}>
                  {!item.thumbnail ? null : (
                    <Image height={IMAGE_HEIGHT} width={IMAGE_WIDTH} source={{ uri: item.thumbnail.uri }} />
                  )}
                </View>
                <View style={styles.detailWrapper}>
                  <TextTemplate type="b2b">{item.title}</TextTemplate>
                  <View style={styles.details} testID={MEDIA_LIST_ITEM_DESCRIPTION(item.description)}>
                    {type === "category" ? (
                      <Markdown text={item.description} markdownStyles={markdownStyle} />
                    ) : (
                      <TextTemplate type="l2b">
                        {t("screens.media_list.video_duration_reward_label", {
                          formattedDuration: item.formattedDuration,
                          reward: item.reward,
                        })}
                      </TextTemplate>
                    )}
                    {type === "category" ? null : (
                      <RNImage source={require("@assets/icons/yucoin.png")} resizeMode="contain" style={styles.coin} />
                    )}
                  </View>
                </View>
                <View style={styles.arrow}>
                  <ArrowButton color={Colours.primary.p600} />
                </View>
              </View>
            </BoxOption>
          ))}
        </>
      )}
    </>
  );
};

const markdownStyle = {
  text: textTemplateStyle.l2,
};

export default memo(MediaListItems);
