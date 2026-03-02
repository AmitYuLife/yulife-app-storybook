import React, { memo } from "react";
import { Image as RNImage, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { MEDIA_LIST_ITEM_DESCRIPTION, MEDIA_LIST_ITEM_TITLE, PARTNER_LOGO } from "@ids";
import { BoxOption } from "@molecules";
import { Style, templateTextMarkdownStyles } from "@styles";
import { BOX_HEIGHT, IMAGE_HEIGHT, IMAGE_WIDTH, styles } from "./media-list-items.styles";
import MediaListItemsLoading from "./media-list-items-loading";
import { t } from "@locale";
import Markdown from "@molecules/markdown/markdown";
import { ArrowButton } from "@components/molecules/arrow-button";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

export interface IITem {
  title: string;
  description: string;
  providerLogo?: {
    logo: {
      uri?: string;
      id: string;
    };
    width: number;
    height: number;
  };
  thumbnail: {
    uri?: string;
    id: string;
  };
  formattedDuration?: string;
  reward?: number;
  tag?: string;
}

interface IProps {
  items: IITem[];
  type: "category" | "media";
  isLoading?: boolean;
  onPress: (item: IITem) => void;
}

const MediaListItems = ({ items, onPress, type, isLoading }: IProps) => {
  const { theme } = useTheme();
  return (
    <>
      {isLoading ? (
        <MediaListItemsLoading items={3} />
      ) : (
        <>
          {items.map((item) => {
            return (
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
                    <View style={styles.titleWrapper}>
                      <TextTemplate type="b2b">{item.title}</TextTemplate>

                      {item.providerLogo?.logo?.uri ? (
                        <View>
                          <Image
                            resizeMode="contain"
                            width={Style.adjust(item?.providerLogo?.width)}
                            height={Style.adjust(item?.providerLogo?.height)}
                            testID={PARTNER_LOGO}
                            suppressLoadingUi={true}
                            source={{ uri: item.providerLogo?.logo?.uri }}
                          />
                        </View>
                      ) : null}
                    </View>
                    <View style={styles.descriptionWrapper}>
                      <View style={styles.detailsWrapper}>
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
                            <RNImage
                              source={require("@assets/icons/yucoin.png")}
                              resizeMode="contain"
                              style={styles.coin}
                            />
                          )}
                        </View>
                        {item.tag ? (
                          <View style={styles.tagWrapper}>
                            <TextTemplate type="l2b" color={theme.colors.primary.p600}>
                              {item.tag}
                            </TextTemplate>
                          </View>
                        ) : null}
                      </View>
                      <View style={styles.arrow}>
                        <ArrowButton color={theme.colors.primary.p600} />
                      </View>
                    </View>
                  </View>
                </View>
              </BoxOption>
            );
          })}
        </>
      )}
    </>
  );
};

const markdownStyle = {
  text: templateTextMarkdownStyles.l2,
};

export default memo(MediaListItems);
