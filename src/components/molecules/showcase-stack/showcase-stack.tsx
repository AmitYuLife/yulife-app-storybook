import { Box } from "@atoms";
import { chunk } from "lodash";
import { ReactNode, memo, useMemo } from "react";
import ShowcaseStackRow from "./subcomponents/showcase-stack-row";
import ShowcaseStackGrid from "./subcomponents/showcase-stack-grid";

interface IShowcaseStackProps {
  children: ReactNode[];
}

const ShowcaseStack = ({ children }: IShowcaseStackProps) => {
  const items = useMemo(() => {
    const isRows = children.length <= 3 || children.length % 3 === 0 || children.length >= 6;

    if (isRows) {
      const rows = chunk(children, 3);
      return (
        <Box pb={20} gap={50}>
          {rows.map((row, index) => (
            <ShowcaseStackRow key={index}>{row}</ShowcaseStackRow>
          ))}
        </Box>
      );
    }

    if (children.length === 4 || children.length === 5) {
      return <ShowcaseStackGrid>{children}</ShowcaseStackGrid>;
    }
  }, [children]);

  return items;
};

export default memo(ShowcaseStack);
