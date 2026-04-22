// Full web stub for @yu-life/react-native-yu-watch
const noop = () => {};
const noopPromise = () => Promise.resolve();

export const WatchesModule = {
  isSupported: () => Promise.resolve(false),
  getSteps: () => Promise.resolve(0),
};

export const useWatch = () => ({
  isSupported: false,
  steps: 0,
});

export const sendMessage = noopPromise;
export const addMessageReplyListener = (callback) => ({ remove: noop });

export default { WatchesModule, useWatch, sendMessage, addMessageReplyListener };
