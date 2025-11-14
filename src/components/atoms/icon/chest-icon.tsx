import { Style } from "@styles";
import { useMemo } from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  size?: number;
  active?: boolean;
}

export const ChestIcon = ({ size = 32, active = true }: Props) => {
  const colors = useMemo(
    () =>
      active
        ? {
            yellow1: "#FFE242",
            yellow2: "#FFE200",
            purple1: "#956AFF",
            purple2: "#692EFB",
            orange: "#FFB803",
            lock: "#55535B",
          }
        : {
            yellow1: "#E7E7EB",
            yellow2: "#E7E7EB",
            purple1: "#979799",
            purple2: "#717173",
            orange: "#C0C0C7",
            lock: "#55535B",
          },
    [active]
  );

  return (
    <Svg width={Style.adjust(size)} height={Style.adjust(size)} fill="none" viewBox="0 0 32 32">
      <Path
        fill={colors.yellow1}
        d="M2.667 14.667h26.666V25.6c0 .59-.477 1.067-1.066 1.067H3.733c-.589 0-1.067-.478-1.067-1.067V14.667Z"
      />
      <Path fill={colors.yellow2} d="M2.667 14h8.666V5.333H9.435c-3.738 0-6.769 3.163-6.769 7.065V14Z" />
      <Path fill={colors.purple1} d="M5.333 14h16V5.333h-9.25c-3.728 0-6.75 3.384-6.75 7.557V14Z" />
      <Path fill={colors.yellow2} d="M14.666 16.667h8.667V5.334h-1.898c-3.738 0-6.768 3.163-6.768 7.064v4.269Z" />
      <Path fill={colors.orange} d="M17.334 11.333a6 6 0 0 1 12 0v14c0 .736-.598 1.333-1.334 1.333H17.334V11.333Z" />
      <Path
        fill={colors.purple2}
        d="M20 24h6.667V11.823C26.667 9.712 25.174 8 23.333 8 21.493 8 20 9.712 20 11.823V24Z"
      />
      <Path fill={colors.orange} d="M17.334 14h12v2.667h-12V14Z" />
      <Path fill={colors.purple1} d="M5.333 16h9.334v8H5.334v-8Z" />
      <Path fill={colors.orange} d="M14.666 22.667h2.667v4h-2.667z" />
      <Path fill={colors.yellow1} d="M14.666 16h2.667v9.6c0 .59-.477 1.067-1.066 1.067h-1.6V16Z" />
      <Path fill={colors.yellow2} d="M2.667 14h14.666v2.667H2.667V14Z" />
      <Path fill={colors.orange} d="M2.667 16.667h2.666V18H2.666v-1.333ZM14.666 16.667h2.667V18h-2.666v-1.333Z" />
      <Path
        fill={colors.yellow2}
        d="M6.667 15.57c0-.498.404-.903.903-.903h3.527c.499 0 .903.405.903.903v3.527a.903.903 0 0 1-.903.904H7.57a.903.903 0 0 1-.904-.904V15.57Z"
      />
      <Path
        fill={colors.lock}
        d="M9.334 14.934A1.333 1.333 0 0 1 10 17.42v.847a.667.667 0 0 1-1.335 0v-.847a1.331 1.331 0 0 1 .668-2.486Z"
      />
    </Svg>
  );
};
