export class CaptchaCancelledError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CaptchaCancelledError";
  }
}
