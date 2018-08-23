import * as React from "react";
import { PureComponent } from "react";
import {
    EmitterSubscription,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    View,
} from "react-native";
import {
    Button,
    CentredScreen,
    Heading,
    Pad,
    TextInput,
    TextInputError,
} from "../../atoms";
import { LinkGroup } from "../../molecules";
import data from "./login.screen.data";
import styles from "./login.screen.styles";

export interface IProps {
    email: string;
    emailError: string;
    isLoggingIn: boolean;
    loginError: string;
    onEmailChange: (email: string) => void;
    onResetPasswordPress: () => void;
    onLogInPress: () => void;
    onPasswordChange: (password: string) => void;
    onSignUpPress: () => void;
    password: string;
    passwordError: string;
}

interface IState {
    isShowingKeyboard: boolean;
}

class LoginScreen extends PureComponent<IProps, IState> {

    public state: IState = {
        isShowingKeyboard: false,
    };

    private keyboardDidShowListener?: EmitterSubscription;
    private keyboardDidHideListener?: EmitterSubscription;

    public componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    public componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            Platform.OS === "ios"
                ? "keyboardWillShow"
                : "keyboardDidShow",
            this.keyboardDidShow(true)
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            Platform.OS === "ios"
                ? "keyboardWillHide"
                : "keyboardDidHide",
            this.keyboardDidShow(false)
        );
    }

    public render() {
        const {
            email,
            emailError,
            isLoggingIn,
            loginError,
            onEmailChange,
            onLogInPress,
            onPasswordChange,
            password,
            passwordError,
         } = this.props;

        return (
            <KeyboardAvoidingView
                behavior="padding"
                style={styles.kAV}
            >
                <CentredScreen
                    footerImage={CentredScreen.FooterImages.FOREST}
                >
                    {this.state.isShowingKeyboard ? null : (
                        <View>
                            <Pad height={100} />
                            <Heading
                                label={data.heading}
                                size={Heading.Sizes.LARGE}
                            />
                        </View>
                    )}
                    <Pad height={44} />
                    <TextInput
                        errorMessage={emailError}
                        hasError={!!emailError}
                        onChange={onEmailChange}
                        type={TextInput.Types.EMAIL}
                        value={email}
                    />
                    <Pad height={12} />
                    <TextInput
                        errorMessage={passwordError}
                        hasError={!!passwordError}
                        onChange={onPasswordChange}
                        value={password}
                        type={TextInput.Types.PASSWORD}
                    />
                    {!!loginError && (
                        <TextInputError>{loginError}</TextInputError>
                    )}
                    <Pad height={44} />
                    <Button
                        disabled={isLoggingIn}
                        label={isLoggingIn ? data.isLoggingIn : data.logInCta}
                        onPress={onLogInPress}
                        type={Button.Types.PRIMARY}
                    />
                    <Pad height={15} />
                    <LinkGroup data={this.getLinks()} />
                </CentredScreen>
            </KeyboardAvoidingView>
        );
    }

    private keyboardDidShow = (isShowingKeyboard: boolean) => {
        return () => this.setState({ isShowingKeyboard });
    }

    private getLinks = () => {
        const { onResetPasswordPress, onSignUpPress } = this.props;
        return [
            {
                label: "Forgot password",
                onPress: onResetPasswordPress,
            },
            {
                label: "Sign up",
                onPress: onSignUpPress,
            },
        ];
    }
}

export default LoginScreen;
