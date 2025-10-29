module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow logical AND operator in JSX expressions, enforce ternary operator instead",
      category: "Best Practices",
      recommended: true,
    },
    fixable: "code",
    messages: {
      noLogicalAnd:
        "Use ternary operator (condition ? <Component /> : null) instead of logical AND (condition && <Component />)",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXExpressionContainer(node) {
        // Check if the expression is a LogicalExpression with && operator
        if (node.expression.type === "LogicalExpression" && node.expression.operator === "&&") {
          const rightSide = node.expression.right;

          // Only apply the rule if the right side is JSX (element or fragment)
          const isRightSideJSX = rightSide.type === "JSXElement" || rightSide.type === "JSXFragment";

          if (!isRightSideJSX) {
            return;
          }

          const sourceCode = context.getSourceCode();

          context.report({
            node: node.expression,
            messageId: "noLogicalAnd",
            fix(fixer) {
              const leftText = sourceCode.getText(node.expression.left);
              const rightText = sourceCode.getText(node.expression.right);

              // Create the ternary replacement
              const ternaryText = `${leftText} ? ${rightText} : null`;

              return fixer.replaceText(node.expression, ternaryText);
            },
          });
        }
      },
    };
  },
};
