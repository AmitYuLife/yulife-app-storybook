import { Text } from "../../text";

export interface IAvPlayerTimerProps {
  time: number;
  colour?: string;
  opacity?: number;
}

const pad = (n: number) => String(n).padStart(2, "0");

const formatTime = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${pad(minutes)}:${pad(seconds)}`;
};

export const AvPlayerTimer = ({ time, colour, opacity = 1 }: IAvPlayerTimerProps) => (
  <div style={{ opacity, display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Text type="b2b" color={colour} align="center">
      {formatTime(time)}
    </Text>
  </div>
);
