import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import ChallengesListScreen from "../challenges-list-screen";

describe("ChallengesListScreen", () => {

    it("should render", () => {

        const actual = shallow(
            <ChallengesListScreen
                challenges={[]}
                coinsTotal={0}
                hasNotification={false}
                labels={[
                    {
                        name: "yucoin",
                        onPress: jest.fn(),
                    },
                    {
                        name: "quest",
                        onPress: jest.fn(),
                    },
                    {
                        name: "rewards",
                        onPress: jest.fn(),
                    },
                ]}
                onMenuPress={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
