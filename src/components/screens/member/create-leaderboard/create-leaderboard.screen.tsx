import { CreateLeaderboardVariables } from "@graphql/_core/schema";
import * as React from "react";
import { FlatList, KeyboardAvoidingView, ListRenderItemInfo, Platform, StyleSheet, Text, View } from "react-native";
import { Button, Close, Pad, SecondaryButton, TextInput } from "@atoms";
import { validateEmail } from "@containers/login/login.helpers";
import styles from "./create-leaderboard.screen.styles";
import { GROUP_NAME_INPUT, LEADERBOARD_EMAIL_INPUT } from "@ids";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { CentredScreen } from "@molecules";

interface IState {
  emailError: string;
  emailInput: string;
  emails: string[];
  groupName: string;
}

interface IProps {
  isLoading: boolean;
  onCreateLeaderboard: (variables: CreateLeaderboardVariables) => void;
  onPressClose: () => void;
}

class CreateLeaderboardScreen extends React.PureComponent<IProps, IState> {
  public state: IState = {
    emailError: "",
    emailInput: "",
    emails: [],
    groupName: "",
  };

  public render() {
    const { emailError, emailInput, emails, groupName } = this.state;
    const { isLoading } = this.props;
    const isCreateDisabled = !emails.length || groupName === "";

    return (
      <View style={StyleSheet.absoluteFill}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={{ flex: 1 }}>
          <GenericHeadingPad />
          <CentredScreen>
            <Pad height={20} />
            <TextInput
              type="Board"
              onChange={this.groupNameChange}
              placeholder="Group name"
              value={groupName}
              testID={GROUP_NAME_INPUT}
            />
            <Pad height={12} />
            <TextInput
              type="Email"
              icon="Email"
              onChange={this.emailChange}
              placeholder="invite members (email)"
              value={emailInput}
              hasError={!!emailError}
              errorMessage={emailError}
              testID={LEADERBOARD_EMAIL_INPUT}
            />
            <Pad height={20} />
            <SecondaryButton label="add" onPress={this.addEmail} />
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={this.keyExtractor}
              style={styles.flatListStyle}
              contentContainerStyle={styles.flatListContainerStyle}
              data={emails}
              renderItem={this.renderItem}
            />
            <Button
              isLoading={isLoading}
              wrapperStyle={styles.createButton}
              disabled={isCreateDisabled || isLoading}
              label="create"
              onPress={this.handleCreateLeaderboardSubmit}
            />
          </CentredScreen>
        </KeyboardAvoidingView>
        <GenericHeadingAbsolute heading="create a leaderboard" onRightIconPress={this.props.onPressClose} />
      </View>
    );
  }

  private keyExtractor = (item: string, index: number) => `${index}${item}`;

  private renderItem = ({ item, index }: ListRenderItemInfo<string>) => (
    <View style={styles.flatlistItem}>
      <Text>{item}</Text>
      <Close style={styles.flatlistItemRemoveButton} onPress={this.removeEmail(index)} />
    </View>
  );

  private groupNameChange = (groupName: string) => {
    this.setState({
      groupName,
    });
  };

  private addEmail = () => {
    const { emailInput, emails } = this.state;
    if (!validateEmail(emailInput)) {
      if (emails.indexOf(emailInput) === -1) {
        this.setState({
          emails: [...emails, emailInput.replace(/\s/g, "")],
          emailInput: "",
          emailError: "",
        });
      } else {
        this.setState({
          emailError: "Member already invited",
        });
      }
    }
  };

  private emailChange = (emailInput: string) => {
    const emailError = validateEmail(emailInput);

    this.setState({
      emailError,
      emailInput,
    });
  };

  private removeEmail = (index: number) => {
    return () => {
      this.setState((prevState: IState) => ({
        emails: [...prevState.emails.slice(0, index), ...prevState.emails.slice(index + 1, prevState.emails.length)],
      }));
    };
  };

  private handleCreateLeaderboardSubmit = () => {
    const { groupName, emails } = this.state;
    this.props.onCreateLeaderboard({ name: groupName, invitees: emails });
  };
}

export default CreateLeaderboardScreen;
