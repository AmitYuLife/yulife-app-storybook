export enum ActionTypes {
  PAUSE_PLAYER = "PAUSE_PLAYER",
  PLAY_PLAYER = "PLAY_PLAYER",
  SET_DURATION = "SET_DURATION",
  SET_CURRENT_PROGRESS = "SET_CURRENT_PROGRESS",
  SET_LOADING = "SET_LOADING",
  SET_BUFFERING = "SET_BUFFERING",
  SET_MUSIC_CONTROL_MOUNTED = "SET_MUSIC_CONTROL_MOUNTED",
  SET_SHOW_FOCUS_SCREEN = "SET_SHOW_FOCUS_SCREEN",
  SET_START_ERROR_MESSAGE = "SET_START_ERROR_MESSAGE",
  SET_STARTING = "SET_STARTING",
  SET_IS_DONE_ON_BACKGROUND = "SET_IS_DONE_ON_BACKGROUND",
  SET_RETRIES = "SET_RETRIES",
  SET_END_OF_SESSION_LOADING = "SET_END_OF_SESSION_LOADING",
  SET_ON_END_ERROR = "SET_ON_END_ERROR",
}

export interface IState {
  durationInMilliSeconds: number;
  durationInSeconds: number;
  currentProgressInMilliSeconds: number;
  currentProgressInSeconds: number;
  isMusicControlMounted: boolean;
  loading: boolean;
  isStarting: boolean;
  isBuffering: boolean;
  isPaused: boolean;
  isLoadingEndOfSession: boolean;
  isDoneOnBackground: boolean;
  showFocusScreen: boolean;
  showTryAgainError: boolean;
  startErrorMessage: string;
  retries: number;
}

export interface IAction {
  type: ActionTypes;
  payload?: any;
}

export const INITIAL_STATE: IState = {
  durationInMilliSeconds: 0,
  durationInSeconds: 0,
  currentProgressInMilliSeconds: 0,
  currentProgressInSeconds: 0,
  isMusicControlMounted: false,
  loading: true,
  isBuffering: false,
  isPaused: true,
  isStarting: false,
  isLoadingEndOfSession: false,
  isDoneOnBackground: false,
  showFocusScreen: false,
  showTryAgainError: false,
  startErrorMessage: null,
  retries: 3,
};

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PROGRESS: {
      return {
        ...state,
        currentProgressInMilliSeconds: action.payload,
        currentProgressInSeconds: action.payload / 1000,
      };
    }

    case ActionTypes.SET_DURATION: {
      return {
        ...state,
        durationInSeconds: action.payload / 1000,
        durationInMilliSeconds: action.payload,
        loading: false,
      };
    }

    case ActionTypes.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case ActionTypes.SET_BUFFERING: {
      return {
        ...state,
        isBuffering: action.payload,
      };
    }

    case ActionTypes.SET_MUSIC_CONTROL_MOUNTED: {
      return {
        ...state,
        isMusicControlMounted: true,
        isPaused: false,
      };
    }

    case ActionTypes.PLAY_PLAYER: {
      return {
        ...state,
        isPaused: false,
      };
    }

    case ActionTypes.PAUSE_PLAYER: {
      return {
        ...state,
        isPaused: true,
      };
    }

    case ActionTypes.SET_SHOW_FOCUS_SCREEN: {
      return {
        ...state,
        showFocusScreen: action.payload,
      };
    }

    case ActionTypes.SET_START_ERROR_MESSAGE: {
      return {
        ...state,
        startErrorMessage: action.payload,
      };
    }

    case ActionTypes.SET_STARTING: {
      return {
        ...state,
        isStarting: action.payload,
      };
    }

    case ActionTypes.SET_IS_DONE_ON_BACKGROUND: {
      return {
        ...state,
        isDoneOnBackground: true,
      };
    }

    case ActionTypes.SET_RETRIES: {
      return {
        ...state,
        retries: state.retries - 1,
        isPaused: true,
      };
    }

    case ActionTypes.SET_END_OF_SESSION_LOADING: {
      return {
        ...state,
        isLoadingEndOfSession: true,
        showTryAgainError: false,
      };
    }

    case ActionTypes.SET_ON_END_ERROR: {
      return {
        ...state,
        showTryAgainError: true,
      };
    }
  }
};
