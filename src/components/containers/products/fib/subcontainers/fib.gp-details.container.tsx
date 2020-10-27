import React, { memo, useState, useCallback } from "react";
import { FibLocalNavigation } from "../fib.types";
import { useDispatch } from "react-redux";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { FibGPConsentScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-details.screen";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { FibGPPracticeSearchScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-practice-search";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { useLazyQuery } from "@apollo/react-hooks";
import { GQL_GET_MEDICAL_PRACTICES } from "@graphql/products/products.gql";
import { FibGPPracticesResultsScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-practices-results";
import {
  MedicalPractices,
  MedicalPracticesVariables,
  MedicalPractices_getMedicalPractices,
  MedicalPractices_getMedicalPractices_practicioners,
} from "@graphql/_core/schema/MedicalPractices";
import { FibGPConfirmScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-confirm.screen";
import { Alert } from "react-native";
import {
  FibGPManuallyInputScreen,
  GPInputForm,
} from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-manually-input.screen";

interface IFibGPDetailsContainerProps {
  navigation: FibLocalNavigation;
}

type GPView =
  | "consent"
  | "medical_practice_search"
  | "medical_select_practice"
  | "medical_select_gp"
  | "medical_manually_input"
  | "medical_confirm";

const FibGPDetailsContainer = memo(function (props: IFibGPDetailsContainerProps) {
  const { navigation } = props;
  const [gpView, setGPView] = useState<GPView>("consent");
  const [gpMedicalPracticeName, setGPMedicalPracticeName] = useState<string>("");
  const [searchGP, setSearchGP] = useState<boolean>(false);
  const [getMedicalPractices, { loading, data, error }] = useLazyQuery<MedicalPractices, MedicalPracticesVariables>(
    GQL_GET_MEDICAL_PRACTICES,
    { fetchPolicy: "network-only" }
  );
  const [medicalPractices, setMedicalPractices] = useState<MedicalPractices_getMedicalPractices[]>(null);
  const [selectedMedicalPractice, setSelectedMedicalPractice] = useState<MedicalPractices_getMedicalPractices>(null);
  const [selectedGP, setSelectedGP] = useState<MedicalPractices_getMedicalPractices_practicioners>(null);
  const [manualInput, setManualInput] = useState<GPInputForm>(null);

  const dispatch = useDispatch();

  const backHandler = useCallback(() => {
    navigation.pop();
    return true;
  }, [navigation]);

  useBackHandler(backHandler);

  const onContinueConsentScreen = useCallback(() => {
    setGPView("medical_practice_search");
    dispatch(updateFIBAnswerValue({ key: "medical_consent", value: true }));
  }, [dispatch]);

  const onContinueMedicalPracticeSearch = useCallback(() => {
    getMedicalPractices({ variables: { name: gpMedicalPracticeName } });
  }, [getMedicalPractices, gpMedicalPracticeName]);

  const onSelectMedicalPractice = useCallback((practice: MedicalPractices_getMedicalPractices) => {
    setSelectedMedicalPractice(practice);
    setManualInput(null);
    setGPView("medical_select_gp");
  }, []);

  const onSelectGP = useCallback((gp: MedicalPractices_getMedicalPractices_practicioners) => {
    setSelectedGP(gp);
    setManualInput(null);
    setGPView("medical_confirm");
  }, []);

  const onTryAgain = useCallback(() => {
    setMedicalPractices(null);
    setGPView("medical_practice_search");
  }, []);

  const onManualInputContinue = useCallback((form: GPInputForm) => {
    setManualInput(form);
    setGPView("medical_confirm");
  }, []);

  const onEnterManually = useCallback(() => {
    setGPView("medical_manually_input");
  }, []);

  const onConfirm = useCallback(() => {
    Alert.alert("All right!");
  }, []);

  const handleOnClose = useCallback(async () => {
    await Navigation.popTo(ROUTES.yuScreen);
  }, []);

  const handleBack = useCallback(() => {
    switch (gpView) {
      case "medical_select_practice":
        setMedicalPractices(null);
        setGPView("medical_practice_search");
        break;
      case "medical_practice_search":
        setGPView("consent");
        break;
      case "medical_select_gp":
        setSelectedMedicalPractice(null);
        break;
      case "medical_confirm":
        if (manualInput) {
          setGPView("medical_manually_input");
        } else {
          setGPView("medical_select_gp");
        }

        break;
      case "medical_manually_input":
        if (selectedMedicalPractice) {
          setGPView("medical_select_gp");
        } else {
          setGPView("medical_select_practice");
        }

        break;
      case "consent":
      default:
        return navigation.pop();
    }
  }, [gpView, manualInput, selectedMedicalPractice, navigation]);

  if (loading && !searchGP) {
    setSearchGP(true);
  }

  if (searchGP) {
    if (data?.getMedicalPractices && gpView === "medical_practice_search") {
      setMedicalPractices(data.getMedicalPractices);
      setSearchGP(false);
    }

    if (error) {
      setGPView("medical_select_practice");
      setSearchGP(false);
    }
  }

  if (
    !searchGP &&
    medicalPractices &&
    !selectedMedicalPractice &&
    !["medical_select_practice", "medical_manually_input", "medical_confirm"].includes(gpView)
  ) {
    setGPView("medical_select_practice");
  }

  switch (gpView) {
    case "medical_practice_search":
      return (
        <FibGPPracticeSearchScreen
          onNavigateBack={handleBack}
          onContinue={onContinueMedicalPracticeSearch}
          onClose={handleOnClose}
          practiceName={gpMedicalPracticeName}
          setPracticeName={setGPMedicalPracticeName}
          loading={loading}
        />
      );
    case "medical_select_practice":
      return (
        <FibGPPracticesResultsScreen
          onNavigateBack={handleBack}
          onClose={handleOnClose}
          loading={loading}
          data={medicalPractices}
          onPress={onSelectMedicalPractice}
          resultType={"practice"}
          onTryAgain={onTryAgain}
          onEnterManually={onEnterManually}
        />
      );
    case "medical_select_gp":
      return (
        <FibGPPracticesResultsScreen
          onNavigateBack={handleBack}
          onClose={handleOnClose}
          loading={loading}
          data={selectedMedicalPractice?.practicioners}
          onPress={onSelectGP}
          resultType={"GP"}
          selectedPractice={selectedMedicalPractice}
          onEnterManually={onEnterManually}
        />
      );
    case "medical_manually_input":
      return (
        <FibGPManuallyInputScreen
          onNavigateBack={handleBack}
          onClose={handleOnClose}
          selectedPractice={selectedMedicalPractice}
          onContinue={onManualInputContinue}
        />
      );
    case "medical_confirm":
      return (
        <FibGPConfirmScreen
          onNavigateBack={handleBack}
          onContinue={onConfirm}
          onClose={handleOnClose}
          gp={selectedGP}
          practice={selectedMedicalPractice}
          manualInput={manualInput}
        />
      );
    case "consent":
    default:
      return (
        <FibGPConsentScreen onNavigateBack={handleBack} onContinue={onContinueConsentScreen} onClose={handleOnClose} />
      );
  }
});

export default FibGPDetailsContainer;
