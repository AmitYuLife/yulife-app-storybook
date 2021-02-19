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
  const dimensions = { width: Style.adjust(165), height: Style.adjust(166) } as { height?: number; width?: number };

  switch (image) {
    case IMAGES.SQUIRREL:
    case IMAGES.RABBIT:
    case IMAGES.WOLF:
    case IMAGES.DEER:
    case IMAGES.CHAMELEON:
    case IMAGES.HEDGEDOG:
    case IMAGES.HEDGEDOG_FISH:
    case IMAGES.OTTER:
    case IMAGES.BEAR:
    case IMAGES.WHALE:
    case IMAGES.MEERKAT:
    case IMAGES.DESERT_FOX:
      position.left = 0;
      position.bottom = 0;
      break;

    case IMAGES.SNAIL:
    case IMAGES.BIRD:
    case IMAGES.DOLPHIN:
    case IMAGES.TORTOISE:
    case IMAGES.BIGHORN_SHEEP:
    case IMAGES.CAMEL:
    case IMAGES.WHITE_BIGHORN_SHEEP:
    case IMAGES.OWL:
      position.right = 0;
      position.bottom = 0;
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
