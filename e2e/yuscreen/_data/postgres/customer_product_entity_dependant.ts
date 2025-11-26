import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import { CPE_93_GDent } from "./customer_product_entity";
import moment from "moment";

const type = "postgres";
const modelName = "customer_product_entity_dependant";

export const CPED_93_GDental = {
  type,
  modelName,
  data: {
    customer_product_entity_dependant_id: generateRandomPostgresId(),
    customer_product_id: CPE_93_GDent.data.customer_product_id,
    first_name: "Melanie",
    last_name: "Hammond",
    date_of_birth: "1988-04-24",
    sex: "F",
    type: "spouse",
    archived: false,
    archived_at: null,
    created_at: "2023-04-24T10:09:32.610Z",
    modified_at: "2023-04-24T10:09:32.610Z",
    modified_by_id: null,
    created_by_id: null,
    import_id: 1,
    archive_reason: null,
  },
};
