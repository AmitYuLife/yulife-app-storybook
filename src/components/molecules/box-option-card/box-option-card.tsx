import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { Image, TextTemplate } from "@atoms";
import { default as BoxOption } from "../box-option/box-option";
import { RemoteImage, SduiAction } from "@graphql/_core/schema";
import { Style, Colours } from "@styles";
import { ComponentProps, useRef, useState } from "react";
import { Title } from "./box-option-card.title";
import { BOX_OPTION_DESCRIPTION, BOX_OPTION_TITLE, RIGHT_SIDE_IMAGE_BOX_OPTION } from "@ids";
import { ArrowButton } from "../arrow-button";

interface Props {
  title: string;
  description: string;
  image: RemoteImage;
  onPress: SduiAction;
  descriptionTextType?: ComponentProps<typeof TextTemplate>["type"];
  innerHeight?: number;
}

export const BoxOptionCard = ({
  title,
  description,
  innerHeight = 120,
  descriptionTextType = "b2",
  image,
  onPress,
}: Props) => {
  const dispatch = useDispatch();
  const [adjustedInnerHeight, setAdjustedInnerHeight] = useState(innerHeight);

  const contentWrapperRef = useRef(null as View);

  const handleLayout = () => {
    contentWrapperRef.current.measure((_fx, _fy, _width, height, _px, _py) => {
      const contentHeightAdjustedForMargins = height + 20;
      setAdjustedInnerHeight(
        contentHeightAdjustedForMargins > innerHeight ? contentHeightAdjustedForMargins : innerHeight
      );
    });
  };

  return (
    <BoxOption
      onPress={!onPress ? null : () => dispatch(onPress)}
      isSelected={false}
      wrapperStyle={styles.wrapper}
      innerHeight={Style.adjust(adjustedInnerHeight)}
    >
      <View style={styles.innerWrapper}>
        {!image?.uri ? null : (
          <View style={styles.imageWrapper}>
            <Image
              height={Style.adjust(104)}
              width={Style.adjust(120)}
              source={{ uri: image.uri }}
              testID={RIGHT_SIDE_IMAGE_BOX_OPTION(image.uri)}
            />
          </View>
        )}
        <View onLayout={handleLayout} ref={contentWrapperRef} style={styles.contentWrapper}>
          <View style={styles.contentInnerWrapper} testID={BOX_OPTION_DESCRIPTION(description)}>
            {!title ? null : (
              <View style={styles.titleWrapper} testID={BOX_OPTION_TITLE(title)}>
                <Title>{title}</Title>
              </View>
            )}
            {!description ? null : <TextTemplate type={descriptionTextType}>{description}</TextTemplate>}
          </View>
        </View>
        {!onPress ? null : (
          <View style={styles.arrowWrapper}>
            <ArrowButton color={Colours.primary.p600} />
          </View>
        )}
      </View>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(16),
  },
  innerWrapper: {
    width: "100%",
    padding: Style.adjust(8),
    flexDirection: "row",
    alignItems: "flex-start",
  },
  imageWrapper: {
    borderRadius: Style.adjust(12),
    overflow: "hidden",
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "column",
    marginLeft: Style.adjust(16),
  },
  contentInnerWrapper: {
    justifyContent: "center",
  },
  titleWrapper: {
    marginBottom: Style.adjust(8),
  },
  arrowWrapper: {
    alignSelf: "center",
    paddingLeft: Style.adjust(8),
  },
});
