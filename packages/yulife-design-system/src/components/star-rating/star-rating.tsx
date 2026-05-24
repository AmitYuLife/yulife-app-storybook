import { CSSProperties, memo } from "react";
import { Colours } from "../../tokens/colours";

export interface IStarRatingProps {
  totalStars?: number;
  activeStars: number;
  size?: number;
  activeColor?: string;
  inactiveColor?: string;
  style?: CSSProperties;
}

const StarRating = ({
  totalStars = 5,
  activeStars,
  size = 20,
  activeColor = Colours.primary.p600,
  inactiveColor = Colours.neutral.n200,
  style,
}: IStarRatingProps) => {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "4px",
    ...style,
  };

  return (
    <div style={containerStyle} role="img" aria-label={`${activeStars} out of ${totalStars} stars`}>
      {Array.from({ length: totalStars }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < activeStars ? activeColor : inactiveColor}
        >
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

export default memo(StarRating);
