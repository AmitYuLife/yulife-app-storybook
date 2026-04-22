// Web implementation of AsyncStorage using localStorage
const AsyncStorage = {
  getItem: (key) => {
    try {
      return Promise.resolve(localStorage.getItem(key));
    } catch {
      return Promise.resolve(null);
    }
  },
  setItem: (key, value) => {
    try {
      localStorage.setItem(key, value);
      return Promise.resolve();
    } catch {
      return Promise.resolve();
    }
  },
  removeItem: (key) => {
    try {
      localStorage.removeItem(key);
      return Promise.resolve();
    } catch {
      return Promise.resolve();
    }
  },
  mergeItem: (key, value) => {
    try {
      const existing = localStorage.getItem(key);
      if (existing) {
        const merged = { ...JSON.parse(existing), ...JSON.parse(value) };
        localStorage.setItem(key, JSON.stringify(merged));
      } else {
        localStorage.setItem(key, value);
      }
      return Promise.resolve();
    } catch {
      return Promise.resolve();
    }
  },
  clear: () => {
    try {
      localStorage.clear();
      return Promise.resolve();
    } catch {
      return Promise.resolve();
    }
  },
  getAllKeys: () => {
    try {
      return Promise.resolve(Object.keys(localStorage));
    } catch {
      return Promise.resolve([]);
    }
  },
  multiGet: (keys) => {
    try {
      const result = keys.map((key) => [key, localStorage.getItem(key)]);
      return Promise.resolve(result);
    } catch {
      return Promise.resolve(keys.map((key) => [key, null]));
    }
  },
  multiSet: (keyValuePairs) => {
    try {
      keyValuePairs.forEach(([key, value]) => localStorage.setItem(key, value));
      return Promise.resolve();
    } catch {
      return Promise.resolve();
    }
  },
  multiRemove: (keys) => {
    try {
      keys.forEach((key) => localStorage.removeItem(key));
      return Promise.resolve();
    } catch {
      return Promise.resolve();
    }
  },
};

export default AsyncStorage;
