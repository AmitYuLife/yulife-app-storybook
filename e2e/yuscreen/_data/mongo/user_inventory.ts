import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_139 } from "../postgres/customers";

export const USER_139_INV = {
    type:"mongo",
    modelName:"user_inventory",
    data:{
        _id:generateRandomMongoId(),
        userId:CUSTOMER_139.data.customerId,
        items:[],
        yumojiItems:[]
    }
}