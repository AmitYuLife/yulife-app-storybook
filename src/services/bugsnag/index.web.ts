import type Bugsnag from "@bugsnag/expo";

export type BugsnagClient = typeof Bugsnag;

// @bugsnag/expo doesn't run on web. The native `index.ts` returns `undefined`, but every caller
// does `getClient().leaveBreadcrumb(...)` etc. — that crashes the saga channel and kills the
// entire saga middleware (no GraphQL, no hero cards, dead app shell). Return a Proxy stub so
// every method/property access is a safe no-op.
const webStub = new Proxy(
  {},
  {
    get:
      () =>
      (..._args: unknown[]): undefined =>
        undefined,
  }
) as unknown as BugsnagClient;

export default function getClient(): BugsnagClient {
  return webStub;
}
