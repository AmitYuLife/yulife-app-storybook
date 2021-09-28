import React, { memo } from "react";
import { ContentItemPackageCardPower as GqlPower } from "@graphql/_core/schema";
import { PackageCardPerks } from "@components/molecules";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";

type Props = GqlPower;

export const ContentItemPackageCardPower = memo((props: Props) => {
  const packageCardProps = {
    ...props,
    title: props.powerTitle,
  };

  return (
    <View style={styles.wrapper}>
      <PackageCardPerks key={props.id} {...packageCardProps} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(24),
  },
});
