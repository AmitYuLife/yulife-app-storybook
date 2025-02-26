import { Box } from "@atoms";
import { ReactNode, memo } from "react";

interface IShowcaseStackGridProps {
  children: ReactNode[];
}

const GAP = 60;
const ShowcaseStackGrid = ({ children }: IShowcaseStackGridProps) => {
  const [, , , , floatingItem] = children;

  return (
    <>
      <Box flexDirection="row" center={true} flexWrap="wrap" w="100%">
        {children.slice(0, 4).map((child, index) => (
          <Box
            pb={GAP}
            w={"50%"}
            key={index}
            center={true}
            flexDirection="row"
            pr={index % 2 === 0 ? GAP / 2 : 0}
            pl={index % 2 !== 0 ? GAP / 2 : 0}
            justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
          >
            {child}
          </Box>
        ))}
        {floatingItem ? (
          <Box position="absolute" top={-10} h="100%" w="100%" justifyContent="center" alignItems="center">
            <Box center={true} flexDirection="row" justifyContent="center" alignItems="center">
              {floatingItem}
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default memo(ShowcaseStackGrid);
