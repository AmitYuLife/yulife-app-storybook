import { State } from "react-native-track-player";

export enum AudioPlayerActionTypes {
  SET_PLAYER_STATE = "SET_PLAYER_STATE",
  SET_SHOW_PLAYER = "SET_SHOW_PLAYER",
  SET_CURRENT_PROGRESS = "SET_CURRENT_PROGRESS",
  SET_SHOW_FOCUS_SCREEN = "SET_SHOW_FOCUS_SCREEN",
  SET_START_ERROR_MESSAGE = "SET_START_ERROR_MESSAGE",
  SET_STARTING = "SET_STARTING",
  SET_IS_DONE_ON_BACKGROUND = "SET_IS_DONE_ON_BACKGROUND",
  SET_END_OF_SESSION_LOADING = "SET_END_OF_SESSION_LOADING",
}

export interface IAudioPlayerState {
  isStarting: boolean;
  showPlayer: boolean;
  playerState: State;
  isLoadingEndOfSession: boolean;
  isDoneOnBackground: boolean;
  showFocusScreen: boolean;
  startErrorMessage: string;
  currentProgressInMilliseconds: number;
  currentProgressInSeconds: number;
  durationInSeconds: number;
}

export interface IAudioPlayerAction {
  type: AudioPlayerActionTypes;
  payload?: any;
}

export const INITIAL_STATE: IAudioPlayerState = {
  isStarting: false,
  showPlayer: false,
  playerState: null,
  isLoadingEndOfSession: false,
  isDoneOnBackground: false,
  showFocusScreen: false,
  startErrorMessage: null,
  currentProgressInMilliseconds: 0,
  currentProgressInSeconds: 0,
  durationInSeconds: 0,
};

export const reducer = (state: IAudioPlayerState, action: IAudioPlayerAction): IAudioPlayerState => {
  switch (action.type) {
    case AudioPlayerActionTypes.SET_CURRENT_PROGRESS: {
      return {
        ...state,
        currentProgressInMilliseconds: action.payload.position * 1000,
        currentProgressInSeconds: action.payload.position,
        ...(!state.durationInSeconds && {
          durationInSeconds: action.payload.duration,
        }),
      };
    }

    case AudioPlayerActionTypes.SET_SHOW_FOCUS_SCREEN: {
      return {
        ...state,
        showFocusScreen: action.payload,
      };
    }

    case AudioPlayerActionTypes.SET_SHOW_PLAYER: {
      return {
        ...state,
        showPlayer: true,
      };
    }

    case AudioPlayerActionTypes.SET_PLAYER_STATE: {
      return {
        ...state,
        playerState: action.payload,
      };
    }

    case AudioPlayerActionTypes.SET_START_ERROR_MESSAGE: {
      return {
        ...state,
        startErrorMessage: action.payload,
      };
    }

    case AudioPlayerActionTypes.SET_STARTING: {
      return {
        ...state,
        isStarting: action.payload,
      };
    }

    case AudioPlayerActionTypes.SET_IS_DONE_ON_BACKGROUND: {
      return {
        ...state,
        isDoneOnBackground: true,
      };
    }

    case AudioPlayerActionTypes.SET_END_OF_SESSION_LOADING: {
      return {
        ...state,
        isLoadingEndOfSession: true,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
