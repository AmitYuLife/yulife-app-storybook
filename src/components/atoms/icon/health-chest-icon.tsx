import { Style } from "@styles";
import { useMemo } from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface Props {
  size?: number;
  active: boolean;
  inactiveForegroundColor: string;
  inactiveBackgroundColor: string;
}

export const HealthChestIcon = ({
  size = 32,
  active = true,
  inactiveForegroundColor,
  inactiveBackgroundColor,
}: Props) => {
  const colors = useMemo(
    () =>
      active
        ? {
            boxCorners: "#F4F0FF", // white corners/accents
            boxSide: "#F43E8E", // right box side
            boxFront: "#FF7EB6", // box front
            heartCircle: "#FFFFFF", // heart bg circle
            heart: "#F43E8E", // heart fill
          }
        : {
            boxCorners: inactiveBackgroundColor,
            boxSide: inactiveBackgroundColor,
            boxFront: inactiveBackgroundColor,
            heartCircle: inactiveForegroundColor,
            heart: inactiveBackgroundColor,
          },
    [active, inactiveForegroundColor, inactiveBackgroundColor]
  );

  return (
    <Svg width={Style.adjust(size)} height={Style.adjust(size)} viewBox="0 0 32 32" fill="none">
      {/* top right corner/shine */}
      <Path d="M30 6.16163C30 4.96779 29.0322 4 27.8383 4H25V5L29 9H30V6.16163Z" fill={colors.boxCorners} />
      {/* bottom right corner/shine */}
      <Path d="M30 25.8384C30 27.0322 29.0322 28 27.8383 28H25V27L29 23H30V25.8384Z" fill={colors.boxCorners} />
      {/* right side of box */}
      <Path d="M19 5H27.5C28.3284 5 29 5.67157 29 6.5V25.5C29 26.3284 28.3284 27 27.5 27H19V5Z" fill={colors.boxSide} />
      {/* box front panel */}
      <Path d="M3 5H23V27H3V5Z" fill={colors.boxFront} />
      {/* heart circle background */}
      <Circle cx="12.4667" cy="16.4668" r="7.46667" fill={colors.heartCircle} />
      {/* top left corner/shine */}
      <Path d="M2 6.16163C2 4.96779 2.9678 4 4.16165 4H7V5L3 9H2V6.16163Z" fill={colors.boxCorners} />
      {/* left side/shine accent top */}
      <Path
        d="M23.6667 6.16163C23.6667 4.96779 22.6989 4 21.5051 4H18.6667V5L22.6667 9H23.6667V6.16163Z"
        fill={colors.boxCorners}
      />
      {/* bottom left corner/shine */}
      <Path
        d="M2 25.8387C2 27.0326 2.9678 28.0004 4.16165 28.0004H7V27.0004L3 23.0004H2V25.8387Z"
        fill={colors.boxCorners}
      />
      {/* left side/shine accent bottom */}
      <Path
        d="M23.6665 25.8385C23.6665 27.0323 22.6988 28 21.505 28H18.6668V27.0001L22.6666 23.0003H23.6665V25.8385Z"
        fill={colors.boxCorners}
      />
      {/* heart main shape */}
      <Path
        d="M17.2662 17.57C15.976 19.7463 12.511 22.5 12.511 22.5C12.511 22.5 9.20038 19.8051 7.7593 17.57C6.8804 16.2068 6.63887 14.5294 7.7593 13.3712C8.87974 12.2096 10.692 12.2096 11.8125 13.3712L12.5144 14.099L13.2164 13.3712C14.3368 12.2096 16.1491 12.2096 17.2695 13.3712C18.3832 14.5294 18.0943 16.173 17.2662 17.57Z"
        fill={colors.heart}
      />
      {/* left heart accent */}
      <Path
        d="M9.84538 14.6592C11.0063 13.625 10.4769 12.5613 9.66949 12.5128C8.76322 12.5051 7.27737 13.2203 7.03284 14.8798C6.69714 17.0213 9.03017 19.1736 9.6958 19.9048C7.20617 16.8213 7.75274 15.4399 7.97478 14.9149C7.95261 15.1092 8.91156 15.4912 9.84538 14.6592Z"
        fill={colors.heart}
      />
      {/* right heart accent */}
      <Path
        d="M14.109 19.5451C16.365 17.993 18.9584 14.7578 16.363 12.7363C17.5548 13.2466 18.4952 14.675 17.697 16.6249C17.1175 18.5181 13.9328 21.3455 12.5183 22.4861C12.5183 22.4861 12.3167 20.7255 14.109 19.5451Z"
        fill={colors.heart}
      />
    </Svg>
  );
};
