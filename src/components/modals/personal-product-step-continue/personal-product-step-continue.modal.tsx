import * as React from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { Button, Loading, TextTemplate, LinkButton, Image } from "@atoms";
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
import GenericHeadingAbsolute from "@atoms/generic-heading/generic-heading-absolute";

interface IProps {
  componentId?: string;
  productId: string;
}

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
    await Navigation.push(ROUTES.yuScreen, {
      component: {
        id: ROUTES.productStep,
        name: ROUTES.productStep,
        passProps: {
          productId,
        },
      },
    });
    handleClose();
  }, [handleClose, productId]);

  const handleStartOver = React.useCallback(async () => {
    try {
      await resetStep({ variables: { productId } });
      await handleContinue();
    } catch (e) {
      Logger.error(e, { where: "start-over-modal" });
    }
  }, [resetStep, handleContinue, productId]);

  if (loading && !data?.copy) {
    return (
      <View style={styles.wrapper}>
        <Loading />
      </View>
    );
  }

  const { image, heading, subheading, continueCtaLabel, startOverCtaLabel } = data.copy;

  return (
    <View style={styles.flex}>
      <View style={styles.wrapper}>
        {!image?.uri ? null : (
          <Image width={Style.adjust(320)} height={Style.adjust(320)} source={{ uri: image.uri }} />
        )}
        <View style={styles.text}>
          <TextTemplate type="h2">{heading}</TextTemplate>
        </View>
        <View style={styles.text}>
          <TextTemplate type="b2">{subheading}</TextTemplate>
        </View>
        <Button wrapperStyle={styles.buttonWrapper} label={continueCtaLabel} onPress={handleContinue} />
        <LinkButton wrapperStyle={styles.buttonWrapperSecondary} label={startOverCtaLabel} onPress={handleStartOver} />
      </View>
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
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});
