import { Text } from "@atoms/index";
import React, { createContext, useContext, useMemo } from "react";
import { StyleSheet, View, Image, StyleProp, ViewStyle, Linking } from "react-native";
import SimpleMarkdown from "simple-markdown";
import getMarkdownStyles from "./markdown.styles";

interface IProps {
  text: string;
  markdownStyles?: StyleProp<any>;
  containerStyle?: ViewStyle;
  linkActions?: Record<string, any>;
  testID?: string;
}

interface IExtras {
  style?: StyleProp<any>;
  isOrdered?: boolean;
  isParagraph?: boolean;
}

const Markdown: React.FC<IProps> = ({ text, markdownStyles, containerStyle = {}, linkActions, testID }) => {
  const syntaxTree = useMemo(() => SimpleMarkdown.markdownToReact(text) as React.ReactElement[], [text]);
  // test if this changes when needed, if not need to remove the memoization
  const styles = useMemo(() => StyleSheet.create(getMarkdownStyles(markdownStyles)), [markdownStyles]);
  const context = useMemo(() => ({ styles, linkActions }), [styles, linkActions]);

  return (
    <MarkdownContext.Provider value={context}>
      <View style={containerStyle} testID={testID}>
        {renderNodes(syntaxTree, null, null)}
      </View>
    </MarkdownContext.Provider>
  );
};

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

export const MarkdownContext = createContext<{
  styles: StyleProp<any>;
  linkActions?: Record<string, any>;
}>({
  styles: {},
  linkActions: {},
});

const MarkdownImage = ({ node, key }: { node: React.ReactElement; key: string }) => {
  const { styles } = useContext(MarkdownContext);

  return (
    <View style={styles.imageWrapper} key={"imageWrapper_" + key}>
      <Image source={{ uri: node.props.src }} style={styles.image} />
    </View>
  );
};

const MarkdownLine = ({ key }: { key: string }) => {
  const { styles } = useContext(MarkdownContext);

  return <View style={styles.hr} key={"hr_" + key} />;
};

const MarkdownList = ({ key, node, isOrdered }: { node: React.ReactElement; key: string; isOrdered: boolean }) => {
  const { styles } = useContext(MarkdownContext);

  return (
    <View key={"list_" + key} style={styles.list}>
      {renderNodes(node.props.children, key, { isOrdered })}
    </View>
  );
};

const MarkdownListBullet = ({ isOrdered, index }: { isOrdered: boolean; index: number }) => {
  const { styles } = useContext(MarkdownContext);

  if (isOrdered) {
    return (
      <Text key={"listBullet_" + index} style={styles.listItemNumber}>
        {index + 1 + "."}
      </Text>
    );
  }

  return <View key={"listBullet_" + index} style={styles.listItemBullet} />;
};

const MarkdownListItem = ({
  node,
  key,
  extras,
  index,
}: {
  node: React.ReactElement;
  key: string;
  index: number;
  extras: IExtras;
}) => {
  const { styles } = useContext(MarkdownContext);
  const children = renderNodes(node.props.children, key, extras);

  return (
    <View style={styles.listItem} key={"listItem_" + key}>
      <MarkdownListBullet isOrdered={extras.isOrdered} index={index} />
      <View key={"listItemContent_" + key} style={styles.listItemContent}>
        <Text>{children}</Text>
      </View>
    </View>
  );
};

const MarkdownText = ({ node, key, extras }: { node: React.ReactElement; key: string; extras: IExtras }) => {
  const { styles } = useContext(MarkdownContext);
  const style = [styles.text].concat(extras?.style || []);

  if (node.props) {
    return (
      <Text key={key} style={style}>
        {renderNodes(node.props.children, key, extras)}
      </Text>
    );
  }

  return (
    <Text key={key} style={style}>
      {node}
    </Text>
  );
};

const MarkdownInlineLink = ({ node, key, extras }: { node: React.ReactElement; key: string; extras: IExtras }) => {
  const { styles, linkActions } = useContext(MarkdownContext);
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
                const action = linkActions?.[node.props.href];

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
        {renderNodes(node.props.children, key, extras)}
      </Text>
    );
  }

  return null;
};

const MarkdownBlock = ({ node, key, extras }: { node: React.ReactElement; key: string; extras: IExtras }) => {
  const { styles } = useContext(MarkdownContext);

  return (
    <View key={"block_" + key} style={styles.block}>
      {renderNodes(node.props.children, key, extras)}
    </View>
  );
};

const MarkdownNode = ({
  node,
  key,
  index,
  extras,
}: {
  node: React.ReactElement;
  key: string;
  index: number;
  extras: IExtras;
}) => {
  const { styles } = useContext(MarkdownContext);

  // we can't use `!node` because node can be `0` and it won't be rendered
  if (node === null || (node as any) === "undefined" || (node as any) === "" || node === undefined) {
    return null;
  }

  switch (node.type) {
    case "h1":
      return <MarkdownText node={node} key={key} extras={concatStyles(extras, styles.h1)} />;
    case "h2":
      return <MarkdownText node={node} key={key} extras={concatStyles(extras, styles.h2)} />;
    case "h3":
      return <MarkdownText node={node} key={key} extras={concatStyles(extras, styles.h3)} />;
    case "h4":
      return <MarkdownText node={node} key={key} extras={concatStyles(extras, styles.h4)} />;
    case "h5":
      return <MarkdownText node={node} key={key} extras={concatStyles(extras, styles.h5)} />;
    case "hr":
      return <MarkdownLine key={key} />;
    case "div":
      // Handle paragraphs
      if (node.props.className === "paragraph") {
        return (
          <MarkdownText
            node={node}
            key={key}
            extras={{
              ...extras,
              style: styles?.paragraph,
              isParagraph: true,
            }}
          />
        );
      }

      return <MarkdownBlock node={node} key={key} extras={extras} />;
    case "ul":
      return <MarkdownList key={key} node={node} isOrdered={false} />;
    case "ol":
      return <MarkdownList key={key} node={node} isOrdered={true} />;
    case "li":
      return <MarkdownListItem node={node} key={key} index={index} extras={extras} />;
    case "a":
      return <MarkdownInlineLink node={node} key={key} extras={concatStyles(extras, styles.link)} />;
    case "img":
      return <MarkdownImage node={node} key={key} />;
    case "strong":
      return <MarkdownText node={node} key={key} extras={concatStyles(extras, styles.strong)} />;
    case "del":
      return <MarkdownText node={node} key={key} extras={concatStyles(extras, styles.del)} />;
    case "em":
      return <MarkdownText node={node} key={key} extras={concatStyles(extras, styles.em)} />;
    case "u":
      return <MarkdownText node={node} key={key} extras={concatStyles(extras, styles.u)} />;
    case undefined:
      return <MarkdownText node={node} key={key} extras={extras} />;
    default:
      return null;
  }
};

const renderNodes = (nodes: React.ReactElement[], key?: string, extras?: IExtras) =>
  nodes.map((node, index) => {
    const newKey = key ? key + "_" + index : index + "";
    return <MarkdownNode node={node} key={newKey} index={index} extras={extras} />;
  });
