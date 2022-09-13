import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { ContentItemImage as Props } from "@graphql/_core/schema";
import { Image } from "@atoms";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { useDispatch } from "react-redux";
import { ContentItemImageSize } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";

export const ContentItemImage = memo((props: Props) => {
  const wrapperStyles = mapServerStyles(props.wrapperStyles);
  const imageStyles = mapServerStyles(props.styles);
  const dispatch = useDispatch();

  const Wrapper = props.onPress ? TouchableOpacityWithDelay : View;

  const handlePress = () =>
    dispatch({
      type: props.onPress.type,
      payload: { serverPayload: props.onPress.payload },
    });

  return (
    <Wrapper onPress={handlePress} style={[styles.wrapper, wrapperStyles]}>
      <Image
        width={getWidth(imageStyles?.width as number, props.contentItemImageSize)}
        style={{ ...imageStyles, width: getWidth(imageStyles?.width as number, props.contentItemImageSize) }}
        source={{ uri: props.image.uri }}
      />
    </Wrapper>
  );
});

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
});

const getWidth = (width: number, imageSize: ContentItemImageSize) =>
  imageSize === ContentItemImageSize.fill ? Style.DEVICE_WIDTH : width;
