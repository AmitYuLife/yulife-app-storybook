import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import { GetRewards_getRewards_uiSettings } from "../../../../../../graphql/_core/schema";
import AviosDetailsScreen from "../avios-details.screen";

const defaultProps = {
    code: "1234",
    coins: 123,
    cost: 1234,
    data: [
        {
            cost: "123",
            day: "Monday",
            id: "id",
            month: "April",
            onPress: jest.fn(),
            reward: "string",
            status: "pending"
        }
    ],
    description: "A thing that does stuff",
    instructions: ["These", "are", "instructions"],
    labelCtaPrimary: "CTA Primary",
    onLeftTabPress: jest.fn(),
    onRightTabPress: jest.fn(),
    onPressTopBar: jest.fn(),
    onPressConfirm: jest.fn(),
    onPressSetUp: jest.fn(),
    onPressPolicy: jest.fn(),
    welcomeHeading: "",
    welcomeParagraph: "",
    instructionsHeading: "",
    instructionsParagraph: "",
    rewardCurrency: "AVIOS",
    rewardValue: 123,
    loyaltyList: [
        {
            id: "program test",
            label: "test"
        }
    ],
    uiSettings: {
        __typename: "RewardUiSettings",
        logoHeight: 1234,
        logoWidth: 1234
    } as GetRewards_getRewards_uiSettings,
    items: [
        {
            id: "",
            label: ""
        }
    ],
    instruction: "instruction test",
    hasErrorAccountNumber: false,
    isDisabledCta: false,
    confirmButtonLabel: "",
    loyaltyValue: "",
    forenameValue: "",
    surnameValue: "",
    amountValue: "",
    accountNumberValue: "",
    onForenameChange: jest.fn(),
    onSurnameChange: jest.fn(),
    onCardChange: jest.fn(),
    onPressLoyaltyPicker: jest.fn(),
    onPressAmountPicker: jest.fn()
};

describe("AviosDetailsScreen", () => {
    it("should render with description & tabs", () => {
        const actual = shallow(<AviosDetailsScreen {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with only the pickers & text input", () => {
        const actual = shallow(<AviosDetailsScreen {...defaultProps} />);
        actual.setState({ isShowingKeyboard: true });
        expect(actual).toMatchSnapshot();
    });
});
