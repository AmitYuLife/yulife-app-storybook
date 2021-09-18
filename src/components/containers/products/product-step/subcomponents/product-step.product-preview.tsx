import React, { useCallback, useContext, useMemo, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import Markdown from "@components/molecules/markdown/markdown";
import { TryOnYumojiPart } from "@organisms/yumoji/yumoji.try-on";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview as Props } from "@graphql/_core/schema/GetPersonalProductStep";
import { ProductStepContext } from "../product-step.context";
import { Image, Hyperlink, TextTemplate } from "@atoms";
import { mapServerStyles } from "@components/sdui";
import { useSetDefaultAnswer } from "../hooks/useSetDefaultAnswer";
import { mapCoverTypeToColor } from "../utils/mapCoverTypeToColor";

export const ProductStepProductPreview = memo((props: Props) => {
  const { answerKey, answerKeyDefaultValue } = props;
  const { customerProductId, setDynamicData, dynamicData } = useContext(ProductStepContext);

  const handleYumojiPartChange = useCallback(
    (worldId: YuWorld) => setDynamicData((oldState) => ({ ...oldState, worldId })),
    []
  );

  useSetDefaultAnswer({ answerKey, answerKeyDefaultValue, dynamicData, setDynamicData });

  const { markdown, monthlyCost, priceColour, coverType, monthlyCostSuffix } = useMemo(() => {
    if (!dynamicData[answerKey]) {
      return { markdown: "", monthlyCost: "", priceColour: Colours.neutral.n800, monthlyCostSuffix: "" };
    }

    const answerKeyToMarkdownHashMap = props.coverList.reduce((acc, curr) => {
      acc[curr.percentCovered] = {
        markdown: curr.productPreviewMarkdown,
        monthlyCost: curr.monthlyCost,
        priceColour: mapCoverTypeToColor(curr.coverType),
        coverType: curr.coverType,
        monthlyCostSuffix: curr.monthlyCostSuffix,
      };

      return acc;
    }, {} as Record<number, { markdown: string; monthlyCost: string; priceColour: string; coverType: CoverType; monthlyCostSuffix: string }>);

    const { markdown, monthlyCost, priceColour, coverType, monthlyCostSuffix } =
      answerKeyToMarkdownHashMap[dynamicData[answerKey] as number] || {};

    return {
      markdown,
      monthlyCost,
      priceColour,
      coverType,
      monthlyCostSuffix,
    };
  }, [dynamicData, answerKey, props.coverList]);

  return (
    <View style={[styles.wrapper, mapServerStyles(props.styles)]}>
      <View>
        <TryOnYumojiPart
          customerProductId={customerProductId}
          coverType={coverType}
          onChange={handleYumojiPartChange}
        />
      </View>
      {!markdown || !monthlyCost ? null : (
        <View style={styles.floatRight}>
          <Markdown containerStyle={styles.markdownWrapper} text={markdown} />
          <View style={styles.costWrapper}>
            <TextTemplate color={priceColour} type="h3">
              {`${monthlyCost} `}
            </TextTemplate>
            <TextTemplate color={priceColour} type="b2">
              {monthlyCostSuffix}
            </TextTemplate>
          </View>
          <View style={styles.hyperlinkWrapper}>
            <Image
              source={{ uri: props.documentHyperlink.leftIcon.uri }}
              width={Style.adjust(24)}
              height={Style.adjust(24)}
              style={styles.hyperlinkImage}
            />
            <Hyperlink title={props.documentHyperlink.title} url={props.documentHyperlink.url} />
          </View>
        </View>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    paddingHorizontal: Style.adjust(16),
  },
  info: {
    flex: 1,
    margin: Style.adjust(16),
  },
  markdownWrapper: {
    width: Style.DEVICE_WIDTH - 160,
  } as ViewStyle,
  titleAndIcon: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    marginRight: Style.adjust(8),
  },
  floatRight: {
    paddingTop: Style.adjust(60),
    marginBottom: Style.adjust(48),
    paddingLeft: Style.adjust(16),
  } as ViewStyle,
  costWrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  hyperlinkWrapper: {
    marginTop: Style.adjust(24),
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  hyperlinkImage: {
    marginRight: Style.adjust(8),
  },
});
