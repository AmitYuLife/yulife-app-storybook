type DeferredPromise<T> = {
  promise: Promise<T>;
  resolve: (value: T | PromiseLike<T>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reject: (reason?: any) => void;
};

export const createDeferredPromise = <T = void>(): DeferredPromise<T> => {
  let resolve!: DeferredPromise<T>["resolve"];
  let reject!: DeferredPromise<T>["reject"];

  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return { promise, resolve, reject };
};
