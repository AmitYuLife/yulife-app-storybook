import { RetryLink } from "@apollo/client/link/retry";
import moment from "moment";

export const MAX_OPERATIONS_ATTEMPTS = 3;
const MAX_RESPONSE_TIME = 30; // seconds

const BLACKLIST_RETRY_OPERATIONS = [
  "SaveAvatar",
  "GetMobileCopy",
  "CreateActiveChallenge",
  "CreateMobileQuestLevelChallenge",
  "RedeemMobileSduiReward",
  "SubscribeToPerk",
  "LoginUser",
  "SubmitSduiJourney",
];

const retryLink = (showOfflineScreen: () => void) => {
  return new RetryLink({
    delay: (count, operation) => {
      operation.setContext({ retries: count });

      // First error wait max 1 sec to retry operation (random to avoid thundering herd: https://en.wikipedia.org/wiki/Thundering_herd_problem )
      if (count === 1) {
        return 1000 * Math.random();
      }

      // If second time wait something between 3,4 sec
      if (count >= 2) {
        return 3000 + Math.random() * 1000;
      }

      return 0;
    },
    attempts: {
      retryIf: (error, _operation) => {
        // if a request is blacklisted - do not retry
        const isBlackListed = BLACKLIST_RETRY_OPERATIONS.includes(_operation.operationName);

        if (isBlackListed) {
          return false;
        }

        const { retries = 0, headers } = _operation.getContext();

        // if a request has been on the fly for more than MAX_RESPONSE_TIME seconds do not retry
        const hasReachedMaxTime = moment().diff(moment(headers.date), "seconds") >= MAX_RESPONSE_TIME;

        if (hasReachedMaxTime) {
          return false;
        }

        const maxAttemptReached = retries >= MAX_OPERATIONS_ATTEMPTS;

        if (!maxAttemptReached) {
          return true;
        }

        const hasConnectionIssue = error.toString().includes("Network request failed") && maxAttemptReached;

        if (hasConnectionIssue) {
          showOfflineScreen();
        }

        return hasConnectionIssue;
      },
    },
  });
};

export default retryLink;
