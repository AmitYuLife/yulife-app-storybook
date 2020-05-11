import React from "react";
import { Button } from "react-native";
import { act, fireEvent } from "@testing-library/react-native";
import wait from "waait";
import { testInitialState, IReduxState } from "@redux/_core/reducers";
import { getDeviceId, getModel } from "react-native-device-info";
import { IMainTabsProps } from "@navigation/root";
import QuestsContainer from "../quests.container";
import { MockedProvider } from "@apollo/react-testing";
import customRenderer from "jest/customRenderer";
import { IActiveLevel } from "@redux/levels/levels.selectors";
import { useDispatch } from "react-redux";
import { PEDOMETER_UPDATES_SUCCESS } from "@redux/pedometer/pedometer.actions";

const mockedGetDeviceId = getDeviceId as jest.Mock;
const mockedGetModel = getModel as jest.Mock;

function StepIncrementer() {
  const dispatch = useDispatch();

  function step() {
    dispatch({
      type: PEDOMETER_UPDATES_SUCCESS,
      payload: {
        steps: 101,
      },
    });
  }

  return <Button title="Increment Step" onPress={step} />;
}

async function renderComponent(testState: Partial<IReduxState>) {
  const props: IMainTabsProps = {
    componentId: "1234",
    onLeftMenuPress: jest.fn(),
    labels: [
      {
        name: "Hi",
        onPress: jest.fn(),
        colour: "blue",
      },
    ],
  };

  const api = customRenderer(
    <MockedProvider mocks={[]} addTypename={false}>
      <>
        <StepIncrementer />
        <QuestsContainer {...props} />
      </>
    </MockedProvider>,
    {
      initialState: {
        ...testInitialState,
        ...testState,
      },
    }
  );

  await act(async () => {
    await wait(0);
  });

  return api;
}

describe("QuestsContainer", () => {
  it("should update when a user has taken a step", async () => {
    jest.useRealTimers();

    const activeLevel: IActiveLevel = {
      ...testInitialState.levels.active,
      subtype: "short stroll",
      endDateTime: "2022-04-28T10:22:34+01:00",
      levelSlotId: "YU_LEVEL_0003_1",
      score: 100,
      status: null,
      timeUp: false,
      unit: "steps",
    };

    mockedGetDeviceId.mockReturnValue("iphone");
    mockedGetModel.mockReturnValue("11");

    const { queryByText, getByText } = await renderComponent({
      levels: {
        ...testInitialState.levels,
        active: activeLevel,
      },
    });

    expect(queryByText(/100 steps/)).toBeTruthy();

    act(() => {
      fireEvent.press(getByText("Increment Step"));
    });

    expect(queryByText(/101 steps/)).toBeTruthy();
  });
});
