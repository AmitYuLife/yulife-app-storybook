import { Colours, Style, StyleSheet } from "@styles";
import { ScrollView, View, ViewStyle } from "react-native";

interface IProps {
  children: React.ReactNode;
}
const Modal = ({ children }: IProps) => {
  return (
    <View style={styles.bottomWrapper}>
      <View style={styles.overshootCushion}>
        <View style={styles.safeAreaView}>
          <View style={styles.innerWrapper}>
            <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
              {children}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  bottomWrapper: {
    position: "absolute",
    start: 0,
    end: 0,
    bottom: 0,
  },
  overshootCushion: {
    paddingTop: Style.adjust(40),
  },
  safeAreaView: {
    backgroundColor: Colours.neutral.white,
    borderTopLeftRadius: Style.adjust(16),
    borderTopRightRadius: Style.adjust(16),
  } as ViewStyle,
  innerWrapper: {
    paddingHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(40),
    maxHeight: Style.DEVICE_HEIGHT / 1.2,
    minHeight: Style.DEVICE_HEIGHT / 3,
  },
});
