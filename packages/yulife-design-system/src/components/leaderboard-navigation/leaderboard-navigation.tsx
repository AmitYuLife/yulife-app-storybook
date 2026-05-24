import { CSSProperties, memo, useCallback, useMemo } from "react";
import { Colours } from "../../tokens/colours";
import { FONT_FAMILY_PRIMARY, FONT_FAMILY_PRIMARY_BOLD } from "../../tokens/typography";

export interface ILeaderboardNavigationTab {
  key: string;
  label: string;
  count?: number;
}

export interface ILeaderboardNavigationProps {
  tabs: ILeaderboardNavigationTab[];
  activeTab: string;
  onTabChange: (key: string) => void;
  style?: CSSProperties;
}

const LeaderboardNavigation = ({ tabs, activeTab, onTabChange, style }: ILeaderboardNavigationProps) => {
  const containerStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      flexDirection: "row",
      backgroundColor: Colours.neutral.white,
      borderBottom: `1px solid ${Colours.neutral.n100}`,
      ...style,
    }),
    [style]
  );

  return (
    <nav style={containerStyle} role="tablist" aria-label="Leaderboard navigation">
      {tabs.map((tab) => (
        <LeaderboardTab key={tab.key} tab={tab} isActive={tab.key === activeTab} onPress={onTabChange} />
      ))}
    </nav>
  );
};

interface ILeaderboardTabProps {
  tab: ILeaderboardNavigationTab;
  isActive: boolean;
  onPress: (key: string) => void;
}

const LeaderboardTab = memo(({ tab, isActive, onPress }: ILeaderboardTabProps) => {
  const handleClick = useCallback(() => onPress(tab.key), [onPress, tab.key]);

  const tabStyle = useMemo(
    (): CSSProperties => ({
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "12px",
      paddingBottom: "12px",
      paddingLeft: "8px",
      paddingRight: "8px",
      gap: "2px",
      cursor: "pointer",
      background: "none",
      border: "none",
      borderBottom: isActive ? `2px solid ${Colours.primary.p600}` : "2px solid transparent",
      transition: "border-color 0.2s ease",
    }),
    [isActive]
  );

  const labelStyle = useMemo(
    (): CSSProperties => ({
      fontFamily: isActive ? FONT_FAMILY_PRIMARY_BOLD : FONT_FAMILY_PRIMARY,
      fontWeight: isActive ? "700" : "400",
      fontSize: "14px",
      lineHeight: "18px",
      color: isActive ? Colours.primary.p600 : Colours.neutral.n700,
      transition: "color 0.2s ease",
    }),
    [isActive]
  );

  const countStyle: CSSProperties = {
    fontFamily: FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "16px",
    color: isActive ? Colours.primary.p600 : Colours.neutral.n500,
  };

  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${tab.key}`}
      style={tabStyle}
      onClick={handleClick}
    >
      <span style={labelStyle}>{tab.label}</span>
      {tab.count != null && <span style={countStyle}>{tab.count.toLocaleString()}</span>}
    </button>
  );
});
LeaderboardTab.displayName = "LeaderboardTab";

export default memo(LeaderboardNavigation);
