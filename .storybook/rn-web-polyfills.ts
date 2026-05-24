import Svg from "react-native-svg";

type SvgHost = {
  setNativeProps?: (props: Record<string, unknown>) => void;
};

/**
 * Reanimated's web runtime calls setNativeProps on SVG nodes inside animated views.
 * react-native-svg forwards those updates to DOM styles in a way that throws on web
 * (`CSSStyleDeclaration` indexed property setter). Swallow those benign failures.
 */
const patchSvgSetNativeProps = () => {
  const prototype = (Svg as unknown as { prototype?: SvgHost }).prototype;
  if (!prototype?.setNativeProps) {
    return;
  }

  const originalSetNativeProps = prototype.setNativeProps;

  prototype.setNativeProps = function patchedSetNativeProps(props: Record<string, unknown>) {
    try {
      originalSetNativeProps.call(this, props);
    } catch {
      // Ignore web-only style application errors from reanimated-driven SVG updates.
    }
  };
};

patchSvgSetNativeProps();
