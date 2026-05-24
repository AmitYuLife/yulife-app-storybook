import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Image, View } from "react-native";
import { Player } from "@lottiefiles/react-lottie-player";

/**
 * Storybook web stub for lottie-react-native.
 *
 * Rendering strategy:
 *  1. Resolve the source from whatever webpack / RN hands us
 *     (URL string, { uri } object, or raw JSON object).
 *  2. Render using @lottiefiles/react-lottie-player.
 *  3. On load error, fall back to a companion PNG when one is listed in
 *     LOTTIE_PNG_FALLBACKS (e.g. yuniversal_1.json → yuniversal_1.png).
 *  4. Expose the lottie-react-native imperative handle so callers can call
 *     play/reset/pause/resume without errors.
 */

/**
 * Subset of Lottie JSON assets that have a companion static PNG served by
 * Storybook's staticDirs.  Keys are substrings matched against the resolved
 * source URL.  Only assets with actual siblings in assets/yuniversal/ are listed.
 */
const LOTTIE_PNG_FALLBACKS = {
  yuniversal_1: "/assets/yuniversal/yuniversal_1.png",
};

function resolveSource(source) {
  if (typeof source === "string") return source;
  if (source && typeof source === "object" && "uri" in source && source.uri) return source.uri;
  // Raw JSON object from webpack (require("./anim.json") → object)
  if (source && typeof source === "object") return source;
  return null;
}

function findPngFallback(resolvedSrc) {
  if (typeof resolvedSrc !== "string") return null;
  for (const [key, png] of Object.entries(LOTTIE_PNG_FALLBACKS)) {
    if (resolvedSrc.includes(key)) return png;
  }
  return null;
}

const noop = () => undefined;

const LottieView = forwardRef(({ style, testID, source, autoPlay, loop }, ref) => {
  const [lottieError, setLottieError] = useState(false);

  useImperativeHandle(ref, () => ({
    play: noop,
    reset: noop,
    pause: noop,
    resume: noop,
  }));

  const resolved = resolveSource(source);

  if (!resolved) {
    return <View style={style} testID={testID} />;
  }

  const pngFallback = findPngFallback(resolved);

  if (lottieError && pngFallback) {
    return (
      <Image
        source={{ uri: pngFallback }}
        style={[{ position: "absolute", width: "100%", height: "100%" }, style]}
        resizeMode="cover"
        testID={testID}
      />
    );
  }

  // Lottie source: pass URL string or raw JSON object to Player.
  // Player's `src` accepts both a URL string and a parsed JSON object.
  const playerSrc = typeof resolved === "string" ? resolved : source;

  return (
    <View style={[{ overflow: "hidden" }, style]} testID={testID}>
      <Player
        src={playerSrc}
        autoplay={autoPlay}
        loop={loop}
        style={{ width: "100%", height: "100%" }}
        onEvent={(event) => {
          if (event === "error") {
            setLottieError(true);
          }
        }}
      />
    </View>
  );
});

LottieView.displayName = "LottieView";

export { LottieView };
export default LottieView;
