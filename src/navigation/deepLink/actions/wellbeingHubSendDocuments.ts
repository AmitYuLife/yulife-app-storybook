import { showSendDocumentsModal } from "@components/modals/send-documents-modal/send-documents-modal";
import { DeepLinkHandler } from "../types";

// yulifeapp://yulife/wellbeing-hub/send-documents?itemId=${item._id}
export const wellbeingHubSendDocuments: DeepLinkHandler = {
  name: "wellbeing-hub/send-documents",
  action: ({ customParams }) => {
    showSendDocumentsModal(customParams.itemId);
  },
};
