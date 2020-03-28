import { ILeaderboardsScreenProps as IProps, ILeaderboardsScreenState as IState } from "./leaderboards.screen";

interface IShouldUpdateProps {
    nextProps: IProps;
    currentProps: IProps;
    nextState: IState;
    currentState: IState;
}

export function shouldLeaderboardUpdate({ nextProps, currentProps, nextState, currentState }: IShouldUpdateProps) {
    return (
        currentProps.activeLeaderboardIndex !== nextProps.activeLeaderboardIndex ||
        currentProps.appState !== nextProps.appState ||
        currentProps.isLoading !== nextProps.isLoading ||
        currentProps.initialScrollIndex !== nextProps.initialScrollIndex ||
        currentProps.sortBy !== nextProps.sortBy ||
        currentProps.items.length !== nextProps.items.length ||
        currentProps.leaderboards.length !== nextProps.leaderboards.length ||
        currentState.isShowingDropdown !== nextState.isShowingDropdown ||
        currentState.shouldScrollTo !== nextState.shouldScrollTo ||
        currentProps.totalCoins !== nextProps.totalCoins ||
        currentProps.hasNotification !== nextProps.hasNotification ||
        (!!(
            currentProps.leaderboards[currentProps.activeLeaderboardIndex] &&
            nextProps.leaderboards[currentProps.activeLeaderboardIndex]
        ) &&
            (currentProps.leaderboards[currentProps.activeLeaderboardIndex].isLoading !==
                nextProps.leaderboards[currentProps.activeLeaderboardIndex].isLoading ||
                currentProps.leaderboards[currentProps.activeLeaderboardIndex].consent !==
                    nextProps.leaderboards[nextProps.activeLeaderboardIndex].consent ||
                currentProps.leaderboards[currentProps.activeLeaderboardIndex].hasAccepted !==
                    nextProps.leaderboards[nextProps.activeLeaderboardIndex].hasAccepted))
    );
}
