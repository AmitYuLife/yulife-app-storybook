import React from "react";
import { View, StyleSheet } from "react-native";
import { Colours, Style } from "@styles";
import { Text, BorderedPlus, Bin } from "@atoms";
import { PressableWithDelay } from "@components/molecules";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { Cover } from "@components/containers/products/fib/fib.types";
import { useDispatch } from "react-redux";
import { updateFIBValue } from "@redux/product/product.actions";

interface Props {
  existingCovers: Cover[];
  onAddCover: () => void;
}

function removeByIndex<T>(arr: T[], index: number) {
  return arr
    .map((cover, i) => {
      if (i === index) {
        return null;
      }

      return cover;
    })
    .filter((x) => x);
}

function openModal(removeItem: () => void) {
  return Navigation.showModal({
    component: {
      id: MODALS.generic,
      name: MODALS.generic,
      passProps: {
        onPress: () => {
          removeItem();
          return Navigation.dismissModal(MODALS.generic);
        },
        heading: "Remove Cover?",
        subheading: "Do you want to remove this cover?",
        ctaLabel: "Remove",
        onPressSecondary: () => Navigation.dismissModal(MODALS.generic),
        ctaLabelSecondary: "Don't Remove",
      },
    },
  });
}

export function FinancialQuestionsCoverList(props: Props) {
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      {props.existingCovers.map((cover, index) => {
        const covers = removeByIndex(props.existingCovers, index);

        function removeItem() {
          const payload = {
            key: "existingCovers",
            value: covers,
          };

          dispatch(updateFIBValue(payload));
        }

        return (
          <View style={styles.coverCardWrapper} key={cover.coverName}>
            <View style={styles.coverCardTextWrapper}>
              <Text style={StyleSheet.flatten([styles.coverCardText, styles.bold])}>{cover.coverName}</Text>
              <Text style={styles.coverCardText}>{cover.companyName}</Text>
              <Text style={styles.coverCardText}>{`£${cover.coverAmount}`}</Text>
            </View>
            <PressableWithDelay style={styles.bin} hitSlop={{ left: 10 }} onPress={() => openModal(removeItem)}>
              <Bin />
            </PressableWithDelay>
          </View>
        );
      })}
      <PressableWithDelay onPress={props.onAddCover}>
        <View style={styles.addCoverWrapper}>
          <BorderedPlus />
          <Text style={styles.addCoverText}>Add cover</Text>
        </View>
      </PressableWithDelay>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginVertical: 16 },
  coverCardWrapper: {
    backgroundColor: Colours.lightestGray,
    marginVertical: 16,
    height: 112,
    borderColor: Colours.lightGray,
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  coverCardTextWrapper: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
  },
  coverCardText: { fontSize: 20 },
  bold: { fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD },
  bin: { justifyContent: "center", height: "100%" },
  addCoverWrapper: {
    backgroundColor: Colours.lightestGray,
    height: 112,
    borderColor: Colours.lightGray,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginVertical: 16,
    borderRadius: 8,
    borderStyle: "dashed",
  },
  addCoverText: {
    color: "#D9D9D7",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    marginTop: 8,
    fontSize: 18,
    letterSpacing: 0.8,
  },
});
