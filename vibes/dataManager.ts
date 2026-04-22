import axios from "axios";
import http from "http";
import https from "https";
import { dataManager, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

// /detox/clear takes ~35s. Node's default http agent keeps sockets alive, so a
// reused socket can race a server-closed one → "socket hang up". Disable
// keepalive and raise the timeout for vibe seeding specifically.
const noKeepAlive = { keepAlive: false };
(http.globalAgent as http.Agent & { keepAlive: boolean }).keepAlive = false;
(https.globalAgent as https.Agent & { keepAlive: boolean }).keepAlive = false;
axios.defaults.httpAgent = new http.Agent(noKeepAlive);
axios.defaults.httpsAgent = new https.Agent(noKeepAlive);
axios.defaults.timeout = 120_000;
axios.defaults.headers.common.Connection = "close";

const DEFAULT_PORT = 5000;
const API_URL = process.env.API_URL || `http://localhost:${DEFAULT_PORT}/`;
const apiUrl = (path: string) => `${API_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;

type ConnectOptions = {
  port?: number;
  skipReseed?: boolean;
};

export async function connectDataManager(
  data: Record<string, unknown>,
  options: ConnectOptions = {},
): Promise<void> {
  const port = options.port ?? DEFAULT_PORT;
  const url = process.env.API_URL || `http://localhost:${port}/`;
  console.log("[vibes] Connecting to API:", url);

  dataManager.addData(data as Parameters<typeof dataManager.addData>[0]);
  await dataManager.connect(url, true);

  if (options.skipReseed) {
    return;
  }

  try {
    await dataManager.reseed();
    console.log("[vibes] Data seeded successfully");
  } catch (error) {
    // /detox/clear is flaky when the local DB has stale rows that escaped
    // TRUNCATE (e.g. from a partial prior seed). A fresh insert then hits a
    // duplicate — the DB is already populated end-to-end, so keep going.
    const message = extractErrorMessage(error);
    if (/duplicate key/i.test(message)) {
      console.warn("[vibes] Re-seed hit a duplicate key — assuming DB is already populated");
      return;
    }
    throw error;
  }
}

/**
 * Insert (or upsert by _id) raw records via the API's `/detox/addRecords`
 * endpoint. Use this mid-test to top up seed data without reseeding everything.
 */
export async function addRecords(records: IDatabaseItem[]): Promise<void> {
  await axios.post(apiUrl("/detox/addRecords"), records).catch(() => undefined);
}

/**
 * Fire a server-side domain event via the API's `/detox/triggerEvent`
 * endpoint. Useful for exercising an `@OnEvent` listener without driving the
 * full UI path that would normally emit it.
 */
export async function triggerEvent<TEvent extends string>(
  eventName: TEvent,
  args: Record<string, unknown>,
): Promise<void> {
  await axios.post(apiUrl("/detox/triggerEvent"), { eventName, args }).catch(() => undefined);
}

function extractErrorMessage(error: unknown): string {
  if (typeof error === "string") return error;
  if (error && typeof error === "object") {
    const e = error as { response?: { data?: unknown }; message?: unknown };
    if (typeof e.response?.data === "string") return e.response.data;
    if (typeof e.message === "string") return e.message;
  }
  return String(error);
}
