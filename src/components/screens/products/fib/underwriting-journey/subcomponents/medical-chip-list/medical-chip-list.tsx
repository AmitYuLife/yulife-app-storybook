import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import Chip, { ChipProps } from "@atoms/chip/chip";
import { connect, useDispatch } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { updateFIBMedicalHistoryValue, updateFIBAnswerValue } from "@redux/product/product.actions";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface ChipListProps {
  items: ChipProps[];
  columns: 2;
}

function MedicalChipList(props: ChipListProps & ConnectedState) {
  const { items, medicalHistory } = props;
  const dispatch = useDispatch();

  const itemsWithDispatch = items.map((item) => {
    // Set medicalHistory
    medicalHistory[item.id] = medicalHistory[item.id] || false;
    // Add onPress handler
    item.onPress = function () {
      dispatch(
        updateFIBMedicalHistoryValue({
          key: item.id,
          value: !medicalHistory[item.id],
        })
      );
      // Reset previous answers
      if (item.relatedId) {
        item.relatedId.map((id) => {
          dispatch(updateFIBAnswerValue({ key: id, value: "" }));
        });
      } else {
        dispatch(updateFIBAnswerValue({ key: item.id, value: "" }));
      }
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
