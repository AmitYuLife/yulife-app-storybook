import * as React from "react";
import { PureComponent } from "react";
import {
    Button,
    CentredScreen,
    Heading,
    Pad,
    TextInput,
} from "../../../atoms";
import styles from "./reset-password.styles";

interface IProps {
    onCancelPress: () => void;
    onSubmitPress: () => void;
}

interface IState {
    email: string;
}

export default class RewardScreen extends PureComponent<IProps, IState> {

    public state: IState = {
        email: "",
    };

    public render() {
        const { onSubmitPress, onCancelPress } = this.props;
        const { email } = this.state;

        return (
            <CentredScreen
                footerImage={
                    CentredScreen.FooterImages.FOREST
                }
            >
                <Pad height={120} />
                <Heading
                    style={styles.heading}
                    label="reset password"
                />
                <Pad height={90} />
                <TextInput
                    onChange={this.handleEmailChange}
                    value={email}
                    type={TextInput.Types.EMAIL}
                />
                <Pad height={30} />
                <Button
                    label="send me the link"
                    type={Button.Types.PRIMARY}
                    onPress={onSubmitPress}
                />
                <Pad height={10} />
                <Button
                    label="Back"
                    type={Button.Types.LINK}
                    onPress={onCancelPress}
                />
            </CentredScreen>
        );
    }

    private handleEmailChange = (email: string) => {
        this.setState({ email });
    }
}
