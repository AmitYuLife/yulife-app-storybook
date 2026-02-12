import React, { memo, useCallback, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { ContentItemImageChoiceFragment as GqlImageChoice } from "@graphql/__generated";
import { Colours, Style, StyleSheet } from "@styles";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { ImageChoiceLabel } from "./imageChoiceLabel";
import { Image } from "@atoms";
import { ImageChoiceActiveIndicator } from "./activeIndicator";
import { isEmpty, omitBy } from "lodash";
import { IMAGE_CHOICE, IMAGE_CHOICE_CHECKBOX } from "@ids";
import { DETOX_ENABLED } from "@services/socket";

export type ImageChoiceAnswerValue = Record<string, boolean> | undefined;

interface Props extends GqlImageChoice {
  value: ImageChoiceAnswerValue;
  onChange: (value: ImageChoiceAnswerValue) => void;
}

const ContentItemImageChoiceBase = memo(
  ({
    id,
    options,
    columns,
    value: serverValue = undefined,
    multiSelect,
    styles: serverStyles,
    rowStyles: rowStylesServer,
    imageStyles: imageStylesServer,
    textStyles,
    labelTextType,
    hideCheckbox,
    onChange,
    selectedStyles,
    unselectedStyles,
  }: Props) => {
    const value = useMemo(() => serverValue || {}, [serverValue]);

    const rowStyles = mapServerStyles(rowStylesServer);
    const imageStyles = mapServerStyles(imageStylesServer);

    const handleValueChange = useCallback(
      (optionKey: string, optionValue: boolean) => {
        // radio buttons cannot be unselected
        if (!multiSelect && optionValue === false) {
          return;
        }

        const update = {
          ...(multiSelect ? value : {}),
          [optionKey]: optionValue,
        };

        const changeUpdate = omitBy(update, (x) => x === false);

        onChange(isEmpty(changeUpdate) ? undefined : changeUpdate);
      },
      [onChange, value, multiSelect]
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
            {row.map(({ value: optionKey, label, image }) => {
              const isChecked = !!value[optionKey];

              const mappedWrapperStyles = mapServerStyles(isChecked ? selectedStyles : unselectedStyles);

              return (
                <TouchableOpacityWithDelay
                  key={optionKey}
                  activeOpacity={1}
                  style={StyleSheet.flatten([styles.item, isChecked ? styles.activeWrapper : null])}
                  onPress={() => handleValueChange(optionKey, !isChecked)}
                  delay={50}
                >
                  <ImageChoiceActiveIndicator
                    checkboxVisible={multiSelect && !hideCheckbox}
                    isChecked={isChecked}
                    style={mappedWrapperStyles as ViewStyle}
                  />

                  <View
                    style={styles.viewWrapper}
                    testID={IMAGE_CHOICE_CHECKBOX(optionKey, isChecked)}
                    collapsable={DETOX_ENABLED ? false : undefined}
                  >
                    <View
                      style={[styles.imageWrapper, imageStyles]}
                      testID={IMAGE_CHOICE(image.id)}
                      collapsable={DETOX_ENABLED ? false : undefined}
                    >
                      <Image
                        width={Style.adjust((imageStyles?.width as number) || 96)}
                        height={Style.adjust((imageStyles?.height as number) || 56)}
                        source={image}
                      />
                    </View>

                    {!label ? null : (
                      <ImageChoiceLabel label={label} labelTextType={labelTextType} textStyles={textStyles} />
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
  const { value, onChange } = useSduiOnChange<ImageChoiceAnswerValue>(answerKey);

  return <ContentItemImageChoiceBase {...props} value={value} onChange={onChange} />;
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(28),
    marginStart: Style.adjust(24),
    marginEnd: Style.adjust(24),
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
