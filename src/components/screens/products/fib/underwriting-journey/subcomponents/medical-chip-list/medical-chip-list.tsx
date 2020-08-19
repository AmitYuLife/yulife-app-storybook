import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import Chip, { ChipProps } from "@atoms/chip/chip";
import { connect, useDispatch } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBMedicalHistoryValue } from "@redux/product/product.actions";
import {
  FIB_HIGH_CHOLESTEROL_BLOOD_EXTRA_SCREENS,
  FIB_HIGH_CHOLESTEROL_BLOOD_SCREEN_ID,
  FIB_DIGESTIVE_SCREEN_ID,
  FIB_DIGESTIVE_EXTRA_SCREENS,
} from "@components/containers/products/fib/fib.helpers";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface ChipListProps {
  items: ChipProps[];
  columns: 2;
}

const getAddOrRemoveExtraScreens = (chipId: string, value: boolean): { key: string; value: boolean }[] => {
  if (FIB_HIGH_CHOLESTEROL_BLOOD_SCREEN_ID.includes(chipId)) {
    return FIB_HIGH_CHOLESTEROL_BLOOD_EXTRA_SCREENS.map((screenId) => ({ key: screenId, value }));
  }

  if (chipId === FIB_DIGESTIVE_SCREEN_ID) {
    return FIB_DIGESTIVE_EXTRA_SCREENS.map((screenId) => ({ key: screenId, value }));
  }

  return [];
};

function MedicalChipList(props: ChipListProps & ConnectedState) {
  const { items, medicalHistory } = props;
  const dispatch = useDispatch();

  const itemsWithDispatch = items.map((item) => {
    // Set medicalHistory
    medicalHistory[item.id] = medicalHistory[item.id] || false;
    const addOrRemoveExtraScreens = getAddOrRemoveExtraScreens(item.id, medicalHistory[item.id]);
    // Add onPress handler
    item.onPress = function () {
      if (addOrRemoveExtraScreens.length) {
        addOrRemoveExtraScreens.forEach((extraScreen) => {
          dispatch(updateFIBMedicalHistoryValue(extraScreen));
        });
      }

      dispatch(
        updateFIBMedicalHistoryValue({
          key: item.id,
          value: !medicalHistory[item.id],
        })
      );
    };

    item.active = medicalHistory[item.id];
    return item;
  });

  return (
    <View style={styles.wrapper}>
      {itemsWithDispatch.map((item, i) => {
        return (
          <View style={styles.chipLayout} key={item.id + i}>
            <Chip
              id={item.id}
              active={item.active}
              iconType={item.iconType}
              icon={item.icon}
              onPress={item.onPress}
              label={item.label}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  chipLayout: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "45%",
    marginVertical: 12,
    alignItems: "center",
  },
});

const mapStateToProps = (state: IReduxState) => ({
  medicalHistory: getFIBState(state).medicalHistory,
});

export default connect(mapStateToProps)(MedicalChipList);
