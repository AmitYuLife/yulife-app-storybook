import moment from "moment";
import React, { memo, useMemo, useState, useCallback } from "react";
import { ScrollPickerModal } from "@components/modals";
import DateTimePicker from "react-native-modal-datetime-picker";
import { View, Alert, ScrollView, StyleSheet, Platform } from "react-native";
import { TextTemplate } from "@atoms";
import { Button, TertiaryButton } from "@molecules";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { Colours, Style } from "@styles";
import { getAdditionalCyclingFitnessActivities, queryFitKitByTypesDebug } from "@services/fitkit/fitkit.helpers";
import { CheckBox } from "@components/molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";

interface Props {
  onClose: () => void;
}

const ToolsScreen = ({ onClose }: Props) => {
  const displayDateFormat = "DD / MM / YYYY";
  const features = useSelector(getUserFeatures);
  const [type, setType] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typeIndex, setTypeIndex] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [showTypePicker, setShowTypePicker] = useState(false);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [allActivitiesSelect, setAllActivitiesSelect] = useState(false);
  const [pickerDateState, setPickerDateState] = useState<"startDate" | "endDate">(null);

  const onConfirm = useCallback(
    (date: Date) => {
      setShowDateTimePicker(false);
      const momentDate = moment(date).format();
      pickerDateState === "startDate" ? setStartDate(momentDate) : setEndDate(momentDate);
    },
    [setStartDate, setShowDateTimePicker, setEndDate, pickerDateState]
  );

  const onCancel = useCallback(() => {
    setShowDateTimePicker(false);
  }, [setShowDateTimePicker]);

  const handlePressType = useCallback(() => {
    setShowTypePicker(true);
  }, [setShowTypePicker]);

  const handlePickerCancel = useCallback(() => {
    setShowTypePicker(false);
  }, [setShowTypePicker]);

  const onCheckBoxPress = useCallback(() => {
    setAllActivitiesSelect((state) => !state);
  }, [setAllActivitiesSelect]);

  const onTypePickerIndexChange = useCallback(
    (index) => {
      setTypeIndex(index);
    },
    [setTypeIndex]
  );

  const handlePressStartTime = useCallback(() => {
    setPickerDateState("startDate");
    setShowDateTimePicker(true);
  }, [setPickerDateState, setShowDateTimePicker]);

  const handlePressEndTime = useCallback(() => {
    setPickerDateState("endDate");
    setShowDateTimePicker(true);
  }, [setPickerDateState, setShowDateTimePicker]);

  const handlePickerConfirm = useCallback(() => {
    setType(typePickerItems[typeIndex].label);
    setShowTypePicker(false);
  }, [typeIndex, setType, setShowTypePicker]);

  const onRequest = useCallback(async () => {
    const validation = validateFields(type, endDate, startDate);
    if (!validation.isValid) {
      Alert.alert("Changes required", validation.errorMessage);
      return;
    }

    setLoading(true);

    const additionalCyclingFitnessActivities = new Map<FitKitType, string[]>([
      [FitKitType.Cycling, getAdditionalCyclingFitnessActivities(features)],
    ]);

    try {
      const response = await queryFitKitByTypesDebug(
        startDate,
        endDate,
        typePickerItems[typeIndex].types,
        allActivitiesSelect,
        additionalCyclingFitnessActivities
      );

      if (response.error) {
        Alert.alert("Something went wrong");
      } else {
        Alert.alert("Success");
      }
    } catch (error) {
      Alert.alert("Something went wrong!!!");
    }

    setLoading(false);
  }, [setLoading, queryFitKitByTypesDebug, startDate, endDate, typeIndex, type, allActivitiesSelect]);

  const pickers = useMemo(
    () => [
      {
        id: "ID",
        items: typePickerItems,
        onIndexChange: onTypePickerIndexChange,
        defaultIndex: typeIndex,
      },
    ],
    [typeIndex, onTypePickerIndexChange]
  );

  const pickerStartDateTime = useMemo(() => (startDate ? moment(startDate).toDate() : moment().toDate()), [startDate]);
  const pickerEndDateTime = useMemo(() => (endDate ? moment(endDate).toDate() : moment().toDate()), [endDate]);
  const pickerDateTime = useMemo(() => (pickerDateState === "startDate" ? pickerStartDateTime : pickerEndDateTime), [
    pickerDateState,
    pickerStartDateTime,
    pickerEndDateTime,
  ]);
  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GenericHeadingPad />
        <TertiaryButton
          size={"Large"}
          onPress={handlePressStartTime}
          tertiarySubLabel={startDate || displayDateFormat}
          label={"Start Date"}
          wrapperStyle={styles.startDateWrapper}
        />
        <TertiaryButton
          size={"Large"}
          onPress={handlePressEndTime}
          label={"End Date"}
          tertiarySubLabel={endDate || displayDateFormat}
          wrapperStyle={styles.endDateWrapper}
        />
        <TertiaryButton
          size={"Large"}
          onPress={handlePressType}
          label={"Type"}
          tertiarySubLabel={type || "Select type"}
          wrapperStyle={styles.typeWrapper}
        />
        {Platform.OS === "ios" ? null : (
          <View style={styles.checkBoxWrapper}>
            <CheckBox
              checked={allActivitiesSelect}
              value={"All activities"}
              label={"All activities"}
              onChange={onCheckBoxPress}
            >
              <View style={styles.checkBoxChildWrapper}>
                <TextTemplate type="b1b">{"All activities"}</TextTemplate>
              </View>
            </CheckBox>
          </View>
        )}

        <Button size="Large" onPress={onRequest} label={"Request"} isLoading={loading} />

        <DateTimePicker
          date={pickerDateTime}
          mode="datetime"
          display="spinner"
          isVisible={showDateTimePicker}
          onConfirm={onConfirm}
          onCancel={onCancel}
          minimumDate={moment().subtract(2, "year").toDate()}
          maximumDate={moment().toDate()}
          isDarkModeEnabled={false}
          textColor={Colours.neutral.n900}
        />
      </ScrollView>
      <GenericHeadingAbsolute heading={"Tools"} onRightIconPress={onClose} />

      {!showTypePicker ? null : (
        <ScrollPickerModal
          pickers={pickers}
          onConfirm={handlePickerConfirm}
          onCancel={handlePickerCancel}
          confirmLabel={"Select"}
          cancelLabel={"Cancel"}
        />
      )}
    </View>
  );
};

export default memo(ToolsScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  startDateWrapper: {
    marginBottom: Style.adjust(16),
    marginTop: Style.adjust(20),
  },
  endDateWrapper: {
    marginBottom: Style.adjust(16),
  },
  checkBoxWrapper: {
    marginLeft: Style.adjust(37),
    marginBottom: Style.adjust(16),
  },
  typeWrapper: {
    marginBottom: Style.adjust(16),
  },
  checkBoxChildWrapper: {
    paddingLeft: Style.adjust(16),
  },
});

const validateFields = (type: string, endDate: string, startDate: string) => {
  if (!type || !endDate || !startDate) {
    return { isValid: false, errorMessage: "Type, start or end date not selected" };
  }

  if (moment(endDate).diff(startDate, "days") > 5) {
    return { isValid: false, errorMessage: "Start and end date range exceeds 5 days" };
  }

  if (moment(endDate).isBefore(startDate)) {
    return { isValid: false, errorMessage: "Start date should be before end date" };
  }

  if (moment(endDate).isSame(startDate)) {
    return { isValid: false, errorMessage: "Start date cannot be same as end date" };
  }

  return { isValid: true, errorMessage: "" };
};

const typePickerItemsIOS = [
  {
    label: "Steps",
    value: "Steps",
    types: [FitKitType.StepCount],
  },
  {
    label: "Biking",
    value: "Biking",
    types: Platform.select({
      ios: [FitKitType.Cycling, FitKitType.BikingWorkout, FitKitType.BikingHandWorkout],
      android: [FitKitType.Cycling],
    }),
  },
  {
    label: "Workout",
    value: "Workout",
    types: [FitKitType.Flexibility, FitKitType.HIIT, FitKitType.Strength, FitKitType.Yoga, FitKitType.Pilates],
  },
  {
    label: "Mindful Session",
    value: "Mindful Session",
    types: [FitKitType.MindfulSession],
  },
];

const typePickerItemsAndroid = [
  ...typePickerItemsIOS,
  {
    label: "Distance",
    value: "Distance",
    types: [FitKitType.Distance],
  },
];

const typePickerItems = Platform.select({ ios: typePickerItemsIOS, android: typePickerItemsAndroid });
