// Web config — mirrors .env.e2e values for local development
// Use same-origin paths — webpack dev server proxies to the real API
// This avoids CORS issues with custom headers (date, app_version, etc.)
export const Config = {
  API_URL: "http://localhost:5000",
  API_URL_UK: "http://localhost:5000",
  API_URL_US: "http://localhost:5001",
  API_URL_SA: "http://localhost:5002",
  API_URL_JP: "http://localhost:5003",
  API_URL_KSA: "",
  ENV: "dev",
  USE_NEW_LOGIN_FLOW: "true",
  YU_CLIENT_TOKEN: "web-dev-token",
};
export default Config;
