import React, { memo, useCallback, useEffect, useState } from "react";
import { View, PressableStateCallbackType } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from "moment";
import { Image, TextTemplate } from "@atoms";
import { PressableWithDelay } from "@molecules";
import { DATE_PICKER } from "@ids";
import { Colours, Style } from "@styles";
import { CALENDAR_ICON, EDIT_ICON, ICON_SIZE, styles } from "./date-picker.styles";
import { usePressedInWithDelay } from "@hooks";
import { getDatePickerDisplayFormat } from "@locale";

interface IProps {
  dateFormat?: string;
  minDate?: string;
  maxDate?: string;
  initialDate?: string;
  large?: boolean;
  onChange?: (value: string) => void;
}

type Props = IProps;

const formatDate = (date: string, dateFormat: string, datePickerDisplayFormat: string) =>
  moment(date, dateFormat).format(datePickerDisplayFormat);

export const DatePicker = memo((props: Props) => {
  const { onChange, dateFormat, minDate, maxDate, initialDate, large } = props;
  const datePickerDisplayFormat = getDatePickerDisplayFormat();

  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(initialDate ? formatDate(initialDate, dateFormat, datePickerDisplayFormat) : null);

  const handleChange = useCallback(
    (newDate: Date) => {
      setShowPicker(false);

      if (newDate) {
        const dateStringShow = moment(newDate).format(datePickerDisplayFormat);
        const dateStringPass = moment(newDate).format(dateFormat);

        setDate(dateStringShow);
        onChange(dateStringPass);
      }
    },
    [dateFormat, datePickerDisplayFormat, onChange]
  );

  const handleCancel = useCallback(() => {
    setShowPicker(false);
  }, []);

  useEffect(() => {
    if (!initialDate) {
      return;
    }

    const formattedInitialDate = formatDate(initialDate, dateFormat, datePickerDisplayFormat);
    if (formattedInitialDate !== date) {
      setDate(formattedInitialDate);
    }
  }, [date, initialDate, dateFormat, datePickerDisplayFormat]);

  const title = date || datePickerDisplayFormat;

  const { handlePressIn, handlePressOut, handlePress } = usePressedInWithDelay({ onPress: () => setShowPicker(true) });
  const pressableStyle = useCallback(
    ({ pressed }: PressableStateCallbackType) => [
      styles.main,
      !pressed && styles.notPressed,
      { height: Style.adjust(large ? 78 : 60) },
    ],
    [large]
  );

  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.flex}>
          <PressableWithDelay
            delay={1000}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={handlePress}
            style={pressableStyle}
            accessibilityLabel={title}
            accessibilityRole={"button"}
          >
            <View style={styles.leftSide}>
              <Image source={CALENDAR_ICON} width={ICON_SIZE} height={ICON_SIZE} />
              <View style={styles.titleWrapper}>
                <TextTemplate type="b2b">{title}</TextTemplate>
              </View>
            </View>
            <View style={styles.rightIcon}>
              <Image source={EDIT_ICON} width={ICON_SIZE} height={ICON_SIZE} />
            </View>
          </PressableWithDelay>
        </View>
      </View>
      <DateTimePicker
        date={date ? moment(date, datePickerDisplayFormat).toDate() : moment().toDate()}
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

export default memo(DatePicker);
