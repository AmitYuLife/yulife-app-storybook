import { MODALS } from "@navigation/constants";
import { showYuModal } from "../../root";
import { DeepLinkHandler } from "../types";

export const addBeneficiary: DeepLinkHandler = {
  name: "add-beneficiary",
  action: ({ customParams }) => {
    if (!customParams.productId) {
      return;
    }

    showYuModal({
      component: {
        id: MODALS.addBeneficiary,
        name: MODALS.addBeneficiary,
        passProps: {
          pushEditRoot: true,
          productId: customParams.productId,
        },
      },
    });
  },
};
