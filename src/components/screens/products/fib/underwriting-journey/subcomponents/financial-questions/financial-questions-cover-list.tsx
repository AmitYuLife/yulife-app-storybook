import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import { Text, BorderedPlus, Bin } from "@atoms";
import { PressableWithDelay } from "@components/molecules";
import { Cover } from "@components/containers/products/fib/fib.types";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { addCommasToNumber, truncate } from "@services/utils";
import { styles, getColorScheme } from "./financial-questions-cover-list.styles";
import { removeByIndex, openModal } from "./financial-questions-cover-list.helpers";
import { getFIBState } from "@redux/product/product.selectors";

type Props = {
  onAddCover: (cover?: Cover) => () => void;
};

export function FinancialQuestionsCoverList(props: Props) {
  const dispatch = useDispatch();
  const existingCovers: Cover[] = useSelector(getFIBState).answers.existingCovers;
  const updateExistingCovers = (value: Cover[]) => dispatch(updateFIBAnswerValue({ key: "existingCovers", value }));

  const { onAddCover } = props;

  return (
    <View style={styles.wrapper}>
      {(existingCovers || []).map((cover, index) => {
        const covers = removeByIndex(existingCovers, index);

        function removeItem() {
          updateExistingCovers(covers);
        }

        const { iconColor, backgroundColor, borderColor } = getColorScheme(cover.coverId);

        return (
          <PressableWithDelay
            style={StyleSheet.flatten([
              styles.coverCardWrapper,
              {
                borderColor,
                backgroundColor,
              },
            ])}
            key={cover.coverName}
            onPress={onAddCover(cover)}
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
          </PressableWithDelay>
        );
      })}
      <PressableWithDelay onPress={onAddCover()}>
        <View style={styles.addCoverWrapper}>
          <BorderedPlus />
          <Text style={styles.addCoverText}>Add cover</Text>
        </View>
      </PressableWithDelay>
    </View>
  );
}
