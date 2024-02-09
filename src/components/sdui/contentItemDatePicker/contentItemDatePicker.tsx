import React, { memo, useCallback, useEffect, useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { View } from "react-native";
import { ContentItemDatePickerFragment as GqlDatePicker } from "@graphql/__generated";
import { Colours } from "@styles";
import { TextTemplate } from "@atoms";
import { TertiaryButton } from "@molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { DATE_INPUT, DATE_PICKER } from "@ids";
import { useSduiOnChange } from "@components/sdui/_hooks/useSduiOnChange";
interface IProps extends GqlDatePicker {
  onChange?: (value: string) => void;
}

type Props = IProps;

const DISPLAY_DATE_FORMAT = "DD / MM / YYYY";

const formatDate = (date: string, dateFormat: string) => moment(date, dateFormat).format(DISPLAY_DATE_FORMAT);

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

  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(initialDate ? formatDate(initialDate, dateFormat) : null);

  const handleChange = useCallback(
    (newDate: Date) => {
      setShowPicker(false);

      if (newDate) {
        const dateStringShow = moment(newDate).format(DISPLAY_DATE_FORMAT);
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

  useEffect(() => {
    if (!initialDate) {
      return;
    }

    const formattedInitialDate = formatDate(initialDate, dateFormat);
    if (formattedInitialDate !== date) {
      setDate(formattedInitialDate);
    }
  }, [date, initialDate]);

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
        label={date || DISPLAY_DATE_FORMAT}
        tertiarySubLabel={subLabel}
        wrapperStyle={mapServerStyles(buttonStyles)}
        testID={DATE_INPUT}
      />
      <DateTimePicker
        date={date ? moment(date, DISPLAY_DATE_FORMAT).toDate() : moment().toDate()}
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

export const ContentItemDatePickerSdui = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<string>(answerKey);

  return <ContentItemDatePicker {...props} initialDate={value} onChange={onChange} />;
});
