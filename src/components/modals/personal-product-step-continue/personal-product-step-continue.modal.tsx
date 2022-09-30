import * as React from "react";
import { ScrollView, StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Loading, TextTemplate, Image, Pad } from "@atoms";
import { Button, LinkButton } from "@molecules";
import { Style } from "@styles";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_CONTINUE_MODAL,
  GQL_MUTATION_RESET_PERSONAL_PRODUCT_STEP,
} from "@graphql/personalProduct";
import {
  GetPersonalProductStepContinueModal as GqlModal,
  GetPersonalProductStepContinueModalVariables as GqlModalVars,
  ResetPersonalProductStep,
  ResetPersonalProductStepVariables,
} from "@graphql/_core/schema";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { GenericHeadingAbsolute, TOP_BAR_HEIGHT } from "@organisms";

interface IProps {
  componentId?: string;
  productId: string;
}

const IMAGE_SIZE = Style.adjust(Style.isAnyIphoneX() || Style.isTallAndroid() ? 320 : 240);

export default function PersonalProductStepContinueModal({ productId, componentId }: IProps) {
  const { data, loading } = useQuery<GqlModal, GqlModalVars>(GQL_QUERY_GET_PERSONAL_PRODUCT_STEP_CONTINUE_MODAL, {
    variables: { productId },
    fetchPolicy: "no-cache",
  });
  const [resetStep] = useMutation<ResetPersonalProductStep, ResetPersonalProductStepVariables>(
    GQL_MUTATION_RESET_PERSONAL_PRODUCT_STEP
  );

  const handleClose = React.useCallback(() => Navigation.dismissModal(componentId), [componentId]);

  const handleContinue = React.useCallback(async () => {
    handleClose();
    await Navigation.push(ROUTES.yuScreen, {
      component: {
        id: ROUTES.productStep,
        name: ROUTES.productStep,
        passProps: {
          productId,
        },
      },
    });
  }, [handleClose, productId]);

  const handleStartOver = React.useCallback(async () => {
    try {
      await resetStep({ variables: { productId } });
      await handleContinue();
    } catch (e) {
      Logger.error(e, { where: "start-over-modal" });
    }
  }, [resetStep, handleContinue, productId]);

  if (loading || !data?.copy) {
    return (
      <View style={[styles.flex, styles.imageWrapper]}>
        <Loading />
      </View>
    );
  }

  const { image, heading, subheading, continueCtaLabel, startOverCtaLabel } = data.copy;

  return (
    <View style={styles.flex}>
      <ScrollView style={styles.flex}>
        <Pad height={TOP_BAR_HEIGHT} />
        {!image?.uri ? null : (
          <View style={styles.imageWrapper}>
            <Image width={IMAGE_SIZE} height={IMAGE_SIZE} source={{ uri: image.uri }} />
          </View>
        )}
        <View style={styles.text}>
          <TextTemplate type="h2" textAlign="center">
            {heading}
          </TextTemplate>
        </View>
        <View style={styles.text}>
          <TextTemplate type="b2" textAlign="center">
            {subheading}
          </TextTemplate>
        </View>
        <Button wrapperStyle={styles.buttonWrapper} label={continueCtaLabel} onPress={handleContinue} />
        <LinkButton wrapperStyle={styles.buttonWrapperSecondary} label={startOverCtaLabel} onPress={handleStartOver} />
      </ScrollView>
      <GenericHeadingAbsolute rightIcon="CLOSE" onRightIconPress={handleClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  buttonWrapper: {
    marginTop: Style.adjust(40),
  } as ViewStyle,
  buttonWrapperSecondary: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
  text: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(24),
    textAlign: "center",
  } as TextStyle,
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
});
