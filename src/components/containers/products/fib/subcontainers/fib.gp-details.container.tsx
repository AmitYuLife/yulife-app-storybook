import React, { memo, useState, useCallback } from "react";
import { FibLocalNavigation } from "../fib.types";
import { connect, useDispatch } from "react-redux";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { FibGPConsentScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-details.consent";
import { updateFIBAnswerValue, updateFIBValue } from "@redux/product/product.actions";
import { FibGPPracticeSearchScreen } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-search.screen";
import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_UPDATE_CUSTOMER_GP_DETAILS } from "@graphql/products";
import {
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
} from "@graphql/_core/schema/UpdateCustomerGPDetails";
import { IReduxState } from "@redux/_core/reducers";
import { getFIBState } from "@redux/product/product.selectors";
import { MODALS } from "@navigation/constants";
import { FibGPDoctorSelect } from "@screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-doctor.screen";
import { ISearchItem } from "@atoms/search/search-item";
import GPIntro from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp-intro";
import { useBackHandler } from "@services/hooks/useBackHandler";
interface IFibGPDetailsContainerProps {
  navigation: FibLocalNavigation;
}

type GPView =
  | "intro"
  | "consent"
  | "medical_practice_search"
  | "medical_select_gp"
  | "medical_manually_input"
  | "medical_confirm";

const FibGPDetailsContainer = memo(function (props: IFibGPDetailsContainerProps & ReturnType<typeof mapStateToProps>) {
  const { navigation, fibAnswers, savedGpDetails } = props;
  const dispatch = useDispatch();

  const initialGPView = navigation.currentRoute.passProps?.initialGPView || "consent";
  const [gpView, setGPView] = useState<GPView>(initialGPView);
  const [selectedMedicalPractice, setSelectedMedicalPractice] = useState<
    ISearchItem<MedicalPractices_getMedicalPractices>
  >(null);
  const [selectedGP, setSelectedGP] = useState<ISearchItem<MedicalPractices_getMedicalPractices_practicioners>>(null);
  const [manualInput, setManualInput] = useState<GPInputForm>(savedGpDetails);
  const [name, setName] = useState<string>(null);

  const [updateCustomerGPDetailsMutation, { loading: updateCustomerGpLoading }] = useMutation<
    UpdateCustomerGPDetails,
    UpdateCustomerGPDetailsVariables
  >(GQL_MUTATION_UPDATE_CUSTOMER_GP_DETAILS);

  const setView = useCallback(
    (view: GPView) => {
      setGPView(view);
      navigation.currentRoute.passProps.initialGPView = view;
    },
    [setGPView, navigation]
  );

  useBackHandler(() => {
    handleBack();
    return true;
  });

  const onContinueConsentScreen = useCallback(() => {
    setView("medical_practice_search");
    dispatch(updateFIBAnswerValue({ key: "medicalConsent", value: true }));
  }, [dispatch, setView]);

  const onContinueIntroScreen = useCallback(() => {
    setView("consent");
  }, [setView]);

  const onSelectMedicalPractice = useCallback(
    (practice: ISearchItem<MedicalPractices_getMedicalPractices>) => {
      setSelectedMedicalPractice(practice);
      setManualInput(null);
      setView("medical_select_gp");
    },
    [setView]
  );

  const onSelectGP = useCallback(
    (gp: ISearchItem<MedicalPractices_getMedicalPractices_practicioners>) => {
      setSelectedGP(gp);
      setManualInput(null);
      setView("medical_confirm");
    },
    [setView]
  );

  const onManualInputContinue = useCallback(
    (form: GPInputForm) => {
      setManualInput(form);
      setView("medical_confirm");
    },
    [setView]
  );

  const onConfirm = useCallback(async () => {
    let gpDetails: GPInputForm;
    if (manualInput) {
      gpDetails = manualInput;
    } else {
      const address3 =
        selectedMedicalPractice.address4 && selectedMedicalPractice.address5 && selectedMedicalPractice.address3
          ? `\n${selectedMedicalPractice.address3}`
          : "";

      const practiceTown =
        selectedMedicalPractice.address4 || selectedMedicalPractice.address5
          ? `${selectedMedicalPractice.address4 ?? ""}\n${selectedMedicalPractice.address5 ?? ""}`
          : selectedMedicalPractice.address3;
      gpDetails = {
        practiceName: selectedMedicalPractice.name,
        practiceAddress: `${selectedMedicalPractice.address1 ?? ""}\n${
          selectedMedicalPractice.address2 ?? ""
        }${address3}`,
        practiceTown: practiceTown,
        practicePostCode: selectedMedicalPractice.postCode,
        gpName: selectedGP.name,
      };
    }

    dispatch(updateFIBValue({ key: "gpDetails", value: gpDetails }));
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

    navigation.pop();
  }, [
    manualInput,
    selectedGP,
    selectedMedicalPractice,
    updateCustomerGPDetailsMutation,
    navigation,
    fibAnswers,
    dispatch,
  ]);

  const handleOnClose = useCallback(async () => {
    await Navigation.showModal({
      component: {
        id: MODALS.generic,
        name: MODALS.generic,
        passProps: {
          onPress: async () => {
            await Navigation.dismissModal(MODALS.generic);
          },
          heading: "Leave Application?",
          subheading: "We’ll save your progress for you.",
          ctaLabel: "Stay",
          ctaLabelSecondary: "Exit",
          onPressSecondary: async () => {
            await Navigation.dismissModal(MODALS.generic);
            await Navigation.popTo(ROUTES.yuScreen);
            return;
          },
        },
      },
    });
  }, []);

  const onManualInput = useCallback(() => {
    if (gpView === "medical_practice_search") {
      setSelectedMedicalPractice(null);
    }

    if (gpView === "medical_select_gp") {
      setSelectedGP(null);
    }

    setView("medical_manually_input");
  }, [gpView, setView]);

  const handleBack = useCallback(() => {
    switch (gpView) {
      case "medical_practice_search":
        return setView("consent");
      case "medical_select_gp":
        setView("medical_practice_search");
        return setSelectedMedicalPractice(null);
      case "medical_confirm":
        if (manualInput) {
          return setView("medical_manually_input");
        }

        return setView("medical_select_gp");
      case "medical_manually_input":
        if (selectedMedicalPractice) {
          return setView("medical_select_gp");
        }

        return setView("medical_practice_search");
      case "consent":
        return setView("intro");
      default:
        return navigation.pop();
    }
  }, [gpView, manualInput, selectedMedicalPractice, navigation, setView]);

  switch (gpView) {
    case "medical_practice_search":
      return (
        <FibGPPracticeSearchScreen
          onNavigateBack={handleBack}
          onSelectMedicalPractice={onSelectMedicalPractice}
          onClose={handleOnClose}
          name={name}
          setName={setName}
          setManualInput={onManualInput}
        />
      );
    case "medical_select_gp":
      return (
        <FibGPDoctorSelect
          selectedPractice={selectedMedicalPractice}
          onNavigateBack={handleBack}
          onSelectGP={onSelectGP}
          onClose={handleOnClose}
          setManualInput={onManualInput}
        />
      );
    case "medical_manually_input":
      return (
        <FibGPManuallyInputScreen
          onNavigateBack={handleBack}
          onClose={handleOnClose}
          selectedPractice={selectedMedicalPractice}
          onContinue={onManualInputContinue}
          previousFormValue={manualInput}
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
      return (
        <FibGPConsentScreen onNavigateBack={handleBack} onContinue={onContinueConsentScreen} onClose={handleOnClose} />
      );
    default:
      return <GPIntro onNavigateBack={handleBack} onContinue={onContinueIntroScreen} onClose={handleOnClose} />;
  }
});

const mapStateToProps = (state: IReduxState) => ({
  fibAnswers: getFIBState(state).answers,
  savedGpDetails: getFIBState(state).gpDetails,
});

export default connect<ReturnType<typeof mapStateToProps>>(mapStateToProps)(FibGPDetailsContainer);
