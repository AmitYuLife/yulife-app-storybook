import { CUSTOMER_10 } from "@data";

export const getFullName = (customer: typeof CUSTOMER_10) => {
    return `${customer.data.firstName} ${customer.data.lastName}`
}