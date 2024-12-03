import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const PARTNER_VOUCHER_1_BUPA = {
    type: "mongo",
    modelName: "partner_vouchers",
    data: {
        code: "Yulife2",
        denomination: 1,
        partnerId: "BUPA_HEALTH_ASSESSMENT",
        createdAt: moment().subtract(1, "d").toDate(),
        updatedAt: moment().subtract(1, "d").toDate(),
        __v: 0,
    },
} as IDatabaseItem;

export const PARTNER_VOUCHER_2_GARMIN = {
    type: "mongo",
    modelName: "partner_vouchers",
    data: {
        code: "Yulife2",
        denomination: 1,
        partnerId: "GARMIN_GB",
        createdAt: moment().subtract(1, "d").toDate(),
        updatedAt: moment().subtract(1, "d").toDate(),
        __v: 0,
    },
} as IDatabaseItem;

export const PARTNER_VOUCHER_3_THRIVA = {
    type: "mongo",
    modelName: "partner_vouchers",
    data: {
        code: "Yulife2",
        denomination: 1,
        partnerId: "THRIVA_FREE_UK",
        createdAt: moment().subtract(1, "d").toDate(),
        updatedAt: moment().subtract(1, "d").toDate(),
        __v: 0,
    },
} as IDatabaseItem;

export const PARTNER_VOUCHER_4_AMAZON = {
    type: "mongo",
    modelName: "partner_vouchers",
    data: {
        code: "TestAmazonCode123",
        denomination: 12,
        partnerId: "AMAZON_TEST_UK",
    },
} as IDatabaseItem;

export const PARTNER_VOUCHER_5_AMAZON = {
    type: "mongo",
    modelName: "partner_vouchers",
    data: {
        code: "TestAmazonCode456",
        denomination: 24,
        partnerId: "AMAZON_TEST_UK",
    },
} as IDatabaseItem;

export const PARTNER_VOUCHER_6_AMAZON = {
    type: "mongo",
    modelName: "partner_vouchers",
    data: {
        code: "TestAmazonCode789",
        denomination: 36,
        partnerId: "AMAZON_TEST_UK",
    },
} as IDatabaseItem;

export const PARTNER_VOUCHER_7_FIIT = {
    type: "mongo",
    modelName: "partner_vouchers",
    data: {
        code: "TestFiitCode",
        denomination: 36,
        partnerId: "FIIT_12_MONTH",
    },
} as IDatabaseItem;

