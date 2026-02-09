/*
Adds collapsable={false} to views with testID

React Native Fabric flattens layout only views
This can cause testID to disappear and break Detox tests

If a View has a testID, we force collapsable={false} so Detox can still find it

- Only runs when E2E_MODE=true (see babel.config.js)
- Box / Pressable already handle this
 */
const VIEW_COMPONENTS = ["View", "Animated.View", "SafeAreaView", "ScrollView", "KeyboardAvoidingView"];

module.exports = function () {
  return {
    visitor: {
      JSXOpeningElement(path) {
        const elementName = path.node.name;
        let componentName = "";

        if (elementName.type === "JSXIdentifier") {
          componentName = elementName.name;
        } else if (elementName.type === "JSXMemberExpression") {
          const object = elementName.object.name || "";
          const property = elementName.property.name || "";
          componentName = `${object}.${property}`;
        }

        if (!VIEW_COMPONENTS.includes(componentName)) {
          return;
        }

        const testIDAttr = path.node.attributes.find(
          (attr) => attr.type === "JSXAttribute" && attr.name && attr.name.name === "testID"
        );

        if (testIDAttr) {
          const hasCollapsable = path.node.attributes.some(
            (attr) => attr.type === "JSXAttribute" && attr.name && attr.name.name === "collapsable"
          );

          if (!hasCollapsable) {
            const collapsableAttr = {
              type: "JSXAttribute",
              name: { type: "JSXIdentifier", name: "collapsable" },
              value: {
                type: "JSXExpressionContainer",
                expression: { type: "BooleanLiteral", value: false },
              },
            };
            path.node.attributes.push(collapsableAttr);
          }
        }
      },
    },
  };
};
