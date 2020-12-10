import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Text, BorderedPlus, Bin } from "@atoms";
import { PressableWithDelay } from "@components/molecules";
import { Cover } from "@components/containers/products/fib/fib.types";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { addCommasToNumber, truncate } from "@services/utils";
import { styles, getColorScheme } from "./financial-questions-cover-list.styles";
import { removeByIndex, openModal } from "./financial-questions-cover-list.helpers";

type Props = typeof mapDispatchToProps & {
  existingCovers: Cover[];
  onAddCover: () => void;
};

function _FinancialQuestionsCoverList(props: Props) {
  const { updateExistingCovers, onAddCover, existingCovers } = props;

  return (
    <View style={styles.wrapper}>
      {(existingCovers || []).map((cover, index) => {
        const covers = removeByIndex(props.existingCovers, index);

        function removeItem() {
          updateExistingCovers(covers);
        }

        const { iconColor, backgroundColor, borderColor } = getColorScheme(index);

        return (
          <View
            style={StyleSheet.flatten([
              styles.coverCardWrapper,
              {
                borderColor,
                backgroundColor,
              },
            ])}
            key={cover.coverName}
          >
            <View style={styles.coverCardTextWrapper}>
              <Text style={StyleSheet.flatten([styles.coverCardText, styles.bold])}>
                {truncate(cover.coverName, 20)}
              </Text>
              <Text style={styles.coverCardText}>{truncate(cover.companyName, 20)}</Text>
              <Text style={styles.coverCardText}>{`£${addCommasToNumber(cover.coverAmount)}`}</Text>
            </View>
            <PressableWithDelay style={styles.bin} hitSlop={{ left: 10 }} onPress={() => openModal(removeItem)}>
              <Bin color={iconColor} />
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
