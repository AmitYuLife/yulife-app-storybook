import { useState, ReactNode } from "react";
import { Box } from "../../box";
import { Text } from "../../text";
import { Colours } from "../../../tokens/colours";

export interface ITab {
  name: string;
  icon?: ReactNode;
  onPress: () => void;
  testID?: string;
}

export interface ITabsProps {
  list: ITab[];
  defaultTab?: number;
  isLoading?: boolean;
}

export const Tabs = ({ list, defaultTab = 0, isLoading }: ITabsProps) => {
  const [selected, setSelected] = useState(list[defaultTab]?.name ?? list[0]?.name ?? "");

  return (
    <Box flexDirection="row" style={{ overflowX: "auto", borderBottom: `1px solid ${Colours.neutral.n100}` }}>
      {list.map(({ name, icon, onPress, testID }) => {
        const isSelected = name === selected;
        return (
          <button
            key={name}
            data-testid={testID}
            onClick={() => {
              if (!isLoading) {
                setSelected(name);
                onPress();
              }
            }}
            style={{
              flex: list.length <= 3 ? 1 : undefined,
              minWidth: 80,
              padding: "12px 16px",
              background: "none",
              border: "none",
              borderBottom: `2px solid ${isSelected ? Colours.primary.p600 : "transparent"}`,
              cursor: isLoading ? "default" : "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              opacity: isLoading ? 0.5 : 1,
            }}
          >
            {icon ? (
              <span style={{ color: isSelected ? Colours.primary.p600 : Colours.neutral.n700 }}>{icon}</span>
            ) : null}
            <Text type={isSelected ? "l2b" : "l2"} color={isSelected ? Colours.primary.p600 : Colours.neutral.n700}>
              {name}
            </Text>
          </button>
        );
      })}
    </Box>
  );
};
