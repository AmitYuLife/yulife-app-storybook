import { DEVICES } from "@styles/media";
import { useBobbingAnimation } from "@hooks";

type LogoPosition = {
  id: string;
  bottom: number;
  start: number;
  end: number;
  size: number;
  rotation: number;
  border: number;
  animation: ReturnType<typeof useBobbingAnimation>;
};

const guidelineBaseWidth = DEVICES.iPhone16ProMax.width;
const guidelineBaseHeight = 373; // height of the chest, when scaled to the width of an iPhone 16 Pro Max

export const useLogoPositions = ({ height, width }: { height: number; width: number }): LogoPosition[] => {
  const scale = (size: number) => {
    return (width / guidelineBaseWidth) * size;
  };

  const verticalScale = (size: number) => {
    return (height / guidelineBaseHeight) * size;
  };

  return [
    {
      id: "center",
      bottom: verticalScale(190),
      start: scale(0),
      end: scale(0),
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
      bottom: verticalScale(275),
      start: scale(220),
      end: scale(0),
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
      bottom: verticalScale(250),
      start: scale(0),
      end: scale(240),
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
      bottom: verticalScale(130),
      start: scale(0),
      end: scale(230),
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
      bottom: verticalScale(150),
      start: scale(274),
      end: scale(0),
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
