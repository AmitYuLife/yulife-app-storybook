const NetInfo = {
  fetch: () => Promise.resolve({
    type: "wifi",
    isConnected: true,
    isInternetReachable: true,
    details: {},
  }),
  addEventListener: (callback) => {
    return () => {};
  },
  configure: () => {},
};

export default NetInfo;
