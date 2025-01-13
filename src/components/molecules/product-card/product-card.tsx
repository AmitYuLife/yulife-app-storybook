import React, { memo, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Image, Source, TextTemplate, YuCoinLabel } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Colours, Style } from "@styles";
import { useSelector, useDispatch } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { useYuScreenOnPressHandler } from "@components/containers/member/yu/hooks/useYuScreenOnPressHandler";
import { PRODUCT_CARD_BOTTOM, PRODUCT_CARD_IMAGE, PRODUCT_CARD_TITLE } from "@ids";
import { SduiAction, YuScreenProductButtonAction } from "@graphql/__generated";

interface IProductCardProps {
  backgroundImage?: Source;
  yuCoinPowerIncrease?: number;
  title: string;
  cta: string;
  onPress?: YuScreenProductButtonAction;
  event?: SduiAction;
}

const SOURCE_BACKGROUND_IMAGE_SIZE = {
  width: 164,
  height: 95,
};

const SOURCE_HEADER_IMAGE_SIZE = {
  width: 132,
  height: 17,
};

const NUM_OF_TILES = 2;
const PAD_AROUND_TILES = Style.adjust(15);
const PRODUCT_TILE_BORDER_RADIUS = Style.adjust(8);
const BORDER_WIDTH = 1;
const HORIZONTAL_PAD = Style.adjust(16);

export const PRODUCT_IMAGE_WIDTH =
  (Style.DEVICE_WIDTH - PAD_AROUND_TILES * (NUM_OF_TILES + 1)) / NUM_OF_TILES - BORDER_WIDTH * 2;
export const PRODUCT_IMAGE_HEIGHT =
  (PRODUCT_IMAGE_WIDTH / SOURCE_BACKGROUND_IMAGE_SIZE.width) * SOURCE_BACKGROUND_IMAGE_SIZE.height;
export const HEADER_IMAGE_WIDTH = PRODUCT_IMAGE_WIDTH - HORIZONTAL_PAD * 2;
export const HEADER_IMAGE_HEIGHT =
  (PRODUCT_IMAGE_WIDTH / SOURCE_HEADER_IMAGE_SIZE.width) * SOURCE_HEADER_IMAGE_SIZE.height;

const ProductCard = ({ backgroundImage, yuCoinPowerIncrease, title, cta, onPress, event }: IProductCardProps) => {
  const dispatch = useDispatch();
  const currentRoute = useSelector(getRouteState);
  const handlePress = useYuScreenOnPressHandler({ event, onPress, currentRoute });

  const onTilePress = useCallback(() => {
    if (!onPress) {
      return;
    }

    if (onPress?.sduiAction) {
      dispatch({
        type: onPress.sduiAction.type,
        payload: onPress.sduiAction.payload,
      });
    } else if (onPress?.productAction) {
      handlePress();
    }
  }, [onPress, handlePress, dispatch]);

  return (
    <TouchableOpacityWithDelay style={styles.productTouchable} onPress={onTilePress}>
      <View style={styles.productTileShadow}>
        <View style={styles.productTile} testID={PRODUCT_CARD_TITLE(title)}>
          <View>
            <Image
              width={PRODUCT_IMAGE_WIDTH}
              height={PRODUCT_IMAGE_HEIGHT}
              source={backgroundImage}
              resizeMode="cover"
              testID={PRODUCT_CARD_IMAGE(backgroundImage.uri)}
            />
          </View>
          {!yuCoinPowerIncrease ? null : (
            <YuCoinLabel earnRate={`+${yuCoinPowerIncrease}`} style={styles.yuCoinLabel} />
          )}
          <View style={styles.productTileBottom} testID={PRODUCT_CARD_BOTTOM(cta)}>
            <TextTemplate type="b2b">{title}</TextTemplate>
            <TextTemplate type="b2b" color={Colours.primary.p600}>
              {cta}
            </TextTemplate>
          </View>
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
};

export default memo(ProductCard);

const styles = StyleSheet.create({
  productTouchable: {
    flex: 1,
  },
  productTileShadow: {
    flex: 1,
    backgroundColor: Colours.neutral.n100,
    paddingBottom: Style.adjust(4),
    borderRadius: PRODUCT_TILE_BORDER_RADIUS,
    borderColor: Colours.neutral.n100,
    borderWidth: BORDER_WIDTH,
  },
  productTile: {
    flex: 1,
    backgroundColor: Colours.neutral.white,
    width: PRODUCT_IMAGE_WIDTH,
    borderRadius: PRODUCT_TILE_BORDER_RADIUS,
    overflow: "hidden",
  },
  productTileImage: {
    backgroundColor: Colours.neutral.n100,
    borderTopLeftRadius: PRODUCT_TILE_BORDER_RADIUS,
    borderTopRightRadius: PRODUCT_TILE_BORDER_RADIUS,
  },
  productTileBottom: {
    borderBottomLeftRadius: PRODUCT_TILE_BORDER_RADIUS,
    borderBottomRightRadius: PRODUCT_TILE_BORDER_RADIUS,
    paddingHorizontal: HORIZONTAL_PAD,
    paddingVertical: Style.adjust(13),
    justifyContent: "space-between",
  },
  yuCoinLabel: {
    position: "absolute",
    top: Style.adjust(5),
    left: Style.adjust(5),
  },
});
