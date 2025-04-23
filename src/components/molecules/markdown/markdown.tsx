import { Text } from "@atoms/index";
import React from "react";
import { StyleSheet, View, Image, StyleProp, ViewStyle, Linking } from "react-native";
import SimpleMarkdown from "simple-markdown";
import getMarkdownStyles from "./markdown.styles";
import { TouchableOpacityWithDelay } from "@molecules";

interface IProps {
  text: string;
  markdownStyles?: StyleProp<any>;
  containerStyle?: ViewStyle;
  linkActions?: Record<string, any>;
  testID?: string;
}

interface IState {
  syntaxTree: React.ReactElement[];
  styles: StyleProp<any>;
}

interface IExtras {
  style?: StyleProp<any>;
  isOrdered?: boolean;
  isParagraph?: boolean;
}

class Markdown extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const syntaxTree = SimpleMarkdown.markdownToReact(this.props.text) as React.ReactElement[];

    this.state = {
      syntaxTree,
      styles: StyleSheet.create(getMarkdownStyles(this.props.markdownStyles)),
    };
  }

  componentDidUpdate(prevProps: IProps) {
    if (this.props.text !== prevProps.text) {
      this.setState({
        syntaxTree: SimpleMarkdown.markdownToReact(this.props.text) as React.ReactElement[],
      });
    }

    if (this.props.markdownStyles !== prevProps.markdownStyles) {
      this.setState({
        styles: StyleSheet.create(getMarkdownStyles(this.props.markdownStyles)),
      });
    }
  }

  renderImage(node: React.ReactElement, key: string) {
    const { styles } = this.state;

    return (
      <View style={styles.imageWrapper} key={"imageWrapper_" + key}>
        <Image source={{ uri: node.props.src }} style={styles.image} />
      </View>
    );
  }

  renderLine(key: string) {
    const { styles } = this.state;

    return <View style={styles.hr} key={"hr_" + key} />;
  }

  renderList(node: React.ReactElement, key: string, isOrdered: boolean) {
    const { styles } = this.state;

    return (
      <View key={"list_" + key} style={styles.list}>
        {this.renderNodes(node.props.children, key, { isOrdered })}
      </View>
    );
  }

  renderListBullet(isOrdered: boolean, index: number) {
    const { styles } = this.state;

    if (isOrdered) {
      return (
        <Text key={"listBullet_" + index} style={styles.listItemNumber}>
          {index + 1 + "."}
        </Text>
      );
    }

    return <View key={"listBullet_" + index} style={styles.listItemBullet} />;
  }

  renderListItem(node: React.ReactElement, key: string, index: number, extras: IExtras) {
    const { styles } = this.state;
    const children = this.renderNodes(node.props.children, key, extras);

    return (
      <View style={styles.listItem} key={"listItem_" + key}>
        {this.renderListBullet(extras.isOrdered, index)}
        <View key={"listItemContent_" + key} style={styles.listItemContent}>
          <Text>{children}</Text>
        </View>
      </View>
    );
  }

  renderText(node: React.ReactElement, key: string, extras: IExtras) {
    const { styles } = this.state;
    const style = [styles.text].concat(extras?.style || []);

    if (node.props) {
      return (
        <Text key={key} style={style}>
          {this.renderNodes(node.props.children, key, extras)}
        </Text>
      );
    }

    return (
      <Text key={key} style={style}>
        {node}
      </Text>
    );
  }

  renderLink(node: React.ReactElement, key: string) {
    const { styles } = this.state;
    const { linkActions } = this.props;

    return (
      <TouchableOpacityWithDelay
        style={styles.linkWrapper}
        key={"linkWrapper_" + key}
        onPress={() => {
          const action = linkActions && linkActions[node.props.href];

          if (action && typeof action === "function") {
            action();
          } else {
            Linking.openURL(node.props.href).catch(() => {
              // do nothing
            });
          }
        }}
      >
        {this.renderNodes(node.props.children, key, concatStyles(null, styles.link))}
      </TouchableOpacityWithDelay>
    );
  }

  renderInlineLink(node: React.ReactElement, key: string, extras: IExtras) {
    const { styles } = this.state;
    const { linkActions } = this.props;

    const noPress = styles.link.pointerEvents === "none";

    if (node.props) {
      return (
        <Text
          style={styles.link}
          key={key}
          onPress={
            noPress
              ? null
              : () => {
                  const action = linkActions && linkActions[node.props.href];

                  if (action && typeof action === "function") {
                    action();
                  } else {
                    Linking.openURL(node.props.href).catch(() => {
                      // do nothing
                    });
                  }
                }
          }
        >
          {this.renderNodes(node.props.children, key, extras)}
        </Text>
      );
    }

    return null;
  }

  renderBlock(node: React.ReactElement, key: string, extras: IExtras) {
    const { styles } = this.state;

    return (
      <View key={"block_" + key} style={styles.block}>
        {this.renderNodes(node.props.children, key, extras)}
      </View>
    );
  }

  renderNode(node: React.ReactElement, key: string, index: number, extras: IExtras) {
    // we can't use `!node` because node can be `0` and it won't be rendered
    if (node === null || (node as any) === "undefined" || (node as any) === "" || node === undefined) {
      return null;
    }

    const { styles } = this.state;

    switch (node.type) {
      case "h1":
        return this.renderText(node, key, concatStyles(extras, styles.h1));
      case "h2":
        return this.renderText(node, key, concatStyles(extras, styles.h2));
      case "h3":
        return this.renderText(node, key, concatStyles(extras, styles.h3));
      case "h4":
        return this.renderText(node, key, concatStyles(extras, styles.h4));
      case "h5":
        return this.renderText(node, key, concatStyles(extras, styles.h5));
      case "hr":
        return this.renderLine(key);
      case "div":
        // Handle paragraphs
        if (node.props.className === "paragraph") {
          return this.renderText(node, key, {
            ...extras,
            style: styles?.paragraph,
            isParagraph: true,
          });
        }

        return this.renderBlock(node, key, extras);
      case "ul":
        return this.renderList(node, key, false);
      case "ol":
        return this.renderList(node, key, true);
      case "li":
        return this.renderListItem(node, key, index, extras);
      case "a":
        return this.renderInlineLink(node, key, concatStyles(extras, styles.link));
      case "img":
        return this.renderImage(node, key);
      case "strong":
        return this.renderText(node, key, concatStyles(extras, styles.strong));
      case "del":
        return this.renderText(node, key, concatStyles(extras, styles.del));
      case "em":
        return this.renderText(node, key, concatStyles(extras, styles.em));
      case "u":
        return this.renderText(node, key, concatStyles(extras, styles.u));
      case undefined:
        return this.renderText(node, key, extras);
      default:
        return null;
    }
  }

  renderNodes(nodes: React.ReactElement[], key?: string, extras?: any) {
    return nodes.map((node, index) => {
      const newKey = key ? key + "_" + index : index + "";
      return this.renderNode(node, newKey, index, extras);
    });
  }

  render() {
    const { containerStyle = {} } = this.props;
    return <View style={containerStyle}>{this.renderNodes(this.state.syntaxTree, null, null)}</View>;
  }
}

export default Markdown;

const concatStyles = (extras: IExtras, newStyle: StyleProp<any>) => {
  if (extras) {
    const newExtras = Object.assign({}, extras);

    if (Array.isArray(extras.style)) {
      newExtras.style.push(newStyle);
    } else {
      newExtras.style = [newStyle];
    }

    return newExtras;
  }

  return {
    style: [newStyle],
  };
};
