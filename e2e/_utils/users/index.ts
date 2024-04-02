import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const getFullName = (customer: IDatabaseItem) => {
    return `${customer.data.firstName} ${customer.data.lastName}`
}