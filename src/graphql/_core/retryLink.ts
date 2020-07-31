import { RetryLink } from "apollo-link-retry";

export const MAX_OPERATIONS_ATTEMPTS = 4;
const BLACKLIST_RETRY_OPERATIONS = ["SaveAvatar"];

const retryLink = new RetryLink({
  delay: (count, operation) => {
    operation.setContext({ retries: count });
    // First error wait max 1 sec to retry operation (random to avoid thundering herd: https://en.wikipedia.org/wiki/Thundering_herd_problem )
    if (count === 1) {
      return count * 1000 * Math.random();
    }

    // If second time wait something between 4,5 sec
    if (count === 2) {
      return 4000 + Math.random() * 1000;
    }

    // If 3 time wait 9 to 10 sec
    if (count === 3) {
      return 9000 + Math.random() * 1000;
    }

    return 0;
  },
  attempts: {
    max: MAX_OPERATIONS_ATTEMPTS,
    retryIf: (error, _operation) => {
      const isBlackListed = BLACKLIST_RETRY_OPERATIONS.includes(_operation.operationName);
      if (isBlackListed) {
        _operation.setContext({ completed: true });
      }

      const retry = !!error && !isBlackListed;
      return retry;
    },
  },
});

export default retryLink;
