import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { ContentItemImageFragment as IContentItemImage } from "@graphql/__generated";
import { Image } from "@atoms";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { useDispatch } from "react-redux";
import { ContentItemImageSize } from "@graphql/__generated";
import { Style, StyleSheet } from "@styles";
import { CONTENT_ITEM_SLIDER, CONTENT_MIDDLE_ITEM_IMAGE } from "@ids";

export const ContentItemImage = memo((props: IContentItemImage) => {
  const wrapperStyles = mapServerStyles(props.wrapperStyles);
  const imageStyles = mapServerStyles(props.styles);
  const dispatch = useDispatch();

  const { imageStyle, source } = useMemo(
    () => ({
      source: { uri: props.image.uri || props.image.id },
      imageStyle: {
        ...imageStyles,
        width: getWidth(imageStyles?.width as number, props.contentItemImageSize),
      },
    }),
    [imageStyles, props.contentItemImageSize, props.image]
  );

  const Wrapper = props.onPress ? TouchableOpacityWithDelay : View;

  const handlePress = () =>
    dispatch({
      type: props.onPress.type,
      payload: { serverPayload: props.onPress.payload },
    });

  return (
    <Wrapper onPress={handlePress} style={[styles.wrapper, wrapperStyles]} testID={CONTENT_ITEM_SLIDER}>
      <Image
        width={imageStyle.width}
        style={imageStyle}
        source={source}
        testID={CONTENT_MIDDLE_ITEM_IMAGE(source.uri)}
        contentFit={props.contentItemImageSize}
      />
    </Wrapper>
  );
});
const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

const getWidth = (width: number, imageSize: ContentItemImageSize) =>
  imageSize === ContentItemImageSize.Fill ? Style.DEVICE_WIDTH : width;
