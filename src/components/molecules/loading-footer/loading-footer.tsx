import { Style } from "@styles/index";
import * as React from "react";
import { ActivityIndicator, Animated, StyleSheet, Text, View } from "react-native";
import { LoadingFooterStateType, NormalFooter } from "react-native-spring-scrollview";

export default class YulifeLoadingFooter extends NormalFooter {
  private timer: NodeJS.Timer;

  public componentDidUpdate(_: any, prevState: LoadingFooterStateType) {
    if (this.state.status === "rebound" && prevState.status !== "rebound") {
      this.timer = setTimeout(
        () =>
          this.setState({
            status: "releaseRebound",
          }),
        400
      );
    }
  }

  public componentWillUnmount() {
    clearTimeout(this.timer);
  }

  public render() {
    return (
      <View style={styles.container}>
        {this.renderIcon()}
        <View style={styles.rContainer}>
          <Text style={styles.text}>{this.getTitle()}</Text>
        </View>
      </View>
    );
  }

  private renderIcon = () => {
    const s = this.state.status;
    if (s === "allLoaded") {
      return null;
    }

    if (s === "loading" || s === "rebound") {
      return <ActivityIndicator color={"gray"} />;
    }

    const { maxHeight, offset } = this.props;
    return (
      <Animated.Image
        source={require("../../../../node_modules/react-native-spring-scrollview/Customize/res/arrow.png")}
        style={{
          transform: [
            {
              rotate: offset.interpolate({
                inputRange: [-maxHeight - 1 - 10, -maxHeight - 10, -50, -49],
                outputRange:
                  s === "releaseRebound" ? ["180deg", "180deg", "0deg", "0deg"] : ["0deg", "0deg", "180deg", "180deg"],
              }),
            },
          ],
        }}
      />
    );
  };

  private getTitle = () => {
    const s = this.state.status;

    if (s === "dragging" || s === "waiting") {
      return "Drag up to load";
    }

    if (s === "draggingEnough") {
      return "Release to load";
    }

    if (s === "loading") {
      return "Loading ...";
    }

    if (s === "draggingCancel") {
      return "Give up loading";
    }

    if (s === "rebound") {
      return "Loading completed";
    }

    if (s === "releaseRebound") {
      return "Drag down to hide & load again";
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  rContainer: {
    marginLeft: 20,
  },
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginVertical: 5,
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    width: 140,
  },
});
