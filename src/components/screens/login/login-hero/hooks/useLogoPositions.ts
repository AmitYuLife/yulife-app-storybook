import { Style } from "@styles";
import { DEVICES } from "@styles/media";
import { useBobbingAnimation } from "@hooks";
import { CHEST_MAX_HEIGHT, CHEST_ASPECT_RATIO } from "../constants";

type LogoPosition = {
  id: string;
  top: number;
  left: number;
  right: number;
  size: number;
  rotation: number;
  border: number;
  animation: ReturnType<typeof useBobbingAnimation>;
};

const guidelineBaseWidth = DEVICES.iPhone16ProMax.width;
const guidelineBaseHeight = 353; // height of the chest, when scaled to the width of an iPhone 16 Pro Max

const getCurrentChestDimensions = () => {
  const widthFromDevice = Style.DEVICE_WIDTH;
  const heightFromDevice = widthFromDevice / CHEST_ASPECT_RATIO;

  if (heightFromDevice <= CHEST_MAX_HEIGHT) {
    return { width: widthFromDevice, height: heightFromDevice };
  }

  const cappedHeight = CHEST_MAX_HEIGHT;
  return { width: cappedHeight * CHEST_ASPECT_RATIO, height: cappedHeight };
};

const scale = (size: number) => {
  const { width } = getCurrentChestDimensions();
  return (width / guidelineBaseWidth) * size;
};

const verticalScale = (size: number) => {
  const { height } = getCurrentChestDimensions();
  return (height / guidelineBaseHeight) * size;
};

export const useLogoPositions = (): LogoPosition[] => {
  return [
    {
      id: "center",
      top: verticalScale(102),
      left: scale(0),
      right: scale(0),
      size: scale(80),
      rotation: 0,
      border: scale(14),
      animation: useBobbingAnimation({
        amplitude: scale(12),
        startDirection: "down",
        delay: 0,
      }),
    },
    {
      id: "top-right",
      top: verticalScale(51),
      left: scale(220),
      right: scale(0),
      size: scale(46),
      rotation: 15,
      border: scale(8),
      animation: useBobbingAnimation({
        amplitude: scale(8),
        startDirection: "down",
        delay: 400,
      }),
    },
    {
      id: "top-left",
      top: verticalScale(56),
      left: scale(0),
      right: scale(240),
      size: scale(62),
      rotation: -10,
      border: scale(10),
      animation: useBobbingAnimation({
        amplitude: scale(10),
        startDirection: "up",
        delay: 100,
      }),
    },
    {
      id: "bottom-left",
      top: verticalScale(192),
      left: scale(0),
      right: scale(230),
      size: scale(48),
      rotation: 15,
      border: scale(9),
      animation: useBobbingAnimation({
        amplitude: scale(10),
        startDirection: "down",
        delay: 200,
      }),
    },
    {
      id: "bottom-right",
      top: verticalScale(156),
      left: scale(274),
      right: scale(0),
      size: scale(60),
      rotation: -10,
      border: scale(12),
      animation: useBobbingAnimation({
        amplitude: scale(12),
        startDirection: "up",
        delay: 300,
      }),
    },
  ];
};
