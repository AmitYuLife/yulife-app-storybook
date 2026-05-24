import { Colours } from "../../../tokens/colours";

export interface IAvPlayerProgressBarProps {
  currentProgress: number;
  duration: number;
  fillColor?: string;
}

export const AvPlayerProgressBar = ({
  currentProgress,
  duration,
  fillColor = Colours.primary.p600,
}: IAvPlayerProgressBarProps) => {
  const pct = duration > 0 ? Math.min((currentProgress / duration) * 100, 100) : 0;

  return (
    <div
      style={{
        width: "100%",
        height: 6,
        borderRadius: 3,
        backgroundColor: Colours.neutral.n200,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${pct}%`,
          height: "100%",
          borderRadius: 3,
          backgroundColor: fillColor,
          transition: "width 0.3s linear",
        }}
      />
    </div>
  );
};
