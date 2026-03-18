export enum YuHealthEvent {
  pedometerUpdate = "YU_PEDOMETER_UPDATE",
  foregroundPedometerUpdate = "YU_FOREGROUND_PEDOMETER_UPDATE",
  logEvent = "YU_LOG_EVENT",
}

export interface PedometerResponse {
  startTime: string;
  endTime: string;
  steps: number;
  stepsBeforeSubscribe?: number;
}

export interface ForegroundPedometerResponse {
  steps: number;
}

export interface ForegroundPedometerUpdateEvent {
  result: ForegroundPedometerResponse;
}

export interface PedometerUpdateEvent {
  result: PedometerResponse;
}

export interface LogEvent {
  message: string;
}

export interface YuHealthEventData {
  [YuHealthEvent.pedometerUpdate]: PedometerUpdateEvent;
  [YuHealthEvent.logEvent]: LogEvent;
  [YuHealthEvent.foregroundPedometerUpdate]: ForegroundPedometerUpdateEvent;
}
