// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function throttle(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  let last: number;

  return function (...args: any[]) {
    const now = Number(new Date());

    if (last && now < last + wait) {
      function functionToCall() {
        timeout = null;
        func.apply(this, args);
      }

      clearTimeout(timeout);
      timeout = setTimeout(functionToCall, wait);
      return;
    }

    last = now;
    func.apply(this, args);
  };
}
