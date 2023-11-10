import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CPE_GCI_SA_3, CPE_GIP_SA_1, CPE_GrFun_SA_1, CPE_GrFun_SA_2, CPE_LSDC_SA_1, CPE_MeGL_SA_1, CPE_MeGL_SA_2, CPE_SpGL_SA_2, CPE_TmpGIP_SA_1 } from "./customer_product_entity";
import { D_GCI_SA_3, D_GIP_SA_1, D_GrFun_SA_1, D_GrFun_SA_2, D_LMPS_SA_1, D_MeGL_SA_1, D_MeGL_SA_2, D_SpGL_SA_2, D_TempGIP_SA_1 } from "./document";

const type = "postgres";
const modelName = "customer_document"

export const CD_MeGL_SA_1 = {
    type,
    modelName,
    data: {
        "document_id" : D_MeGL_SA_1.data.document_id,
        "customer_product_id" : CPE_MeGL_SA_1.data.customer_product_id
    },
} as IDatabaseItem;

export const CD_GrFun_SA_1 = {
    type,
    modelName,
    data: {
        "document_id" : D_GrFun_SA_1.data.document_id,
        "customer_product_id" : CPE_GrFun_SA_1.data.customer_product_id
    },
} as IDatabaseItem;

export const CD_GIP_SA_1 = {
    type,
    modelName,
    data: {
        "document_id" : D_GIP_SA_1.data.document_id,
        "customer_product_id" : CPE_GIP_SA_1.data.customer_product_id
    },
} as IDatabaseItem;

export const CD_TempGIP_SA_1 = {
    type,
    modelName,
    data: {
        "document_id" : D_TempGIP_SA_1.data.document_id,
        "customer_product_id" : CPE_TmpGIP_SA_1.data.customer_product_id
    },
} as IDatabaseItem;

export const CD_LMPS_SA_1 = {
    type,
    modelName,
    data: {
        "document_id" : D_LMPS_SA_1.data.document_id,
        "customer_product_id" : CPE_LSDC_SA_1.data.customer_product_id
    },
} as IDatabaseItem;

export const CD_MeGL_SA_2 = {
    type,
    modelName,
    data: {
        "document_id" : D_MeGL_SA_2.data.document_id,
        "customer_product_id" : CPE_MeGL_SA_2.data.customer_product_id
    },
} as IDatabaseItem;

export const CD_SpGL_SA_2 = {
    type,
    modelName,
    data: {
        "document_id" : D_SpGL_SA_2.data.document_id,
        "customer_product_id" : CPE_SpGL_SA_2.data.customer_product_id
    },
} as IDatabaseItem;

export const CD_GrFun_2 = {
    type,
    modelName,
    data: {
        "document_id" : D_GrFun_SA_2.data.document_id,
        "customer_product_id" : CPE_GrFun_SA_2.data.customer_product_id
    },
} as IDatabaseItem;

export const CD_GCI_3 = {
    type,
    modelName,
    data: {
        "document_id" : D_GCI_SA_3.data.document_id,
        "customer_product_id" : CPE_GCI_SA_3.data.customer_product_id
    },
} as IDatabaseItem;
