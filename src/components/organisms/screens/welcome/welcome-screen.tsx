import * as React from "react";
import { SFC } from "react";
import {
    Blurb,
    Button,
    CentredScreen,
    Heading,
    Pad,
} from "../../../atoms";
import data from "./welcome-screen.data";

interface IProps {
    onSignUpPress: () => void;
    onLogInPress: () => void;
}

const WelcomeScreen: SFC<IProps> = ({ onSignUpPress, onLogInPress }) => (
    <CentredScreen
        footerImage={CentredScreen.FooterImages.FOREST}
    >
        <Pad height={100} />
        <Heading
            size={Heading.Sizes.LARGE}
            label={data.heading}
        />
        <Blurb label={data.blurb} />
        <Pad height={44} />
        <Button
            type={Button.Types.SECONDARY}
            label={data.signUpCta}
            onPress={onSignUpPress}
        />
        <Pad height={15} />
        <Button
            type={Button.Types.SECONDARY}
            label={data.logInCta}
            onPress={onLogInPress}
        />
    </CentredScreen>
);

export default WelcomeScreen;
