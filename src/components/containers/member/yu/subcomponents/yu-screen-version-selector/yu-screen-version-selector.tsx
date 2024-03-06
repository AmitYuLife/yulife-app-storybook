import { TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { getUserFeatures } from "@redux/user/user.selectors";
import { Colours, Style } from "@styles";
import { FC, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Config from "react-native-config";
import { useSelector } from "react-redux";

const VERSIONS_AVAILABLE = ["4", "5a"] as const;
export type YuScreenVersion = typeof VERSIONS_AVAILABLE[number];

interface Props {
  version: YuScreenVersion;
  setVersion: React.Dispatch<React.SetStateAction<YuScreenVersion>>;
}

export const YuScreenVersionSelector: FC<Props> = ({ version, setVersion }) => {
  const { tempEnableYuScreenV5 } = useSelector(getUserFeatures);
  const showSelector = tempEnableYuScreenV5 && Config.ENV !== "production";

  useEffect(() => {
    if (!showSelector || !VERSIONS_AVAILABLE.includes(version)) {
      setVersion("4");
    }
  }, [showSelector, version, setVersion]);

  if (!showSelector) {
    return null;
  }

  return (
    <View style={styles.container}>
      {VERSIONS_AVAILABLE.map((versionAvailable) =>
        version === versionAvailable ? (
          <View style={styles.buttonWrapper} key={`version-${versionAvailable}`}>
            <View style={styles.selectedShadow} />
            <View style={styles.selected}>
              <TextTemplate
                type={"b1b"}
                textAlign="left"
                color={Colours.neutral.white}
              >{`v${versionAvailable}`}</TextTemplate>
            </View>
          </View>
        ) : (
          <View style={styles.buttonWrapper} key={`version-${versionAvailable}`}>
            <TouchableOpacityWithDelay onPress={() => setVersion(versionAvailable)}>
              <View style={styles.buttonShadow} />
              <View style={styles.button}>
                <TextTemplate
                  type={"b1b"}
                  textAlign="left"
                  color={Colours.neutral.white}
                >{`v${versionAvailable}`}</TextTemplate>
              </View>
            </TouchableOpacityWithDelay>
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: Style.adjust(110),
    left: Style.adjust(-5),
  },
  buttonWrapper: {
    marginBottom: Style.adjust(12),
  },
  button: {
    backgroundColor: Colours.metallic.m300,
    width: Style.adjust(56),
    height: Style.adjust(36),
    padding: Style.adjust(6),
    paddingLeft: Style.adjust(12),
    borderTopRightRadius: Style.adjust(18),
    borderBottomRightRadius: Style.adjust(18),
  },
  buttonShadow: {
    backgroundColor: Colours.metallic.m500,
    width: Style.adjust(56),
    height: Style.adjust(36),
    padding: Style.adjust(6),
    paddingLeft: Style.adjust(12),
    borderTopRightRadius: Style.adjust(18),
    borderBottomRightRadius: Style.adjust(18),
    position: "absolute",
    top: Style.adjust(4),
  },
  selected: {
    backgroundColor: Colours.primary.p600,
    width: Style.adjust(56),
    height: Style.adjust(36),
    padding: Style.adjust(6),
    paddingLeft: Style.adjust(12),
    borderTopRightRadius: Style.adjust(18),
    borderBottomRightRadius: Style.adjust(18),
  },
  selectedShadow: {
    backgroundColor: Colours.primary.p600Shadow,
    width: Style.adjust(56),
    height: Style.adjust(36),
    padding: Style.adjust(6),
    paddingLeft: Style.adjust(12),
    borderTopRightRadius: Style.adjust(18),
    borderBottomRightRadius: Style.adjust(18),
    position: "absolute",
    top: Style.adjust(4),
  },
});
