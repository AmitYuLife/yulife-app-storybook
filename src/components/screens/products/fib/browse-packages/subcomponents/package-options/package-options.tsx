import React, { memo } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { TouchableOpacityWithDelay } from "@components/molecules";
import styles from "./package-options.styles";

const data = [
  {
    id: "commonPackage",
    type: "Common",
    color: "#00ED9D",
    source: require("../../../../../../../../assets/fib/browse-packages/common-chest.png"),
    shadow: "rgba(166, 255, 224, 0.33)",
    selectedBackground: "rgba(167, 253, 224, 0.45)",
  },
  {
    id: "rarePackage",
    type: "Rare",
    color: "#00C0F3",
    source: require("../../../../../../../../assets/fib/browse-packages/rare-passive.png"),
    shadow: "rgba(0, 192, 243, 0.1)",
    selectedBackground: "rgba(138, 230, 255, 0.31)",
  },
  {
    id: "epicPackage",
    type: "Epic",
    color: "#956AFF",
    source: require("../../../../../../../../assets/fib/browse-packages/epic-passive.png"),
    shadow: "#E1D5FF",
    selectedBackground: "rgba(210, 194, 253, 0.5)",
  },
];

interface Props {
  onSelectPackage: (packageType: string) => void;
  selectedPackageId: string;
  filterBySelected?: boolean;
}

export const PackageOptions = memo(function (props: Props) {
  const { onSelectPackage, selectedPackageId, filterBySelected } = props;

  const options = filterBySelected ? data.filter((i) => filterBySelected && i.type === selectedPackageId) : data;
  const wrapper = filterBySelected ? styles.componentWrapperFiltered : styles.componentWrapper;

  return (
    <View style={styles.wrapper}>
      {options.map((item) => {
        const isPackageActive = item.type === selectedPackageId;
        return (
          <TouchableOpacityWithDelay key={item.id} style={wrapper} onPress={() => onSelectPackage(item.type)}>
            <View style={wrapper}>
              {!isPackageActive ? (
                <>
                  <View style={styles.armourWrapper}>
                    <Image
                      style={item.type === "Epic" ? styles.imagePassiveEpicPackage : styles.imagePassivePackage}
                      source={item.source}
                    />
                  </View>
                  <Text style={StyleSheet.flatten([styles.packageText, { color: item.color }])}>{item.type}</Text>
                  <View style={styles.transparentView} />
                </>
              ) : (
                <>
                  <View
                    style={StyleSheet.flatten([
                      styles.selectedBackground,
                      { backgroundColor: item.selectedBackground },
                    ])}
                  />
                  <View style={styles.armourWrapperActive}>
                    <View
                      style={StyleSheet.flatten([styles.selectedBackgroundAbsolute, { backgroundColor: item.shadow }])}
                    />
                    <Image
                      style={item.type === "Epic" ? styles.imageActiveEpicPackage : styles.imageActivePackage}
                      source={item.source}
                    />
                  </View>
                  <Text style={StyleSheet.flatten([styles.packageTextActive, { color: item.color }])}>{item.type}</Text>
                </>
              )}
            </View>
          </TouchableOpacityWithDelay>
        );
      })}
    </View>
  );
});
