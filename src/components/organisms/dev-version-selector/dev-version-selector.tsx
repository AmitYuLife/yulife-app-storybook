import { TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { getUserFeatures } from "@redux/user/user.selectors";
import { IFeature } from "@redux/user/user.types";
import { Colours, Style, TOP_BAR, TemplateTextType } from "@styles";
import { FC, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Config from "react-native-config";
import { useSelector } from "react-redux";

interface Props {
  defaultVersion: string;
  version: string;
  setVersion: React.Dispatch<React.SetStateAction<string>>;
  feature: keyof IFeature;
  options: string[];
  marginTop: number;
  optionsPrefix?: string;
  textTemplateType: TemplateTextType;
}

const DevVersionSelector: FC<Props> = ({
  defaultVersion,
  version,
  setVersion,
  feature,
  options,
  marginTop,
  optionsPrefix,
  textTemplateType,
}) => {
  const features = useSelector(getUserFeatures);
  const showSelector = features[feature] && Config.ENV !== "production";

  useEffect(() => {
    if ((!showSelector || !options.includes(version)) && version !== defaultVersion) {
      setVersion(defaultVersion);
    }
  }, [showSelector, version, defaultVersion, setVersion, options]);

  if (!showSelector) {
    return null;
  }

  return (
    <View style={[styles.container, { marginTop: Style.adjust(marginTop) + TOP_BAR.TOP_BAR_WITH_PAD }]}>
      {options.map((versionAvailable) =>
        version === versionAvailable ? (
          <View style={styles.buttonWrapper} key={`version-${versionAvailable}`}>
            <View style={styles.selectedShadow} />
            <View style={styles.selected}>
              <TextTemplate type={textTemplateType} textAlign="left" color={Colours.neutral.white}>{`${
                optionsPrefix || ""
              }${versionAvailable}`}</TextTemplate>
            </View>
          </View>
        ) : (
          <View style={styles.buttonWrapper} key={`version-${versionAvailable}`}>
            <TouchableOpacityWithDelay onPress={() => setVersion(versionAvailable)}>
              <View style={styles.buttonShadow} />
              <View style={styles.button}>
                <TextTemplate type={textTemplateType} textAlign="left" color={Colours.neutral.white}>{`${
                  optionsPrefix || ""
                }${versionAvailable}`}</TextTemplate>
              </View>
            </TouchableOpacityWithDelay>
          </View>
        )
      )}
    </View>
  );
};

export default DevVersionSelector;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: Style.adjust(-5),
  },
  buttonWrapper: {
    marginBottom: Style.adjust(12),
  },
  button: {
    backgroundColor: Colours.metallic.m300,
    width: Style.adjust(44),
    height: Style.adjust(36),
    padding: Style.adjust(6),
    paddingStart: Style.adjust(12),
    borderTopRightRadius: Style.adjust(18),
    borderBottomRightRadius: Style.adjust(18),
  },
  buttonShadow: {
    backgroundColor: Colours.metallic.m500,
    width: Style.adjust(44),
    height: Style.adjust(36),
    padding: Style.adjust(6),
    paddingStart: Style.adjust(12),
    borderTopRightRadius: Style.adjust(18),
    borderBottomRightRadius: Style.adjust(18),
    position: "absolute",
    top: Style.adjust(4),
  },
  selected: {
    backgroundColor: Colours.primary.p600,
    width: Style.adjust(44),
    height: Style.adjust(36),
    padding: Style.adjust(6),
    paddingStart: Style.adjust(12),
    borderTopRightRadius: Style.adjust(18),
    borderBottomRightRadius: Style.adjust(18),
  },
  selectedShadow: {
    backgroundColor: Colours.primary.p600Shadow,
    width: Style.adjust(44),
    height: Style.adjust(36),
    padding: Style.adjust(6),
    paddingStart: Style.adjust(12),
    borderTopRightRadius: Style.adjust(18),
    borderBottomRightRadius: Style.adjust(18),
    position: "absolute",
    top: Style.adjust(4),
  },
});
