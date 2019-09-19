import { COLOURS } from "@molecules/index";
import { AppStateStatus } from "react-native";
import copy from "../../../../../redux/copy/copy.data";
import { shouldLeaderboardUpdate } from "../leaderboards.screen.helpers";

const currentProps = {
    componentId: "1",
    activeLeaderboardIndex: 0,
    currentWorld: 0,
    initialScrollIndex: 0,
    labels: [
        {
            name: "yucoin",
            onPress: jest.fn()
        },
        {
            name: "quests",
            onPress: jest.fn()
        },
        {
            name: "leaderboard",
            onPress: jest.fn()
        },
        {
            name: "rewards",
            onPress: jest.fn()
        }
    ],
    leaderboards: [
        {
            leaderboardId: "123456789123456789123456789000000",
            name: "first leaderboard",
            consent: true,
            hasAccepted: true,
            inviteFrom: "friend",
            isLoading: false
        },
        {
            leaderboardId: "123456789123456789123456789000000",
            name: "first leaderboard",
            consent: true,
            hasAccepted: true,
            inviteFrom: "friend",
            isLoading: false
        }
    ],
    hasNotification: false,
    items: [
        {
            id: "12345678910",
            coins: 50,
            firstName: "test",
            lastName: "test",
            name: "test test",
            steps: 5000
        }
    ],
    isLoading: false,
    onHandleCoinsRefetch: jest.fn(),
    onHandleStepsRefetch: jest.fn(),
    onHandleMindfulMinsRefetch: jest.fn(),
    onLeaderboardChange: jest.fn(),
    onRefetch: jest.fn(),
    sortBy: "coins",
    totalCoins: 5,
    onLeftMenuPress: jest.fn(),
    onAllowLeaderboard: jest.fn(),
    onPrivacyPolicyPress: jest.fn(),
    onRefuseConsent: jest.fn(),
    copy: copy.leaderboards.turnBoardOn,
    isMindfulAvailable: false,
    navbarColour: COLOURS.DARKER,
    appState: "active" as AppStateStatus
};

describe("shouldLeaderboardUpdate", () => {
    it("should be true when active leaderboard changes ", () => {
        const nextProps = {
            ...currentProps,
            activeLeaderboardIndex: 1
        };

        const currentState = {
            isShowingDropdown: false,
            shouldScrollTo: true
        };

        const nextState = {
            ...currentState
        };

        const actual = shouldLeaderboardUpdate({
            currentProps,
            nextProps,
            currentState,
            nextState
        });

        expect(actual).toBe(true);
    });

    it("should be true when leaderboard items change ", () => {
        const nextProps = {
            ...currentProps,
            leaderboards: [] as any
        };

        const currentState = {
            isShowingDropdown: false,
            shouldScrollTo: true
        };

        const nextState = {
            ...currentState
        };

        const actual = shouldLeaderboardUpdate({
            currentProps,
            nextProps,
            currentState,
            nextState
        });

        expect(actual).toBe(true);
    });

    it("should return false when there are no changes & when there are no leaderboards", () => {
        const newCurrentProps = {
            ...currentProps,
            leaderboards: [] as any
        };

        const nextProps = {
            ...currentProps,
            leaderboards: [] as any
        };

        const currentState = {
            isShowingDropdown: false,
            shouldScrollTo: true
        };

        const nextState = {
            ...currentState
        };

        const actual = shouldLeaderboardUpdate({
            currentProps: newCurrentProps,
            nextProps,
            currentState,
            nextState
        });

        expect(actual).toBe(false);
    });

    it("should return true when active leaderboard is loading", () => {
        const newCurrentProps = {
            ...currentProps,
            leaderboards: [
                {
                    leaderboardId: "123456789123456789123456789000000",
                    name: "first leaderboard",
                    consent: false,
                    hasAccepted: true,
                    inviteFrom: "friend",
                    isLoading: false
                },
                {
                    leaderboardId: "123456789123456789123456789000000",
                    name: "first leaderboard",
                    consent: true,
                    hasAccepted: true,
                    inviteFrom: "friend",
                    isLoading: false
                }
            ]
        };

        const nextProps = {
            ...currentProps,
            leaderboards: [
                {
                    leaderboardId: "123456789123456789123456789000000",
                    name: "first leaderboard",
                    consent: true,
                    hasAccepted: true,
                    inviteFrom: "friend",
                    isLoading: false
                },
                {
                    leaderboardId: "123456789123456789123456789000000",
                    name: "first leaderboard",
                    consent: true,
                    hasAccepted: true,
                    inviteFrom: "friend",
                    isLoading: false
                }
            ]
        };

        const currentState = {
            isShowingDropdown: false,
            shouldScrollTo: true
        };

        const nextState = {
            ...currentState
        };

        const actual = shouldLeaderboardUpdate({
            currentProps: newCurrentProps,
            nextProps,
            currentState,
            nextState
        });

        expect(actual).toBe(true);
    });

    it("should return true when active leaderboard consent changes", () => {
        const newCurrentProps = {
            ...currentProps,
            leaderboards: [
                {
                    leaderboardId: "123456789123456789123456789000000",
                    name: "first leaderboard",
                    consent: true,
                    hasAccepted: false,
                    inviteFrom: "friend",
                    isLoading: false
                },
                {
                    leaderboardId: "123456789123456789123456789000000",
                    name: "first leaderboard",
                    consent: false,
                    hasAccepted: false,
                    inviteFrom: "friend",
                    isLoading: false
                }
            ]
        };

        const nextProps = {
            ...currentProps,
            leaderboards: [
                {
                    leaderboardId: "123456789123456789123456789000000",
                    name: "first leaderboard",
                    consent: false,
                    hasAccepted: false,
                    inviteFrom: "friend",
                    isLoading: false
                },
                {
                    leaderboardId: "123456789123456789123456789000000",
                    name: "first leaderboard",
                    consent: false,
                    hasAccepted: false,
                    inviteFrom: "friend",
                    isLoading: false
                }
            ]
        };

        const currentState = {
            isShowingDropdown: false,
            shouldScrollTo: true
        };

        const nextState = {
            ...currentState
        };

        const actual = shouldLeaderboardUpdate({
            currentProps: newCurrentProps,
            nextProps,
            currentState,
            nextState
        });

        expect(actual).toBe(true);
    });
});
