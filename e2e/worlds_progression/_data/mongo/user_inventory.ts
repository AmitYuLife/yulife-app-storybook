import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_93 } from "../postgres/customers";


export const USER_800_INV = {
    type:"mongo",
    modelName:"user_inventory",
    data:{
        _id:generateRandomMongoId(),
        userId:CUSTOMER_93.data.customerId,
        items:[],
        yumojiItems:[]
    }
}