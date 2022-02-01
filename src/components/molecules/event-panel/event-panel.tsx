import React, { memo, useCallback, useMemo } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { ArrowRight } from "@atoms/icon/arrow-right";
import { PressableWithDelay } from "@molecules";

interface IEvent {
  key?: string;
  title: string;
  challenges: {
    icon: string;
    description: string;
  };
  tags: {
    icon?: string;
    tag: string;
    joined?: string;
  };
}

interface IProps {
  events: IEvent[];
  currentWorld: number;
}

const CARD_WIDTH = Style.DEVICE_WIDTH * 0.8;
const DUMMY_CARD = (Style.DEVICE_WIDTH - CARD_WIDTH) / 2;

const EventPanel = ({ events, currentWorld }: IProps) => {
  const { wrapper, container } = getCurrentWorldStyle(currentWorld);
  const fontColour = useMemo(() => (currentWorld === 1 ? Colours.neutral.white : Colours.neutral.n800), [currentWorld]);
  const eventsWithDummy: Partial<Event>[] = useMemo(() => [{ key: "left-dummy" }, ...events, { key: "right-dummy" }], [
    events,
  ]);

  const Event = useCallback(({ item }) => {
    if (item?.key) {
      return <View style={{ width: DUMMY_CARD }} />;
    }

    return (
      <PressableWithDelay onPress={() => console.log("some action")} style={{ width: CARD_WIDTH }}>
        <View style={[styles.wrapper, wrapper]}>
          <View style={[styles.container, container]}>
            <View style={styles.header}>
              <TextTemplate type="b1b" color={fontColour}>
                {item.title}
              </TextTemplate>
              <ArrowRight color={Colours.neutral.white} withBackground={true} />
            </View>
            <View style={styles.challenges}>
              <Image
                source={{ uri: item.challenges.icon }}
                width={Style.adjust(16)}
                height={Style.adjust(16)}
                style={styles.challengeIcon}
              />
              <TextTemplate type="l1" color={fontColour}>
                {item.challenges.description}
              </TextTemplate>
            </View>
            <View style={styles.progressBar}>
              <TextTemplate type="l1">Progress bar</TextTemplate>
            </View>
            <View style={styles.tags}>
              <View style={styles.statistics}>
                <Image
                  source={{ uri: item.tags.icon }}
                  width={Style.adjust(16)}
                  height={Style.adjust(16)}
                  style={styles.challengeIcon}
                />
                <TextTemplate type="l1b" color={fontColour}>
                  {item?.tags?.tag}
                </TextTemplate>
              </View>
              {!item?.tags?.joined ? null : (
                <TextTemplate type="l1b" color={fontColour}>
                  {item.tags.joined}
                </TextTemplate>
              )}
            </View>
          </View>
        </View>
      </PressableWithDelay>
    );
  }, []);

  return (
    <FlatList
      data={eventsWithDummy}
      horizontal={true}
      pagingEnabled={false}
      decelerationRate={0.9}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH}
      keyExtractor={(_, index) => index.toString()}
      renderItem={Event}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minHeight: Style.adjust(143),
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
  },
  container: {
    width: "100%",
    minHeight: Style.adjust(128),
    padding: Style.adjust(16),
    borderWidth: 1,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  challenges: {
    flexDirection: "row",
    marginTop: Style.adjust(8),
  },
  challengeIcon: {
    marginRight: Style.adjust(4),
  },
  progressBar: {
    width: "100%",
    height: 20,
    backgroundColor: Colours.neutral.white,
    marginTop: Style.adjust(8),
  },
  tags: {
    flexDirection: "row",
    marginTop: Style.adjust(8),
    justifyContent: "space-between",
  },
  statistics: {
    flexDirection: "row",
  },
});

const getCurrentWorldStyle = (world: number) => {
  switch (world) {
    case 1:
      return {
        wrapper: {
          backgroundColor: Colours.ocean.up202,
        },
        container: {
          borderColor: Colours.ocean.up202,
          backgroundColor: Colours.ocean.up203,
        },
      };
    case 2:
      return {
        wrapper: {
          backgroundColor: "#F3EDD1",
        },
        container: {
          borderColor: "#F3EDD1",
          backgroundColor: "#FFFBE9",
        },
      };
    case 3:
      return {
        wrapper: {
          backgroundColor: "#F4D1DB",
        },
        container: {
          borderColor: "#F4D1DB",
          backgroundColor: "#FFE7EC",
        },
      };
    case 0:
    default:
      return {
        wrapper: {
          backgroundColor: "#EDEDD1",
        },
        container: {
          borderColor: "#EDEDD1",
          backgroundColor: "#FFFFE5",
        },
      };
  }
};

export default memo(EventPanel);
