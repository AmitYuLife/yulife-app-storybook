import { Style } from "../../../styles";

export const getHeight = (height: number = 0) => ({
  height: Style.SCALE_UP_AND_DOWN(height),
});

export const getWidth = (width: number = 0) => ({
  width: Style.SCALE_UP_AND_DOWN(width),
});
