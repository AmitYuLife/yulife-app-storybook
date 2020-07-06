import React, { memo } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import styles from "./package-options.styles";

const data = [
  {
    id: "commonPackage",
    type: "Common",
    color: "#00ED9D",
    source: require("../../../../../../../../assets/fib/browse-packages/common-chest.png"),
    shadow: "rgba(166, 255, 224, 0.33)",
    selectedBackground: "rgba(167, 253, 224, 0.45)",
    earnRate: 10,
  },
  {
    id: "rarePackage",
    type: "Rare",
    color: "#00C0F3",
    source: require("../../../../../../../../assets/fib/browse-packages/rare-passive.png"),
    shadow: "rgba(0, 192, 243, 0.1)",
    selectedBackground: "rgba(138, 230, 255, 0.31)",
    earnRate: 20,
  },
  {
    id: "epicPackage",
    type: "Epic",
    color: "#956AFF",
    source: require("../../../../../../../../assets/fib/browse-packages/epic-passive.png"),
    shadow: "#E1D5FF",
    selectedBackground: "rgba(210, 194, 253, 0.5)",
    earnRate: 30,
  },
];

interface Props {
  onSelectPackage: (packageType: string) => void;
  selectedPackageId: string;
}

export const PackageOptions = memo(function (props: Props) {
  const { onSelectPackage, selectedPackageId } = props;

  return (
    <View style={styles.wrapper}>
      {data.map((item) => {
        const isPackageActive = item.type === selectedPackageId;
        return (
          <TouchableOpacity key={item.id} style={styles.componentWrapper} onPress={() => onSelectPackage(item.type)}>
            <View style={styles.componentWrapper}>
              {!isPackageActive ? (
                <>
                  <View style={styles.armourWrapper}>
                    <Image
                      style={item.type === "Epic" ? styles.imagePassiveEpicPackage : styles.imagePassivePackage}
                      source={item.source}
                    />
                    <View style={item.type === "Epic" ? styles.rateViewEpicPackage : styles.rateView}>
                      <Text style={styles.rateText}>{`${item.earnRate}x`}</Text>
                    </View>
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
                    <View style={styles.rateViewActive}>
                      <Text style={styles.rateTextActive}>{`${item.earnRate}x`}</Text>
                    </View>
                  </View>
                  <Text style={StyleSheet.flatten([styles.packageTextActive, { color: item.color }])}>{item.type}</Text>
                </>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
});
