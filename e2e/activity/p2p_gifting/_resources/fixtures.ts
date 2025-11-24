import { CUSTOMER_140_NPC_ALTRA } from "activity/_data";
import { Gift } from "./types";

export const GiftNpcAltra: Gift = {
  recipientId: CUSTOMER_140_NPC_ALTRA.customer.data.customerId,
  yuCoinAmount: 5000,
  message:
    "Hello, world! Another great day to receive a gift for hardworking. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Hello, world! Another great day to receive a gift for hardworking.",
  backgroundId: "yuniversal",
  stickerId: "lantern",
};

export const extraLongGiftMessage =
  "Hello, world! Another great day to receive a gift for hardworking. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Hello, world! Another great day to receive a gift for hardworking.";
