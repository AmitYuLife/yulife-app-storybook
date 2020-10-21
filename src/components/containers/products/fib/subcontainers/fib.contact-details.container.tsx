import React, { memo, useState, useCallback } from "react";
import { FibLocalNavigation } from "../fib.types";
import { FibContactDetailsScreen } from "@components/screens/products/fib/underwriting-journey/fib.contact-details.screen";
import { FibConfirmScreen } from "../../../../screens/products/fib/underwriting-journey/fib.confirm-email.screen";
import { connect } from "react-redux";
import { updateFIBAnswerValue } from "../../../../../redux/product/product.actions";
import { FibFindAdressScreen } from "@components/screens/products/fib/underwriting-journey/fib.find-adress.screen";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_ADDRESS_BY_POSTCODE } from "../../../../../graphql/yuscreen/getAdress.gql";
import { Address_findUserAddress } from "../../../../../graphql/_core/schema/Address";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getContactDetails } from "../../../../../redux/product/product.selectors";
import { ContactDetails } from "@redux/product/product.types";
import { Navigation } from "react-native-navigation";
import { MODALS, ROUTES } from "../../../../../navigation/constants";
import { formatPostCode } from "../../../../screens/products/fib/underwriting-journey/fib.find-adress.screen";

type ConnectedDispatch = typeof mapDispatchToProps;
type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IContactDetailsContainer {
  navigation: FibLocalNavigation;
}

type Props = IContactDetailsContainer & ConnectedDispatch & ConnectedState;

type ScreenId = "ContactDetails" | "FindAddress" | "ConfirmEmailAddress";

const FibContactDetailsConatainer = memo(function (props: Props) {
  const { updateFibAnswer, updateContactDetails, contactDetailsFromStore } = props;
  const [screenId, setScreenId] = useState<ScreenId>("ContactDetails");
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

  const { loading, data, error } = useQuery(GQL_QUERY_GET_ADDRESS_BY_POSTCODE, {
    variables: { postcode: postCode },
    fetchPolicy: "network-only",
  });

  const onContactDetailsChange = (key: keyof ContactDetails, value: string) => {
    setContactDetails((state) => ({ ...state, [key]: value }));
  };

  const onContinuePress = () => {
    updateContactDetails(contactDetails);
    setScreenId("ConfirmEmailAddress");
  };

  const onFirstButton = () => {
    updateFibAnswer("use_personal_email", "No");
  };

  const onSecondButton = () => {
    updateFibAnswer("use_personal_email", "Yes");
  };

  const onAddressSelected = (address: Address_findUserAddress) => {
    setContactDetails((state) => ({
      ...state,
      firstAddressLine: address.addressFirstLine,
      secondAddressLine: address.addressSecondLine,
      townOrCity: address.addressCity,
      postCode: formatPostCode(address.addressPostCode),
    }));
    setScreenId("ContactDetails");
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
          heading: "Exit",
          subheading: "If you exit now, your progress will be saved for next time.",
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
          onFindAdress={() => setScreenId("FindAddress")}
          onClose={onClose}
        />
      );
    case "ConfirmEmailAddress":
      return (
        <FibConfirmScreen
          firstButtonAction={onFirstButton}
          secondButtonAction={onSecondButton}
          email={contactDetails.personalEmail}
          onBackButtonPress={() => setScreenId("ContactDetails")}
          onClose={onClose}
        />
      );
    case "FindAddress":
      return (
        <FibFindAdressScreen
          onAddressSelected={onAddressSelected}
          onBackButtonPress={() => setScreenId("ContactDetails")}
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
});

const mapDispatchToProps = {
  updateFibAnswer: (key: string, value: string) => updateFIBAnswerValue({ key, value }),
  updateContactDetails: (value: ContactDetails) => updateFIBAnswerValue({ key: "contactDetails", value }),
};
export default connect<ConnectedState, ConnectedDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(FibContactDetailsConatainer);
