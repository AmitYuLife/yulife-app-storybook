import { Box, Loading } from "@atoms";
import { memo } from "react";

const WalletLoadingFooter = () => {
  return (
    <Box flexDirection="row" justifyContent="center" alignItems="center" mt={16}>
      <Loading size={24} />
    </Box>
  );
};

export default memo(WalletLoadingFooter);
