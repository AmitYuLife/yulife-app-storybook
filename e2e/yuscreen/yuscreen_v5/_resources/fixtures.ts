import { YuScreenV5WellbeingItem, YuScreenProductCard, CertificateDetails } from "./types";
import moment from "moment";

export const metLifeGPWellbeingItem: YuScreenV5WellbeingItem = {
    title: "MetLife GP24",
    desc: "Immediate access to a GP by phone or video",
    img: "https://yulife-develop.imgix.net/perks/METLIFE_GP24.png?ixlib=js-3.2.1&fit=clip&fm=png&s=1ddea0de5b993bb05e2e9a04870ff01f"
}

export const yuMatterWellbeingItem: YuScreenV5WellbeingItem = {
    title: "YuMatter",
    desc: "Mental health support when you need it",
    img: "https://yulife-develop.imgix.net/wellbeing_hub/yu-matter.png?ixlib=js-3.2.1&fit=clip&fm=png&s=b1127559c64c08bc138f7a02d0faa2f2"
}

export const beamWellbeingItem: YuScreenV5WellbeingItem = {
    title: "Beam",
    desc: "Help someone start a new career",
    img: "https://yulife-develop.imgix.net/wellbeing_hub/beam.png?ixlib=js-3.2.1&fit=clip&fm=png&s=b06a6534b56dee7ee4a9825fd763b155"
}

export const bupaHealthInsuranceProductItem: YuScreenProductCard = {
    productName: "Health insurance",
    mainImage: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/ghi-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=996f9fa2a5bae66c29fb697a6c90288d",
}

export const bupaDentalProductItem: YuScreenProductCard = {
    productName: "Dental insurance",
    mainImage: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gdent-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=73df8d2b6153ed0aa9354cb8aca8b350",
}

export const incomeProtectionProductItem: YuScreenProductCard = {
    productName: "Income protection",
    mainImage: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gip-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=6e7632f4354376d9ef6c6844a8d13876",
}

export const lifeInsuranceProductItem: YuScreenProductCard = {
    productName: "Life insurance",
    mainImage: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gli-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=f289f6082197309bb6bd700a34f88d2f",
}

export const criticalIllnessProductItem: YuScreenProductCard = {
    productName: "Critical illness insurance",
    mainImage: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gci-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=fcbc7ab2e46bb5d8b6453991ae83e6cb",
}

export const pensionUnlinkedProductItem: YuScreenProductCard = {
    productName: "Pension",
    mainImage: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/pension-unlinked-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=312c112269739dedc053cb3fe208aa9a"
}

export const certificateDetailsGLAUMAnya: CertificateDetails = {
    clientName: "Anya Forgar",
    companyName: "Dunder Mifflin",
    policyNumber: "YUG0000100",
    coverStartDate: moment().subtract(5, "months").format("DD/MM/YYYY")
}

export const certificateDetailsGIPUMAnya: CertificateDetails = {
    clientName: "Anya Forgar",
    companyName: "Dunder Mifflin",
    policyNumber: "YUG0000101",
    coverStartDate: moment().subtract(5, "months").format("DD/MM/YYYY")
}