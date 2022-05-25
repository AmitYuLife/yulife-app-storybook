export function delay(ms?: number) {
  ms = ms || Math.floor(Math.random() * 76) + 100;

  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
