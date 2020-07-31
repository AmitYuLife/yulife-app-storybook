import { ApolloLink, Observable, Operation } from "apollo-link";
import { ApolloRequestPayload } from "@redux/app/app.actions";

interface OldApolloRequestPayload extends ApolloRequestPayload {
  started: boolean;
  completed: boolean;
}
type onEventFunc = (info: OldApolloRequestPayload) => void;

/**
 * @deprecated Now we use apollo-link-error + apollo-link-retry
 * @param onEvent
 */
export const onRequest = (onEvent: onEventFunc): ApolloLink => {
  let count = 0;
  return new ApolloLink((operation, forward) => {
    return new Observable((observer) => {
      let sub: any; // tslint:disable-line;
      count++;
      onEvent(mapResponse(operation, count, true, false));
      try {
        sub = forward(operation).subscribe({
          next: async (result) => {
            count--;
            onEvent(mapResponse(operation, count, true, true, false, result));
            observer.next(result);
          },
          error: (networkError) => {
            count--;
            onEvent(mapResponse(operation, count, true, true, true, null));
            observer.error(networkError);
          },
          complete: observer.complete.bind(observer),
        });
      } catch (e) {
        count--;
        onEvent(mapResponse(operation, count, true, false, e));
        observer.error(e);
      }

      return () => {
        if (sub) {
          sub.unsubscribe();
        }
      };
    });
  });
};

const mapResponse = (
  operation: Operation,
  currentRequestCount: number,
  started: boolean,
  completed: boolean,
  networkError?: boolean,
  result?: {}
): OldApolloRequestPayload => ({
  // tslint:disable-line;
  operation,
  currentRequestCount,
  started,
  completed,
  networkError,
  result,
});
