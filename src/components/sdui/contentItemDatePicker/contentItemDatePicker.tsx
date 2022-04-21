import React, { memo, useCallback, useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { View } from "react-native";
import { ContentItemDatePicker as GqlDatePicker } from "@graphql/_core/schema";
import { Colours } from "@styles";
import { TextTemplate } from "@atoms";
import { TertiaryButton } from "@molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { DATE_INPUT, DATE_PICKER } from "@ids";
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
    label,
    labelWrapperStyles,
    subLabel,
    minDate,
    maxDate,
    initialDate,
    styles,
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
    <View style={mapServerStyles(styles)}>
      {!label ? null : (
        <View style={mapServerStyles(labelWrapperStyles)}>
          <TextTemplate type="l1" color={Colours.neutral.n400}>
            {label}
          </TextTemplate>
        </View>
      )}
      <TertiaryButton
        size={size}
        iconUri={buttonLeftIcon.uri}
        rightIconUri={buttonRightIcon.uri}
        onPress={handlePress}
        label={date || displayDateFormat}
        tertiarySubLabel={subLabel}
        wrapperStyle={mapServerStyles(buttonStyles)}
        testID={DATE_INPUT}
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
        testID={DATE_PICKER}
      />
    </View>
  );
});
