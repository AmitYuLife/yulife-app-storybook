import { ILeaderboardsScreenProps as IProps, initialState } from "./leaderboards.screen";

interface IShouldUpdateProps {
  nextProps: IProps;
  currentProps: IProps;
  nextState: typeof initialState;
  currentState: typeof initialState;
}

export function shouldLeaderboardUpdate({ nextProps, currentProps, nextState, currentState }: IShouldUpdateProps) {
  const propsCondition =
    currentProps.activeLeaderboardIndex !== nextProps.activeLeaderboardIndex ||
    currentProps.appState !== nextProps.appState ||
    currentProps.isLoading !== nextProps.isLoading ||
    currentProps.sortBy !== nextProps.sortBy ||
    currentProps.items.length !== nextProps.items.length ||
    currentProps.leaderboards.length !== nextProps.leaderboards.length ||
    (!!(
      currentProps.leaderboards[currentProps.activeLeaderboardIndex] &&
      nextProps.leaderboards[currentProps.activeLeaderboardIndex]
    ) &&
      (currentProps.leaderboards[currentProps.activeLeaderboardIndex].isLoading !==
        nextProps.leaderboards[currentProps.activeLeaderboardIndex].isLoading ||
        currentProps.leaderboards[currentProps.activeLeaderboardIndex].consent !==
          nextProps.leaderboards[nextProps.activeLeaderboardIndex].consent ||
        currentProps.leaderboards[currentProps.activeLeaderboardIndex].hasAccepted !==
          nextProps.leaderboards[nextProps.activeLeaderboardIndex].hasAccepted));
  const _itemOffsetY = nextState.itemOffsetY !== currentState.itemOffsetY;
  const _viewportHeight = nextState.viewportHeight !== currentState.viewportHeight;
  const _viewableInViewportMin = nextState.viewableInViewportMin !== currentState.viewableInViewportMin;
  const _viewableInViewportMax = nextState.viewableInViewportMax !== currentState.viewableInViewportMax;
  const stateCondition = _itemOffsetY || _viewportHeight || _viewableInViewportMin || _viewableInViewportMax;
  return propsCondition || stateCondition;
}
