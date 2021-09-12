import React, { memo, useCallback, useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemDatePicker as GqlDatePicker } from "@graphql/_core/schema";
import { Colours, Style } from "@styles";
import { TertiaryButton } from "@atoms";
import { mapServerStyles } from "../_utils/mapServerStyles";

interface IProps extends GqlDatePicker {
  onChange?: (value: string) => void;
}

type Props = IProps;

export const ContentItemDatePicker = memo((props: Props) => {
  const {
    onChange,
    dateFormat,
    size,
    buttonLeftIcon,
    buttonRightIcon,
    buttonStyles,
    subLabel,
    minDate,
    maxDate,
    initialDate,
  } = props;
  const displayDateFormat = "DD / MM / YYYY";

  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(initialDate ? moment(initialDate, dateFormat).format(displayDateFormat) : null);

  const handleChange = useCallback(
    (newDate: Date) => {
      setShowPicker(false);

      if (newDate) {
        const dateStringShow = moment(newDate).format(displayDateFormat);
        const dateStringPass = moment(newDate).format(dateFormat);

        setDate(dateStringShow);
        onChange(dateStringPass);
      }
    },
    [dateFormat, onChange]
  );

  const handlePress = useCallback(() => {
    setShowPicker(true);
  }, []);

  const handleCancel = useCallback(() => {
    setShowPicker(false);
  }, []);

  return (
    <View style={styles.wrapper}>
      <TertiaryButton
        size={size}
        iconUri={buttonLeftIcon.uri}
        rightIconUri={buttonRightIcon.uri}
        onPress={handlePress}
        label={date || displayDateFormat}
        tertiarySubLabel={subLabel}
        wrapperStyle={mapServerStyles(buttonStyles)}
      />
      <DateTimePicker
        date={date ? moment(date, displayDateFormat).toDate() : moment().toDate()}
        mode="date"
        display="spinner"
        isVisible={showPicker}
        onConfirm={handleChange}
        onCancel={handleCancel}
        minimumDate={moment(minDate, dateFormat).toDate()}
        maximumDate={moment(maxDate, dateFormat).toDate()}
        isDarkModeEnabled={false}
        textColor={Colours.neutral.n900}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(40),
  } as ViewStyle,
});
