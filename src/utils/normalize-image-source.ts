/**
 * Normalizes a bundled image source for react-native-web / Storybook.
 * Webpack's file-loader emits URL strings for image assets; react-native-web
 * and expo-image both require `{ uri: string }` — not a bare string — for
 * relative and absolute paths.  Numeric require() IDs (native builds) pass
 * through unchanged, so this function is safe to call on all platforms.
 */

const resolveStorybookAssetPath = (path: string): string => {
  // Webpack module stub URLs (no content hash) resolve to JS, not image bytes.
  // Remap them to Storybook staticDirs copies of the same file.
  const questMapMatch = path.match(/(?:^|\/)quest-map\/episodes\/(.+)$/i);
  if (questMapMatch && !/\.[a-f0-9]{8}\.(webp|png|jpe?g|gif|svg|lottie)$/i.test(path)) {
    return `/assets/quest-map/episodes/${questMapMatch[1]}`;
  }

  const assetsMatch = path.match(/(?:^|\/)assets\/(.+)$/i);
  if (
    assetsMatch &&
    path.includes("/static/media/") &&
    !/\.[a-f0-9]{8}\.(webp|png|jpe?g|gif|svg|lottie)$/i.test(path)
  ) {
    return `/assets/${assetsMatch[1]}`;
  }

  // Webpack file-loader emits hashed filenames (e.g. earth-forest-2.ab12cd34.webp).
  // Storybook's dev server serves these at the origin root, not under /static/media/.
  const hashedAsset = path.match(/[^/]+\.[a-f0-9]{8}\.(webp|png|jpe?g|gif|svg|lottie)$/i)?.[0];
  if (hashedAsset) {
    return `/${hashedAsset}`;
  }

  return path;
};

const toAbsoluteUri = (path: string): string => {
  if (path.startsWith("http")) {
    try {
      const url = new URL(path);
      const remappedPath = resolveStorybookAssetPath(url.pathname);

      if (remappedPath !== url.pathname) {
        return `${url.origin}${remappedPath.startsWith("/") ? remappedPath : `/${remappedPath}`}`;
      }
    } catch {
      // Fall through to return the original absolute URL.
    }

    return path;
  }

  const resolvedPath = resolveStorybookAssetPath(path);

  if (typeof globalThis !== "undefined" && "location" in globalThis) {
    const origin = (globalThis as { location?: { origin?: string } }).location?.origin;
    if (origin) {
      return `${origin}${resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`}`;
    }
  }

  return resolvedPath.startsWith("/") ? resolvedPath : `/${resolvedPath}`;
};

// Intentionally broad: covers ImageSourcePropType (react-native), ImageSource
// (expo-image), and any { uri } object that bundled assets may resolve to.
export type NormalizableSource = number | string | { uri?: string | null; [key: string]: unknown } | null | undefined;

/**
 * Accepts `unknown` so callers don't need to cast their image source type before
 * calling. Cast the return value back to your specific type at the call site,
 * e.g. `normalizeImageSource(src) as ImageSourcePropType`.
 */
export const normalizeImageSource = (source: unknown): NormalizableSource => {
  if (typeof source === "string") {
    return { uri: toAbsoluteUri(source) };
  }

  // Babel/Webpack interop: `require('./img.webp')` can surface as `{ default: string }`.
  if (
    source != null &&
    typeof source === "object" &&
    "default" in source &&
    typeof (source as { default?: unknown }).default === "string"
  ) {
    return { uri: toAbsoluteUri((source as { default: string }).default) };
  }

  if (
    source != null &&
    typeof source === "object" &&
    "uri" in source &&
    typeof (source as { uri?: unknown }).uri === "string"
  ) {
    return { ...(source as { [key: string]: unknown }), uri: toAbsoluteUri((source as { uri: string }).uri) };
  }

  // Number (native require() ID) and everything else passes through unchanged.
  return source as NormalizableSource;
};

/** Returns an absolute URL for a bundled source on web, or null when unavailable. */
export const getBundledImageUri = (source: unknown): string | null => {
  const normalized = normalizeImageSource(source);

  if (typeof normalized === "string") {
    return toAbsoluteUri(normalized);
  }

  if (
    normalized != null &&
    typeof normalized === "object" &&
    "uri" in normalized &&
    typeof (normalized as { uri?: unknown }).uri === "string"
  ) {
    return toAbsoluteUri((normalized as { uri: string }).uri);
  }

  return null;
};
