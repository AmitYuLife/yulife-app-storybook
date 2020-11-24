import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Colours, Style } from "@styles";
import { Text, BorderedPlus, Bin } from "@atoms";
import { PressableWithDelay } from "@components/molecules";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { Cover } from "@components/containers/products/fib/fib.types";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { addCommasToNumber, truncate } from "@services/utils";

type Props = typeof mapDispatchToProps & {
  existingCovers: Cover[];
  onAddCover: () => void;
};

function removeByIndex<T>(arr: T[], index: number) {
  const slice = arr.slice();
  slice.splice(index, 1);
  return slice;
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
        ctaLabel: "Remove",
        onPressSecondary: () => Navigation.dismissModal(MODALS.generic),
        ctaLabelSecondary: "Don't Remove",
      },
    },
  });
}

function _FinancialQuestionsCoverList(props: Props) {
  const { updateExistingCovers, onAddCover, existingCovers } = props;

  return (
    <View style={styles.wrapper}>
      {(existingCovers || []).map((cover, index) => {
        const covers = removeByIndex(props.existingCovers, index);

        function removeItem() {
          updateExistingCovers(covers);
        }

        return (
          <View style={styles.coverCardWrapper} key={cover.coverName}>
            <View style={styles.coverCardTextWrapper}>
              <Text style={StyleSheet.flatten([styles.coverCardText, styles.bold])}>
                {truncate(cover.coverName, 20)}
              </Text>
              <Text style={styles.coverCardText}>{truncate(cover.companyName, 20)}</Text>
              <Text style={styles.coverCardText}>{`£${addCommasToNumber(cover.coverAmount)}`}</Text>
            </View>
            <PressableWithDelay style={styles.bin} hitSlop={{ left: 10 }} onPress={() => openModal(removeItem)}>
              <Bin />
            </PressableWithDelay>
          </View>
        );
      })}
      <PressableWithDelay onPress={onAddCover}>
        <View style={styles.addCoverWrapper}>
          <BorderedPlus />
          <Text style={styles.addCoverText}>Add cover</Text>
        </View>
      </PressableWithDelay>
    </View>
  );
}

const mapDispatchToProps = {
  updateExistingCovers: (value: Cover[]) => updateFIBAnswerValue({ key: "existingCovers", value }),
};

export const FinancialQuestionsCoverList = connect(null, mapDispatchToProps)(_FinancialQuestionsCoverList);

const HEIGHT = Style.adjust(112);

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
  },
  coverCardWrapper: {
    backgroundColor: Colours.lightestGray,
    marginVertical: Style.adjust(16),
    height: HEIGHT,
    borderColor: Colours.lightGray,
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(20),
  },
  coverCardTextWrapper: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
  },
  coverCardText: { fontSize: Style.adjust(20) },
  bold: { fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD },
  bin: { justifyContent: "center", height: "100%" },
  addCoverWrapper: {
    backgroundColor: Colours.lightestGray,
    height: HEIGHT,
    borderColor: Colours.lightGray,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginVertical: Style.adjust(16),
    borderRadius: 8,
    borderStyle: "dashed",
  },
  addCoverText: {
    color: "#D9D9D7",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    marginTop: Style.adjust(8),
    fontSize: Style.adjust(18),
    letterSpacing: 0.8,
  },
});
