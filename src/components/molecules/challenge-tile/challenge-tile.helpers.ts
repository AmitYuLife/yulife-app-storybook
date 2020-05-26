import { ImageStyle, StyleSheet } from "react-native";
import { Style } from "../../../styles";
import assets from "./assets";
import { Images, IMAGES } from "./challenge-tile.types";

export const getLockedImageStyle = (image: Images): ImageStyle => {
  const position = {} as { bottom?: number; left?: number; right?: number; top?: number };
  const dimensions = {} as { height?: number; width?: number };
  switch (image) {
    case IMAGES.WHITE_BIGHORN_SHEEP:
    case IMAGES.OWL:
    case IMAGES.BIRD:
    case IMAGES.DOLPHIN:
    case IMAGES.TORTOISE:
    case IMAGES.BIGHORN_SHEEP:
      position.right = 0;
      position.bottom = 0;
      break;
    case IMAGES.WOLF:
    case IMAGES.DEER:
    case IMAGES.SQUIRREL:
    case IMAGES.RABBIT:
    case IMAGES.WHALE:
    case IMAGES.OTTER:
      position.left = 0;
      position.bottom = 0;
      break;
    case IMAGES.BEAR:
      dimensions.width = Style.adjust(182);
      dimensions.height = Style.adjust(182);
    case IMAGES.CHAMELEON:
      dimensions.width = Style.adjust(182);
      dimensions.height = Style.adjust(182);
    case IMAGES.HEDGEDOG:
      dimensions.width = Style.adjust(182);
      dimensions.height = Style.adjust(182);
    default:
      position.bottom = 0;
  }
  return StyleSheet.flatten([
    {
      position: "absolute",
      ...position,
      ...dimensions,
    } as ImageStyle,
  ]);
};

export const getImageStyle = (image: Images): ImageStyle => {
  const position = {} as { bottom?: number; left?: number; right?: number; top?: number };
  const dimensions = {} as { height?: number; width?: number };

  switch (image) {
    case IMAGES.SQUIRREL:
      position.bottom = 0;
      position.left = 0;
      break;
    case IMAGES.RABBIT:
      position.bottom = 0;
      position.left = 0;
      dimensions.height = Style.adjust(119);
      dimensions.width = Style.adjust(101);
      break;
    case IMAGES.SNAIL:
      position.bottom = 0;
      position.right = Style.adjust(5);
      break;
    case IMAGES.BIRD:
      position.bottom = 0;
      position.right = 0;
      dimensions.width = 143;
      dimensions.height = 99;
      break;
    case IMAGES.OTTER:
      position.bottom = 0;
      position.right = 0;
      dimensions.height = Style.adjust(128);
      break;
    case IMAGES.WHALE:
      position.bottom = 0;
      position.right = Style.adjust(10);
      dimensions.height = Style.adjust(120);
      break;
    case IMAGES.DOLPHIN:
      position.bottom = 0;
      position.right = Style.adjust(5);
      dimensions.height = Style.adjust(128);
      break;
    case IMAGES.TORTOISE:
      position.bottom = 0;
      position.right = 0;
      dimensions.height = Style.adjust(128);
      break;
    case IMAGES.BIGHORN_SHEEP:
      position.bottom = 0;
      position.right = -10;
      dimensions.height = Style.adjust(130);
      break;
    case IMAGES.CAMEL:
      position.bottom = 0;
      position.right = 0;
      dimensions.height = Style.adjust(128);
      break;
    case IMAGES.MEERKAT:
      position.bottom = 0;
      position.right = Style.adjust(15);
      break;
    case IMAGES.DESERT_FOX:
      position.bottom = 0;
      position.right = 0;
      dimensions.height = Style.adjust(130);
      break;
    case IMAGES.WOLF:
      position.left = 0;
      position.bottom = 0;
      dimensions.height = Style.adjust(134);
      dimensions.width = Style.adjust(108);
      break;
    case IMAGES.DEER:
      position.left = Style.defaultShrinkThreshold ? - 12 : 0;
      position.bottom = 0;
      dimensions.height = Style.adjust(128);
      break;
    case IMAGES.WHITE_BIGHORN_SHEEP:
      position.right = Style.defaultShrinkThreshold ? -10 : 0;
      position.bottom = 0;
      dimensions.height = Style.adjust(128);
      break;
    case IMAGES.OWL:
      position.right = Style.defaultShrinkThreshold ? -10 : 0;
      position.bottom = 0;
      dimensions.height = Style.adjust(128);
      break;
    case IMAGES.BEAR:
      position.right = 0;
      position.bottom = 0;
      dimensions.height = Style.adjust(182);
      dimensions.width = Style.adjust(182);
      break;
    case IMAGES.CHAMELEON:
      position.left = 0;
      position.bottom = 0;
      break;
    case IMAGES.HEDGEDOG:
      position.left = 0;
      position.bottom = 0;
      dimensions.height = Style.adjust(128);
      dimensions.width = Style.adjust(128);
      break;
    case IMAGES.HEDGEDOG_FISH:
      position.left = 0;
      position.bottom = 0;
      dimensions.height = Style.adjust(165);
      dimensions.width = Style.adjust(165);
      break;
    default:
      position.top = 0;
      position.right = 0;
  }
  return StyleSheet.flatten([
    {
      position: "absolute",
      ...position,
      ...dimensions,
    } as ImageStyle,
  ]);
};

export function getImage(image: Images) {
  const imageUrls: Record<Images, any> = {
    [IMAGES.SQUIRREL]: assets.squirrel,
    [IMAGES.SNAIL]: assets.snail,
    [IMAGES.RABBIT]: assets.rabbit,
    [IMAGES.BIRD]: assets.bird,
    [IMAGES.OTTER]: assets.otter,
    [IMAGES.WHALE]: assets.whale,
    [IMAGES.DOLPHIN]: assets.dolphin,
    [IMAGES.TORTOISE]: assets.tortoise,
    [IMAGES.BIGHORN_SHEEP]: assets.bighornSheep,
    [IMAGES.CAMEL]: assets.camel,
    [IMAGES.MEERKAT]: assets.meerkat,
    [IMAGES.DESERT_FOX]: assets.desertFox,
    [IMAGES.DEER]: assets.deer,
    [IMAGES.OWL]: assets.owl,
    [IMAGES.WHITE_BIGHORN_SHEEP]: assets.whiteBighornSheep,
    [IMAGES.WOLF]: assets.wolf,
    [IMAGES.HEDGEDOG]: assets.hedgehog,
    [IMAGES.HEDGEDOG_FISH]: assets.hedgehogFish,
    [IMAGES.CHAMELEON]: assets.chameleon,
    [IMAGES.BEAR]: assets.bear,
  };

  return imageUrls[image] ?? null;
}
