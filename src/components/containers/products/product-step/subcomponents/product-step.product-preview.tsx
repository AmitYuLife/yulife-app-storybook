import React, { useCallback, useContext, useMemo, memo } from "react";
import { Animated, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import Markdown from "@components/molecules/markdown/markdown";
import { TryOnYumojiPart } from "@organisms/yumoji/yumoji.try-on";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import {
  GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview as Props,
  GetPersonalProductStep_getPersonalProductStep_body_ContentItemPersonalProductPreview_percentageBox as PercentageBoxProps,
} from "@graphql/_core/schema/GetPersonalProductStep";
import { ProductStepContext } from "../product-step.context";
import { Image, TextTemplate } from "@atoms";
import { mapServerStyles } from "@components/sdui";
import { useSetDefaultAnswer } from "../hooks/useSetDefaultAnswer";
import { mapCoverTypeToColor } from "../utils/mapCoverTypeToColor";
import {
  highlightStyles,
  HIGHLIGHT_CIRCUMFERENCE,
} from "./product-step.scrollable-items-picker/product-step.scrollable-items-picker.styles";
import { useDispatch } from "react-redux";
import { Hyperlink } from "@molecules";

export const ProductStepProductPreview = memo((props: Props) => {
  const { answerKey, answerKeyDefaultValue, showYumoji, documentHyperlink, percentageBox } = props;
  const { productId, customerProductId, setDynamicData, dynamicData, stepId } = useContext(ProductStepContext);
  const dispatch = useDispatch();

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

  const handlePressHyperlink = useCallback(
    () =>
      dispatch({
        type: documentHyperlink.onPress.type,
        payload: {
          productId,
          stepId,
          dynamicData,
          serverPayload: documentHyperlink.onPress.payload,
          id: `${stepId} - ${documentHyperlink.title}`,
        },
      }),
    [documentHyperlink, productId, stepId, dynamicData]
  );

  return (
    <View style={[styles.wrapper, mapServerStyles(props.styles)]}>
      {showYumoji ? (
        <View>
          <TryOnYumojiPart
            customerProductId={customerProductId}
            coverType={coverType}
            onChange={handleYumojiPartChange}
          />
        </View>
      ) : null}

      {!markdown || !monthlyCost ? null : (
        <View style={showYumoji ? styles.floatRight : styles.floatLeft}>
          <Markdown containerStyle={styles.markdownWrapper} text={markdown} />
          <View style={styles.costWrapper}>
            <TextTemplate color={priceColour} type="h3">
              {`${monthlyCost} `}
            </TextTemplate>
            <TextTemplate color={priceColour} type="b2">
              {monthlyCostSuffix}
            </TextTemplate>
          </View>
          {documentHyperlink ? (
            <View style={styles.hyperlinkWrapper}>
              <Image
                source={{ uri: documentHyperlink.leftIcon.uri }}
                width={Style.adjust(24)}
                height={Style.adjust(24)}
                style={styles.hyperlinkImage}
              />
              <Hyperlink title={documentHyperlink.title} onPress={handlePressHyperlink} />
            </View>
          ) : null}
        </View>
      )}

      {percentageBox ? (
        <PercentageBox
          selectedValue={percentageBox.selectedValue}
          selectedCoverType={percentageBox.selectedCoverType}
          primaryColour={percentageBox.primaryColour}
          secondaryColour={percentageBox.secondaryColour}
        />
      ) : null}
    </View>
  );
});

function PercentageBox({ selectedValue, selectedCoverType, primaryColour, secondaryColour }: PercentageBoxProps) {
  return (
    <Animated.View pointerEvents="none" style={[styles.overlayWrapper]}>
      <View
        style={[
          highlightStyles.backdrop,
          mapServerStyles([
            {
              property: "backgroundColor",
              value: secondaryColour,
            },
            {
              property: "borderColor",
              value: primaryColour,
            },
          ]),
        ]}
      />
      {
        <View style={styles.highlightLabelWrapper}>
          <View style={styles.costWrapper}>
            <TextTemplate type="h3" color={primaryColour}>
              {selectedValue}
            </TextTemplate>
            <TextTemplate type="b2b" color={primaryColour}>
              %
            </TextTemplate>
          </View>
        </View>
      }
      {
        <View
          style={[
            highlightStyles.overlayTitleWrapper,
            mapServerStyles([
              {
                property: "backgroundColor",
                value: primaryColour,
              },
            ]),
          ]}
        >
          <TextTemplate color={Colours.neutral.white} type="l2b">
            {selectedCoverType.replace(/^./, (c: string) => c.toUpperCase())}
          </TextTemplate>
        </View>
      }
    </Animated.View>
  );
}

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
  floatLeft: {
    marginBottom: Style.adjust(48),
    paddingLeft: Style.adjust(8),
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
  overlayWrapper: {
    position: "absolute",
    top: 25,
    right: 40,
    width: 78,
    height: HIGHLIGHT_CIRCUMFERENCE,
  } as ViewStyle,
  highlightLabelWrapper: {
    position: "absolute",
    top: 16,
    left: 8,
    width: HIGHLIGHT_CIRCUMFERENCE,
    height: HIGHLIGHT_CIRCUMFERENCE,
    justifyContent: "center",
    alignItems: "center",
  } as TextStyle,
});
