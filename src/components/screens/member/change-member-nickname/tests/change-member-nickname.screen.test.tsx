import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react-native";
import { ChangeMemberNickname } from "@screens";
import { NICKNAME_INPUT, CHANGE_MEMBER_NICK_BUTTON, BACK_BUTTON } from "@ids";
import "@testing-library/jest-native/extend-expect";

const onPress = jest.fn();

interface Props {
  enableButton: boolean;
  isLoading?: boolean;
  onChange?: (arg: string) => void;
  onPress?: (arg: string) => void;
}

const renderComponent = (customProps: Props) => {
  const props = {
    onPress,
    ...customProps,
  };

  return render(<ChangeMemberNickname {...props} />);
};

describe("ChangeMemberNickname", () => {
  it("should render ChangeMemberNickname with button", () => {
    const { getByTestId, queryByText } = renderComponent({ enableButton: true });
    const button = getByTestId(CHANGE_MEMBER_NICK_BUTTON);
    const buttonText = getByTestId(`${CHANGE_MEMBER_NICK_BUTTON}-text-view`);
    const goBackButton = getByTestId(BACK_BUTTON);
    expect(goBackButton).toBeTruthy();
    expect(buttonText).toHaveTextContent("Save");
    act(() => {
      fireEvent.press(button);
    });
    expect(onPress).toHaveBeenCalledTimes(0);
    expect(queryByText("Choose a nickname")).toBeTruthy();
    expect(queryByText("Enter a nickname for other YuLifers to see.")).toBeTruthy();
  });

  it("should render ChangeMemberNickname and fire button event", () => {
    const { getByTestId } = renderComponent({ enableButton: true });
    const button = getByTestId(CHANGE_MEMBER_NICK_BUTTON);
    const input = getByTestId(NICKNAME_INPUT);

    fireEvent.changeText(input, "test");
    act(() => {
      fireEvent.press(button);
    });
    waitFor(() => {
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });

  it("should render ChangeMemberNickname without button", () => {
    const { queryByTestId } = renderComponent({ enableButton: false });
    const button = queryByTestId(CHANGE_MEMBER_NICK_BUTTON);
    expect(button).toBeFalsy();
  });
});
