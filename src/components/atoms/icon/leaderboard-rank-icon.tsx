import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";

interface IProps {
  width?: number;
  height?: number;
  rank: number;
}

export const LeaderboardRankIcon = memo(({ width = 24, height = 24, rank }: IProps) => {
  const { backgroundColor, shade, d } = getIconColours(rank);
  return (
    <Svg width={Style.adjust(width)} height={Style.adjust(height)} fill="none" viewBox="0 0 24 24">
      <Path
        fill={backgroundColor}
        d="M4 13.5v9.409a1 1 0 0 0 1.434.9L12 20.649l6.566 3.162A1 1 0 0 0 20 22.909V13.5l-8 4.32-8-4.32Z"
      />
      <Path fill={shade} d="M21 10.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <Path
        fill={backgroundColor}
        fillRule="evenodd"
        d="M22 10.5c0 5.523-4.477 10-10 10s-10-4.477-10-10S6.477.5 12 .5s10 4.477 10 10Zm-10 9a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        clipRule="evenodd"
      />
      <Path fill={backgroundColor} d="M18.364 16.864A9 9 0 0 0 5.636 4.136L12 10.5l6.364 6.364Z" />
      <Path fill="#fff" d={d} />
    </Svg>
  );
});

const getIconColours = (rank: number) => {
  switch (rank) {
    case 3: {
      return {
        backgroundColor: "#00ED9D",
        shade: "#6BF3C4",
        d: "M12.583 7.264 10.835 9.26a.621.621 0 0 0-.161.434c0 .36.285.645.669.645h.769c1.115 0 1.475.62 1.475 1.487 0 .88-.52 1.438-1.637 1.438-.805 0-1.276-.359-1.698-.842-.21-.236-.372-.323-.595-.323a.661.661 0 0 0-.545 1.03c.533.755 1.55 1.375 2.838 1.375 2.021 0 3.05-.98 3.05-2.678 0-1.314-.533-2.528-2.281-2.727l1.81-2.045a.605.605 0 0 0 .161-.422.635.635 0 0 0-.632-.632H10.09a.635.635 0 0 0-.632.632c0 .347.285.632.632.632h2.492Z",
      };
    }

    case 2: {
      return {
        backgroundColor: "#00C0F3",
        shade: "#5BCCEA",
        d: "M9 7.28a.606.606 0 0 0-.06.276c0 .36.288.648.648.648.252 0 .468-.132.6-.384.216-.456.624-.864 1.368-.864.912 0 1.404.588 1.404 1.26 0 2.244-4.308 2.52-4.308 5.172 0 .336.276.612.612.612h4.584a.615.615 0 0 0 .612-.612.615.615 0 0 0-.612-.612h-3.684c0-1.056 4.164-2.028 4.164-4.56 0-1.476-1.032-2.46-2.772-2.46-1.32 0-2.172.648-2.556 1.524Z",
      };
    }

    default: {
      return {
        backgroundColor: "#956AFF",
        shade: "#B094FF",
        d: "M11.419 7.7v5.712c0 .372.312.684.684.684a.692.692 0 0 0 .684-.684v-6.9a.692.692 0 0 0-.684-.684c-.18 0-.288.06-.42.144L9.955 7.088a.666.666 0 0 0 .372 1.212.63.63 0 0 0 .396-.132l.696-.468Z",
      };
    }
  }
};
