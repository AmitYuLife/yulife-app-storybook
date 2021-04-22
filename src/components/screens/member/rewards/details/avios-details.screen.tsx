import * as React from "react";
import {
  EmitterSubscription,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { GetRewards_getRewards_uiSettings } from "../../../../../graphql/_core/schema";
import { Button, Pad, Text, TextInput } from "../../../../atoms";
import { LinkGroup, Picker, RewardsListItem } from "../../../../molecules";
import styles from "./avios-details.screen.styles";
import { TopBarLeftIconTypes } from "@components/organisms/top-bar/top-bar.helpers";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

const noop = () => ({});

export interface IRewardReturnedUsersItem {
  id: string;
  label: string;
}

export interface IContainerProps {
  uiSettings: GetRewards_getRewards_uiSettings;
  code: string;
  cost: number;
  rewardValue: number;
  rewardCurrency: string;
  welcomeHeading: string;
  welcomeParagraph: string;
  instructionsHeading: string;
  instructionsParagraph: string;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  onPressTopBar: () => void;
  onPressConfirm: () => void;
  onPressSetUp: () => void;
  onPressPolicy: () => void;
  isLoading?: boolean;
}

export interface IOnPressPickerArgs {
  items: IRewardReturnedUsersItem[];
  instruction: string;
}

interface IOwnProps {
  hasErrorAccountNumber: boolean;
  isDisabledCta: boolean;
  confirmButtonLabel: string;
  loyaltyValue: string;
  forenameValue: string;
  surnameValue: string;
  amountValue: string;
  accountNumberValue: string;
  onForenameChange: (value: string) => void;
  onSurnameChange: (value: string) => void;
  onCardChange: (value: string) => void;
  onPressLoyaltyPicker: () => void;
  onPressAmountPicker: () => void;
}

type Props = IContainerProps & IOwnProps;

interface IState {
  isShowingKeyboard: boolean;
}

class AviosDetailsScreen extends React.PureComponent<Props, IState> {
  public state = {
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
      uiSettings,
      hasErrorAccountNumber,
      isDisabledCta,
      confirmButtonLabel,
      code,
      cost,
      rewardValue,
      rewardCurrency,
      welcomeHeading,
      welcomeParagraph,
      instructionsHeading,
      instructionsParagraph,
      onPressConfirm,
      onPressSetUp,
      onPressPolicy,
      onForenameChange,
      onSurnameChange,
      onPressTopBar,
      onCardChange,
      loyaltyValue,
      accountNumberValue,
      forenameValue,
      surnameValue,
      amountValue,
      isLoading,
    } = this.props;
    const { isShowingKeyboard } = this.state;
    return (
      <KeyboardAvoidingView style={styles.kAV}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.wrapper}
          contentContainerStyle={StyleSheet.flatten([
            styles.contentContainerStyle,
            isShowingKeyboard ? styles.contentContainerWithKeyboard : {},
          ])}
        >
          {isShowingKeyboard ? null : (
            <View>
              <View style={styles.pad} />
              <RewardsListItem
                settings={uiSettings}
                onPress={noop}
                code={code}
                cost={cost}
                rewardValue={rewardValue}
                rewardCurrency={rewardCurrency}
              />
              <View style={styles.contentWrapper}>
                <Text bold={true} style={styles.heading}>
                  {welcomeHeading}
                </Text>
                <Text style={styles.paragraph}>{welcomeParagraph}</Text>
              </View>
              <View style={styles.contentWrapper}>
                <Text bold={true} style={styles.heading}>
                  {instructionsHeading}
                </Text>
                <Text style={styles.paragraph}>{instructionsParagraph}</Text>
              </View>
            </View>
          )}
          <View style={styles.formWrapper}>
            <Picker
              label={loyaltyValue}
              placeholder={loyaltyValue ? "" : "loyalty programme"}
              onPress={this.props.onPressLoyaltyPicker}
              icon={Picker.Icons.HEART}
            />
            <TextInput
              style={styles.textInput}
              onChange={onForenameChange}
              value={forenameValue}
              placeholder="forename"
              type={TextInput.Types.TEXT}
            />
            <TextInput
              style={styles.textInput}
              onChange={onSurnameChange}
              value={surnameValue}
              placeholder="surname"
              type={TextInput.Types.TEXT}
            />
            <TextInput
              style={styles.textInput}
              onChange={onCardChange}
              value={accountNumberValue}
              type={TextInput.Types.CARD}
              hasError={hasErrorAccountNumber}
              errorMessage={"Please enter a valid account number"}
            />
            <Picker
              placeholder="amount"
              label={amountValue}
              onPress={this.props.onPressAmountPicker}
              icon={Picker.Icons.COINS}
            />
          </View>
          <View style={styles.ctaWrapper}>
            <Button
              isLoading={isLoading}
              label={confirmButtonLabel}
              onPress={onPressConfirm}
              disabled={isDisabledCta || isLoading}
            />
          </View>
          <View style={styles.linksWrapper}>
            <LinkGroup
              data={[
                {
                  label: "new to Avios?",
                  onPress: onPressSetUp,
                },
                {
                  label: "Rewards Policy",
                  onPress: onPressPolicy,
                },
              ]}
            />
          </View>
          <Pad height={50} />
        </ScrollView>
        <TopBarAbsolute
          hasShadow={true}
          hasWhiteBackground={true}
          leftIcon={TopBarLeftIconTypes.BACK}
          onPressLeftIcon={onPressTopBar}
        />
      </KeyboardAvoidingView>
    );
  }

  private keyboardDidShow = (isShowingKeyboard: boolean) => {
    return () => this.setState({ isShowingKeyboard });
  };
}

export default AviosDetailsScreen;
