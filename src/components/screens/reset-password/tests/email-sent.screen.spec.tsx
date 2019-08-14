import copyData from "@redux/copy/copy.data";
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import EmailSentScreen from "../email-sent.screen";

describe("EmailSentScreen", () => {

    it("should render", () => {
        const actual = shallow(
            <EmailSentScreen
                onLogInPress={jest.fn()}
                copy={copyData.emailSent}
                email="test@yulife.com"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
