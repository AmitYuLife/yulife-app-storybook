export enum YuHealthStatus {
  /**
   * Fully ready to query
   */
  ready = "ready",
  /**
   * Currently authorising with a provider
   */
  authorising = "authorising",
  /**
   * Fetching availability status
   */
  loading = "loading",
  /**
   * After availability status, but no active provider set
   */
  providerless = "no_provider",
  /**
   * We fucked up.
   */
  error = "error",
}
