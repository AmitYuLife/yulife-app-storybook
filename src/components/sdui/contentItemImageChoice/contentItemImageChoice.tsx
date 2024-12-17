import React, { memo, useCallback, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemImageChoiceFragment as GqlImageChoice } from "@graphql/__generated";
import { Colours, Style } from "@styles";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { ImageChoiceLabel } from "./imageChoiceLabel";
import { Image } from "@atoms";
import { ImageChoiceActiveIndicator } from "./activeIndicator";

interface Props extends GqlImageChoice {
  selectedValues: string[];
  onChange: (value: string[]) => void;
}

const ContentItemImageChoiceBase = memo(
  ({
    id,
    options,
    columns,
    selectedValues,
    multiSelect,
    styles: serverStyles,
    rowStyles: rowStylesServer,
    imageStyles: imageStylesServer,
    textStyles,
    labelTextType,
    hideCheckbox,
    onChange,
  }: Props) => {
    const safeSelectedValues = selectedValues || [];

    const rowStyles = mapServerStyles(rowStylesServer);
    const imageStyles = mapServerStyles(imageStylesServer);

    const handleValueChange = useCallback(
      (value: string) => {
        if (!multiSelect) {
          onChange([value]);
        } else {
          onChange(buildNewState(safeSelectedValues, value));
        }
      },
      [onChange, safeSelectedValues, multiSelect]
    );

    const rows = useMemo(() => {
      const rowsToCreate = [];

      for (const option of options) {
        const currentRow = rowsToCreate[rowsToCreate.length - 1];

        if (!currentRow || currentRow.length === columns) {
          rowsToCreate.push([option]);
        } else {
          currentRow.push(option);
        }
      }

      return rowsToCreate;
    }, [options, columns]);

    return (
      <View key={id} style={[styles.wrapper, mapServerStyles(serverStyles)]}>
        {rows.map((row) => (
          <View key={row.map((r) => r.value).join(",")} style={[styles.row, rowStyles]}>
            {row.map((item) => {
              const isActive = safeSelectedValues.includes(item.value);

              return (
                <TouchableOpacityWithDelay
                  key={item.value}
                  activeOpacity={1}
                  style={StyleSheet.flatten([styles.item, isActive ? styles.activeWrapper : null])}
                  onPress={() => handleValueChange(item.value)}
                  delay={50}
                >
                  <ImageChoiceActiveIndicator checkboxVisible={multiSelect && !hideCheckbox} isActive={isActive} />

                  <View style={styles.viewWrapper}>
                    <View style={[styles.imageWrapper, imageStyles]}>
                      <Image
                        width={Style.adjust((imageStyles?.width as number) || 96)}
                        height={Style.adjust((imageStyles?.height as number) || 56)}
                        source={{ uri: item.image.uri }}
                      />
                    </View>

                    {!item.label ? null : (
                      <ImageChoiceLabel label={item.label} labelTextType={labelTextType} textStyles={textStyles} />
                    )}
                  </View>
                </TouchableOpacityWithDelay>
              );
            })}
          </View>
        ))}
      </View>
    );
  }
);

export const ContentItemImageChoice = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<string[]>(answerKey);

  return <ContentItemImageChoiceBase {...props} selectedValues={value} onChange={onChange} />;
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(28),
    marginLeft: Style.adjust(24),
    marginRight: Style.adjust(24),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  row: {
    flexDirection: "row",
    alignItems: "stretch",
    marginBottom: Style.adjust(8),
  },
  item: {
    flex: 1,
    borderRadius: Style.adjust(8),
    marginHorizontal: Style.adjust(4),
    borderColor: Colours.neutral.n100,
    borderWidth: Style.adjust(1),
    justifyContent: "center",
  } as ViewStyle,
  imageWrapper: {
    alignSelf: "center",
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  activeWrapper: {
    borderColor: Colours.primary.p100,
  } as ViewStyle,
  viewWrapper: {
    alignContent: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: Style.adjust(8),
  } as ViewStyle,
});

const buildNewState = (oldState: string[], value: string) => {
  const index = oldState.indexOf(value);

  if (index === -1) {
    return [...oldState, value];
  }

  return oldState.filter((item) => item !== value);
};
