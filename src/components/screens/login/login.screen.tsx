import { BUTTON_LOGIN, INPUT_LOGIN_EMAIL, INPUT_LOGIN_PASSWORD } from "@ids";
import * as React from "react";
import { PureComponent } from "react";
import { EmitterSubscription, Keyboard, KeyboardAvoidingView, Platform, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { GetMobileCopy_getMobileCopy_screens_login as LoginCopy } from "../../../graphql/_core/schema";
import { Blurb, Button, CentredScreen, Heading, Pad, TextInput, TextInputError } from "../../atoms";
import { LinkGroup } from "../../molecules";
import styles from "./login.screen.styles";

export interface IProps {
  disabled: boolean;
  email: string;
  emailError: string;
  isLoggingIn: boolean;
  loginError: string;
  onEmailChange: (email: string) => void;
  onResetPasswordPress: () => void;
  onLogInPress: () => void;
  onPasswordChange: (password: string) => void;
  password: string;
  passwordError: string;
  copy: LoginCopy;
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
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      this.keyboardDidShow(true)
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      this.keyboardDidShow(false)
    );
  }

  public render() {
    const {
      disabled,
      email,
      emailError,
      isLoggingIn,
      loginError,
      onEmailChange,
      onLogInPress,
      onPasswordChange,
      password,
      passwordError,
      copy,
    } = this.props;

    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.flex}>
        <Animatable.View duration={1000} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
          <CentredScreen footerImage="forest">
            {this.state.isShowingKeyboard ? null : (
              <View>
                <Pad height={100} />
                <Heading label={copy.heading} size="large" />
                <Blurb label={copy.subheading} wrapperStyle={styles.blurbWrapper} />
              </View>
            )}
            <Pad height={44} />
            <TextInput
              testID={INPUT_LOGIN_EMAIL}
              errorMessage={emailError}
              hasError={!!emailError}
              onChange={onEmailChange}
              type={TextInput.Types.EMAIL}
              value={email}
            />
            <Pad height={12} />
            <TextInput
              testID={INPUT_LOGIN_PASSWORD(TextInput.Types.PASSWORD)}
              errorMessage={passwordError}
              hasError={!!passwordError}
              onChange={onPasswordChange}
              value={password}
              type={TextInput.Types.PASSWORD}
            />
            {!!loginError && <TextInputError>{loginError}</TextInputError>}
            <Pad height={44} />
            <Button
              testID={BUTTON_LOGIN}
              isLoading={isLoggingIn}
              disabled={isLoggingIn || disabled}
              label={copy.ctaLabel}
              onPress={onLogInPress}
              type="Primary"
            />
            <Pad height={15} />
            <LinkGroup data={this.getLinks()} />
          </CentredScreen>
        </Animatable.View>
      </KeyboardAvoidingView>
    );
  }

  private keyboardDidShow = (isShowingKeyboard: boolean) => {
    return () => this.setState({ isShowingKeyboard });
  };

  private getLinks = () => {
    const { onResetPasswordPress } = this.props;
    return [
      {
        label: "need help logging in?",
        onPress: onResetPasswordPress,
      },
    ];
  };
}

export default LoginScreen;
