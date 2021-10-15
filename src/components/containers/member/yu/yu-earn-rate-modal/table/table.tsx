import { Image, TextTemplate, YuCoinIcon } from "@atoms";
import { GetProductEarnRate_getProductEarnRate, RemoteImage } from "@graphql/_core/schema";
import { CoverType, YuScreenEarnRateTableThemeType } from "@graphql/_core/schema/globalTypes";
import { Colours, Style } from "@styles";
import React, { useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { mapThemeTypeToTheme, DEFAULT_THEME } from "./themes";

interface Props {
  loading: boolean;
  columns: GetProductEarnRate_getProductEarnRate["columns"];
  activeCoverType: CoverType;
}

type Theme = ReturnType<typeof mapThemeTypeToTheme>;

export const Table = (props: Props): React.ReactElement => {
  if (props.loading) {
    return null;
  }

  const { columns, activeCoverType } = props;

  return (
    <View style={styles.wrapper}>
      {columns.map((column, index) => {
        const theme = mapThemeTypeToTheme(column.themeType);
        return (
          <View
            key={index}
            style={[
              styles.column,
              {
                flex: column.flex,
              },
              getStyle(column.themeType),
            ]}
          >
            <LinearGradient
              style={[styles.background, { borderColor: theme.gradientBackgroundBorder }]}
              colors={
                !activeCoverType || castCoverTypeToThemeType(activeCoverType) === column.themeType
                  ? theme.gradientBackground
                  : DEFAULT_THEME.gradientBackground
              }
              useAngle={true}
              angleCenter={{ x: 0, y: 1 }}
              angle={95}
            />
            <ColumnHeader data={column.header} theme={theme} />
            <ColumnData type={column.valueType} theme={theme} values={column.values} icons={column.icons} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Style.adjust(48),
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  column: {
    paddingTop: Style.adjust(8),
    paddingHorizontal: Style.adjust(8),
  } as ViewStyle,
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#F7F3FF",
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
  } as ViewStyle,
  columnHeaderWrapper: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: Style.adjust(4),
    paddingTop: Style.adjust(2),
    paddingBottom: Style.adjust(4),
    borderRadius: 8,
    height: Style.adjust(50),
  } as ViewStyle,
  yuCoinWrapper: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  columnValue: {
    flexDirection: "row",
    marginTop: Style.adjust(8),
  },
  icon: {
    marginRight: Style.adjust(8),
  },
});

const ColumnHeader = ({ theme = DEFAULT_THEME, data }: { theme: Theme; data: { power: string; title: string } }) => {
  return (
    <View style={[styles.columnHeaderWrapper, { backgroundColor: theme.headerBackground }]}>
      {!data ? null : (
        <>
          <TextTemplate color={theme.secondary} type="l2b">
            {data.title}
          </TextTemplate>
          <YuCoin isBold={theme.boldHeader} color={theme.secondary} label={data.power} />
          <TextTemplate color={theme.secondary} type={theme.boldHeader ? "l3b" : "l3"}>
            Power
          </TextTemplate>
        </>
      )}
    </View>
  );
};

const ColumnData = ({
  values = [],
  theme = DEFAULT_THEME,
  type = "data",
  icons = [],
}: {
  icons: RemoteImage[];
  values: string[];
  theme: Theme;
  type: "header" | "data";
}) => {
  const wrapperStyle = useMemo(
    () =>
      ({
        alignItems: type === "header" ? "flex-start" : "flex-end",
        paddingBottom: Style.adjust(8),
      } as ViewStyle),
    [type]
  );
  return (
    <View style={wrapperStyle}>
      {values.map((value, index) => (
        <View key={index} style={styles.columnValue}>
          {icons && icons[index] ? (
            <Image
              source={{ uri: icons[index].uri }}
              suppressLoadingUi={true}
              width={Style.adjust(16)}
              height={Style.adjust(16)}
              style={styles.icon}
            />
          ) : null}
          {type === "header" ? (
            <TextTemplate type="l3b">{value}</TextTemplate>
          ) : (
            <YuCoin key={index} isBold={true} color={theme.primary} label={value} />
          )}
        </View>
      ))}
    </View>
  );
};

const YuCoin = ({
  label,
  isBold = false,
  color = Colours.neutral.white,
}: {
  label: string;
  isBold?: boolean;
  color?: string;
}) => {
  const style = useMemo(
    () => ({
      height: Style.adjust(12),
      width: Style.adjust(12),
      tintColor: color,
      marginLeft: Style.adjust(2),
    }),
    [color]
  );
  return (
    <View style={styles.yuCoinWrapper}>
      <TextTemplate color={color} type={isBold ? "l3b" : "l3"}>
        {label}
      </TextTemplate>
      <YuCoinIcon style={style} />
    </View>
  );
};

const castCoverTypeToThemeType = (coverType: CoverType) => {
  switch (coverType) {
    case CoverType.common:
      return YuScreenEarnRateTableThemeType.common;
    case CoverType.rare:
      return YuScreenEarnRateTableThemeType.rare;
    case CoverType.epic:
      return YuScreenEarnRateTableThemeType.epic;
    default:
      return YuScreenEarnRateTableThemeType.base;
  }
};

const castThemeTypeToCoverType = (coverType: YuScreenEarnRateTableThemeType) => {
  switch (coverType) {
    case YuScreenEarnRateTableThemeType.common:
      return CoverType.common;
    case YuScreenEarnRateTableThemeType.rare:
      return CoverType.rare;
    case YuScreenEarnRateTableThemeType.epic:
      return CoverType.epic;
    default:
      return null;
  }
};

const getStyle = (themeType: YuScreenEarnRateTableThemeType) => {
  const isCoverType = [CoverType.common, CoverType.rare, CoverType.epic].includes(castThemeTypeToCoverType(themeType));
  if (isCoverType) {
    return { width: Style.adjust(72) };
  }

  if ([YuScreenEarnRateTableThemeType.prestige, YuScreenEarnRateTableThemeType.baseDecorated].includes(themeType)) {
    return { width: Style.adjust(84), marginHorizontal: Style.adjust(4) };
  }

  return { width: "auto" };
};
