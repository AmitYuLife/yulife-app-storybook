import React, { memo, useState, useCallback } from "react";
import { FibLocalNavigation, FIB_FEEDBACK_FORM } from "../fib.types";
import { connect, useDispatch } from "react-redux";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { FibGPConsentScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-details.screen";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { FibGPPracticeSearchScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-practice-search";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import { GQL_GET_MEDICAL_PRACTICES, GQL_MUTATION_UPDATE_CUSTOMER_GP_DETAILS } from "@graphql/products/products.gql";
import { FibGPPracticesResultsScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-practices-results";
import {
  MedicalPractices,
  MedicalPracticesVariables,
  MedicalPractices_getMedicalPractices,
  MedicalPractices_getMedicalPractices_practicioners,
} from "@graphql/_core/schema/MedicalPractices";
import { FibGPConfirmScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-confirm.screen";
import {
  FibGPManuallyInputScreen,
  GPInputForm,
} from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-manually-input.screen";
import {
  UpdateCustomerGPDetails,
  UpdateCustomerGPDetailsVariables,
} from "../../../../../graphql/_core/schema/UpdateCustomerGPDetails";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getFIBState } from "../../../../../redux/product/product.selectors";

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

const FibGPDetailsContainer = memo(function (props: IFibGPDetailsContainerProps & ReturnType<typeof mapStateToProps>) {
  const { navigation, fibAnswers } = props;
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

  // TODO: Handle errors
  const [updateCustomerGPDetailsMutation, { loading: updateCustomerGpLoading }] = useMutation<
    UpdateCustomerGPDetails,
    UpdateCustomerGPDetailsVariables
  >(GQL_MUTATION_UPDATE_CUSTOMER_GP_DETAILS);

  const dispatch = useDispatch();

  const backHandler = useCallback(() => {
    navigation.pop();
    return true;
  }, [navigation]);

  useBackHandler(backHandler);

  const onContinueConsentScreen = useCallback(() => {
    setGPView("medical_practice_search");
    dispatch(updateFIBAnswerValue({ key: "medicalConsent", value: true }));
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

  const onConfirm = useCallback(async () => {
    const address3 =
      selectedMedicalPractice.address4 && selectedMedicalPractice.address5 && selectedMedicalPractice.address3
        ? `\n\n${selectedMedicalPractice.address3}`
        : "";

    const practiceTown =
      selectedMedicalPractice.address4 && selectedMedicalPractice.address5
        ? `${selectedMedicalPractice.address4 ?? ""}\n\n${selectedMedicalPractice.address5 ?? ""}`
        : selectedMedicalPractice.address3;
    const gpDetails = manualInput
      ? manualInput
      : {
          practiceName: selectedMedicalPractice.name,
          practiceAddress: `${selectedMedicalPractice.address1 ?? ""}\n\n${
            selectedMedicalPractice.address2 ?? ""
          }${address3}`,
          practiceTown: practiceTown,
          practicePostCode: selectedMedicalPractice.postCode,
          gpName: selectedGP.name,
        };
    await updateCustomerGPDetailsMutation({
      variables: {
        gpDetails,
        options: {
          requestMSSTests: true,
          medicalConsent: fibAnswers.medicalConsent,
          previewMedicalTests: fibAnswers.previewMedicalTests,
        },
      },
    });
    // TODO: Redirect to confirmation declaration
    navigation.push(FIB_FEEDBACK_FORM);
  }, [manualInput, selectedGP, selectedMedicalPractice, updateCustomerGPDetailsMutation, navigation, fibAnswers]);

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
          loading={updateCustomerGpLoading}
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

const mapStateToProps = (state: IReduxState) => ({
  fibAnswers: getFIBState(state).answers,
});

export default connect<ReturnType<typeof mapStateToProps>>(mapStateToProps)(FibGPDetailsContainer);
