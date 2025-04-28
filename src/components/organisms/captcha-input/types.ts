export class CaptchaCancelledError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CaptchaCancelledError";
  }
}

export type CaptchaResponse = {
  result: string | null;
  debugInfo: string | null;
  provider: string;
};

export type CaptchaHandleExecuteResponse = {
  result: string | null;
  debugInfo: string | null;
};
