import React, { memo, useState, useCallback } from "react";
import { Alert, Keyboard, ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";
import { Button, TextInput } from "@components/molecules";
import { useMutation } from "@apollo/client";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { t } from "@locale";

import { GQL_MUTATION_SEND_WELLBEING_HUB_ITEM_DOCUMENTS } from "@graphql/wellbeingHub";
import { showFloatingModal } from "../floating-modals/showFloatingModal";
import { validateEmail } from "@utils/email";

export const sendDocumentsModalConfig = {
  modalId: MODALS.blurredOverlay,
  showCloseButton: false,
  paddingTop: Style.adjust(42),
  height: Style.adjust(360),
};

interface IProps {
  itemId: string;
}

const SendDocumentsModal = ({ itemId }: IProps) => {
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const [sendWellbeingHubItemDocuments] = useMutation(GQL_MUTATION_SEND_WELLBEING_HUB_ITEM_DOCUMENTS);

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    Keyboard.dismiss();
    const hasEmailError = validateEmail(email);

    try {
      if (hasEmailError) {
        setEmailError(hasEmailError);
        return;
      }

      await sendWellbeingHubItemDocuments({
        variables: { itemId: itemId, email },
      });

      Alert.alert(t("screens.wellbeing_hub.send_documents.success"));
      Navigation.dismissOverlay(sendDocumentsModalConfig.modalId);
    } catch (e) {
      Alert.alert(t("screens.wellbeing_hub.send_documents.error"));
    } finally {
      setLoading(false);
    }
  }, [email, itemId, sendWellbeingHubItemDocuments]);

  const onEmailChange = useCallback((input: string) => {
    setEmail(input);
    setEmailError("");
  }, []);

  return (
    <ScrollView style={styles.keyboardWrapper} keyboardShouldPersistTaps="handled">
      <View style={styles.contentWrapper}>
        <View style={styles.title} accessibilityLabel={t("screens.wellbeing_hub.send_documents.title")}>
          <TextTemplate type={"h2"}>{t("screens.wellbeing_hub.send_documents.title")}</TextTemplate>
        </View>
        <TextTemplate
          type="b2"
          textAlign="left"
          accessibilityLabel={t("screens.wellbeing_hub.send_documents.description")}
        >
          {t("screens.wellbeing_hub.send_documents.description")}
        </TextTemplate>
        <View style={styles.emailContainer}>
          <TextInput
            onSubmitEditing={handleSubmit}
            style={styles.emailInput}
            type={TextInput.Types.EMAIL}
            placeholder={t("screens.wellbeing_hub.send_documents.input_placeholder")}
            onChange={onEmailChange}
            value={email}
            errorMessage={emailError}
            hasError={!!emailError}
          />
        </View>
        <Button
          isLoading={loading}
          size="Fill"
          onPress={handleSubmit}
          label={t("screens.wellbeing_hub.send_documents.send_button")}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    paddingHorizontal: Style.adjust(38),
  },
  keyboardWrapper: {
    flex: 1,
  } as ViewStyle,
  title: {
    marginBottom: Style.adjust(25),
  },
  emailContainer: {
    paddingLeft: Style.adjust(8),
    paddingRight: Style.adjust(8),
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(24),
    width: "100%",
  },
  emailInput: {
    width: "100%",
    paddingLeft: 0,
    paddingRight: 0,
  },
});

export default memo(SendDocumentsModal);

export const showSendDocumentsModal = async (itemId: string) => {
  const children = <SendDocumentsModal itemId={itemId} />;
  await showFloatingModal({ children, ...sendDocumentsModalConfig });
};
