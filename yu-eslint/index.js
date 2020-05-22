module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: "Don't use deprecated function",
      category: "Warn",
    }
  },
  rules: {
    "no-scale-up-and-down": {
      create: function (context) {
        return {
          MemberExpression(node) {
            if (
              node.property.name === "SCALE_UP_AND_DOWN"
            ) {
              context.report({
                node,
                message: "Do not use the SCALE_UP_AND_DOWN function. Instead pass through the integer directly, or use the `Style.proportionSizes` function when available."
              });
            }
          },
        };
      }
    }
  }
};