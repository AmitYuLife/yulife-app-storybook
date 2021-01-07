import React, { memo, useState, useCallback } from "react";
import { FibLocalNavigation, FIB_GP_DETAILS } from "../fib.types";
import { FibContactDetailsScreen } from "@components/screens/products/fib/underwriting-journey/fib.contact-details.screen";
import { FibConfirmScreen } from "../../../../screens/products/fib/underwriting-journey/fib.confirm-email.screen";
import { connect } from "react-redux";
import { updateFIBAnswerValue } from "../../../../../redux/product/product.actions";
import { FibFindAddressScreen } from "@components/screens/products/fib/underwriting-journey/fib.find-adress.screen";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_ADDRESS_BY_POSTCODE } from "../../../../../graphql/yuscreen/getAdress.gql";
import { Address_findUserAddress } from "../../../../../graphql/_core/schema/Address";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getContactDetails, getFIBState } from "../../../../../redux/product/product.selectors";
import { ContactDetails } from "@redux/product/product.types";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "../../../../../navigation/constants";
import { formatPostCode } from "../../../../screens/products/fib/underwriting-journey/fib.find-adress.screen";
import { GQL_MUTATION_UPDATE_CUSTOMER_CONTACT_DETAILS } from "../../../../../graphql/products";
import {
  UpdateContactDetails,
  UpdateContactDetailsVariables,
} from "../../../../../graphql/_core/schema/UpdateContactDetails";

type ConnectedDispatch = typeof mapDispatchToProps;
type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IContactDetailsContainer {
  navigation: FibLocalNavigation;
}

type Props = IContactDetailsContainer & ConnectedDispatch & ConnectedState;

type ScreenId = "ContactDetails" | "FindAddress" | "ConfirmEmailAddress";

const FibContactDetailsContainer = memo(function (props: Props) {
  const { updateFibAnswer, updateContactDetails, contactDetailsFromStore, navigation, firstName, lastName } = props;
  const initialScreenId = navigation.currentRoute.passProps?.initialScreenId || "ContactDetails";
  const [screenId, setScreenId] = useState<ScreenId>(initialScreenId);
  const [contactDetails, setContactDetails] = useState<ContactDetails>(
    contactDetailsFromStore || {
      firstAddressLine: "",
      secondAddressLine: "",
      townOrCity: "",
      postCode: "",
      personalEmail: "",
      phoneNumber: "",
    }
  );
  const [postCode, setPostCode] = useState("");

  const setScreen = (_screenId: ScreenId) => {
    setScreenId(_screenId);
    navigation.currentRoute.passProps = {
      ...navigation.currentRoute.passProps,
      initialScreenId: _screenId,
    };
  };

  const { loading, data, error } = useQuery(GQL_QUERY_GET_ADDRESS_BY_POSTCODE, {
    variables: { postcode: postCode },
    fetchPolicy: "network-only",
  });

  // TODO: Handle error
  const [updateContactDetailsMutation] = useMutation<UpdateContactDetails, UpdateContactDetailsVariables>(
    GQL_MUTATION_UPDATE_CUSTOMER_CONTACT_DETAILS
  );

  const onContactDetailsChange = (key: keyof ContactDetails, value: string) => {
    setContactDetails((state) => ({ ...state, [key]: value }));
  };

  const onContinuePress = () => {
    updateContactDetails(contactDetails);
    setScreen("ConfirmEmailAddress");
  };

  const onFirstButton = async () => {
    updateFibAnswer("use_personal_email", "No");
    await updateContactDetailsMutation({
      variables: {
        contactDetails: {
          phone: contactDetails.phoneNumber,
          addressFirstLine: contactDetails.firstAddressLine,
          addressSecondLine: contactDetails.secondAddressLine,
          addressCity: contactDetails.townOrCity,
          addressPostCode: contactDetails.postCode,
          email: contactDetails.personalEmail,
          personalEmailConsent: false,
          firstName,
          lastName,
        },
      },
    });
    navigation.push(FIB_GP_DETAILS);
  };

  const onSecondButton = async () => {
    updateFibAnswer("use_personal_email", "Yes");
    await updateContactDetailsMutation({
      variables: {
        contactDetails: {
          phone: contactDetails.phoneNumber,
          addressFirstLine: contactDetails.firstAddressLine,
          addressSecondLine: contactDetails.secondAddressLine,
          addressCity: contactDetails.townOrCity,
          addressPostCode: contactDetails.postCode,
          email: contactDetails.personalEmail,
          personalEmailConsent: true,
          firstName,
          lastName,
        },
      },
    });
    navigation.push(FIB_GP_DETAILS);
  };

  const onAddressSelected = (address: Address_findUserAddress) => {
    setContactDetails((state) => ({
      ...state,
      firstAddressLine: address.addressFirstLine,
      secondAddressLine: address.addressSecondLine,
      townOrCity: address.addressCity,
      postCode: formatPostCode(address.addressPostCode),
    }));
    setScreen("ContactDetails");
  };

  const onClose = useCallback(async () => {
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
            updateContactDetails(contactDetails);
            await Navigation.dismissModal(MODALS.generic);
            try {
              await Navigation.popTo(ROUTES.yuScreen);
            } catch (e) {
              // We arrived to this screen without passing through yuScreen
              // This should never happen but because our current way of testing
              // we need this try/catch block
              // TODO: Remote this
              await Navigation.popTo(ROUTES.debug);
            }

            return;
          },
        },
      },
    });
  }, [contactDetails, updateContactDetails]);

  switch (screenId) {
    case "ContactDetails":
      return (
        <FibContactDetailsScreen
          onContinue={onContinuePress}
          onContactDetailsChange={onContactDetailsChange}
          contactDetails={contactDetails}
          onFindAdress={() => setScreen("FindAddress")}
          onClose={onClose}
          pop={navigation.pop}
        />
      );
    case "ConfirmEmailAddress":
      return (
        <FibConfirmScreen
          firstButtonAction={onFirstButton}
          secondButtonAction={onSecondButton}
          email={contactDetails.personalEmail}
          onBackButtonPress={() => setScreen("ContactDetails")}
          onClose={onClose}
        />
      );
    case "FindAddress":
      return (
        <FibFindAddressScreen
          onAddressSelected={onAddressSelected}
          onBackButtonPress={() => setScreen("ContactDetails")}
          data={data && !error ? data.findUserAddress : []}
          onPostCodeAdded={setPostCode}
          loading={loading}
          onClose={onClose}
        />
      );
  }
});

const mapStateToProps = (state: IReduxState) => ({
  contactDetailsFromStore: getContactDetails(state),
  firstName: getFIBState(state).answers.firstName,
  lastName: getFIBState(state).answers.lastName,
});

const mapDispatchToProps = {
  updateFibAnswer: (key: string, value: string) => updateFIBAnswerValue({ key, value }),
  updateContactDetails: (value: ContactDetails) => updateFIBAnswerValue({ key: "contactDetails", value }),
};

export default connect<ConnectedState, ConnectedDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(FibContactDetailsContainer);
