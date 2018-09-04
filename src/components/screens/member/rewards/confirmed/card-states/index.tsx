import * as React from "react";

import { Delivered, Failed, Pending } from "./card-states";

export default {
    Delivered: <Delivered />,
    Failed: <Failed />,
    Pending: <Pending />
};
