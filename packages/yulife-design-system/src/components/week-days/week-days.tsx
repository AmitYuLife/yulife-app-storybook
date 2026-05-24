import { CSSProperties, memo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export interface IWeekDaysProps {
  activeDays?: number[];
  todayIndex?: number;
  style?: CSSProperties;
}

const WeekDays = ({ activeDays = [], todayIndex, style }: IWeekDaysProps) => {
  const today = todayIndex ?? new Date().getDay();
  const adjustedToday = today === 0 ? 6 : today - 1;

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    ...style,
  };

  return (
    <div style={containerStyle}>
      {DAYS.map((day, i) => {
        const isToday = i === adjustedToday;
        const isActive = activeDays.includes(i);

        const dayStyle: CSSProperties = {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          flex: 1,
        };

        const labelStyle: CSSProperties = {
          fontFamily: isToday ? FONT_FAMILY_PRIMARY_BOLD : FONT_FAMILY_PRIMARY,
          fontWeight: isToday ? "700" : "400",
          fontSize: "12px",
          lineHeight: "16px",
          color: isToday ? Colours.primary.p600 : Colours.neutral.n600,
        };

        const dotStyle: CSSProperties = {
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: isActive ? Colours.primary.p600 : "transparent",
        };

        return (
          <div key={day} style={dayStyle}>
            <span style={labelStyle}>{day}</span>
            <div style={dotStyle} />
          </div>
        );
      })}
    </div>
  );
};

export default memo(WeekDays);
