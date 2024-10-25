import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_139, CUSTOMER_141 } from "../postgres/customers";

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

export const USER_141_INV = {
    type:"mongo",
    modelName:"user_inventory",
    data:{
        _id:generateRandomMongoId(),
        userId:CUSTOMER_141.data.customerId,
        items:[],
        yumojiItems:[]
    }
}