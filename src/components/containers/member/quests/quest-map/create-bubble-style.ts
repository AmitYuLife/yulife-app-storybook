import { Style } from "@styles";

type Props = {
  episodeWidth: number;
  y: number;
  offsetY: number;
  x: number;
};

const BUBBLE_SIZE = Style.adjust(50) + (Style.PIXEL_RATIO >= 3 ? Style.adjust(20) : 0);

export function createBubbleStyle({ episodeWidth, y, offsetY, x }: Props) {
  const position = {
    x: x * (Style.DEVICE_WIDTH / episodeWidth),
    y: (y + offsetY) * (Style.DEVICE_WIDTH / episodeWidth),
  };

  return {
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    marginStart: -BUBBLE_SIZE / 2,
    marginTop: -BUBBLE_SIZE / 2,
    aspectRatio: 1,
    borderRadius: 100,
    alignItems: "center" as "center",
    position: "absolute" as "absolute",
    justifyContent: "center" as "center",
    top: position.y,
    left: position.x,
  };
}
