import { YuScreenV5WellbeingItem, YuScreenProductCard, CertificateDetails } from "./types";
import moment from "moment";

export const metLifeGPWellbeingItem: YuScreenV5WellbeingItem = {
  title: "MetLife GP24",
  desc: "Immediate access to a GP by phone or video",
  img: "https://yulife-develop.imgix.net/perks/METLIFE_GP24.png?ixlib=js-3.2.1&fit=clip&fm=png&s=1ddea0de5b993bb05e2e9a04870ff01f",
};

export const metLyfeGPWellbeingItem: YuScreenV5WellbeingItem = {
  title: "MetLyfe GP25",
  desc: "Immediate access to a doctor by phone or video",
  img: "https://yulife-develop.imgix.net/perks/METLIFE_GP24.png?ixlib=js-3.2.1&fit=clip&fm=png&s=1ddea0de5b993bb05e2e9a04870ff01f",
};

export const yuniversityWellbeingItem: YuScreenV5WellbeingItem = {
  title: "Yuniversity Courses",
  desc: "Free Learning Material",
  img: "https://yulife-develop.imgix.net/cms/1669639176057_Yuniversity@3x.png?ixlib=js-3.2.1&w=276&h=239.2&crop=fit&fit=clip&fm=png&dpr=3&s=423beccd8655b409d6a35a8af434ad1b",
};

export const fiitWellbeingItem: YuScreenV5WellbeingItem = {
  title: "Fiit",
  desc: "Claim your free year of access to Fiit",
  img: "https://yulife-develop.imgix.net/cms/1639655759852_Screenshot%202021-12-16%20at%2011.55.50.png?ixlib=js-3.2.1&w=276&h=239.2&crop=fit&fit=clip&fm=png&dpr=3&s=1c5fd23b99f90c0cf32375d4bd750a1b",
};

export const yuMatterWellbeingItem: YuScreenV5WellbeingItem = {
  title: "YuMatter",
  desc: "Mental health support when you need it",
  img: "https://yulife-develop.imgix.net/wellbeing_hub/yu-matter.png?ixlib=js-3.2.1&fit=clip&fm=png&s=b1127559c64c08bc138f7a02d0faa2f2",
};

export const beamWellbeingItem: YuScreenV5WellbeingItem = {
  title: "Beam",
  desc: "Help someone start a new career",
  img: "https://yulife-develop.imgix.net/wellbeing_hub/beam.png?ixlib=js-3.2.1&fit=clip&fm=png&s=b06a6534b56dee7ee4a9825fd763b155",
};

export const bupaHealthInsuranceProductItem: YuScreenProductCard = {
  productName: "Health insurance",
  mainImage:
    "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/ghi-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=996f9fa2a5bae66c29fb697a6c90288d",
};

export const bupaDentalProductItem: YuScreenProductCard = {
  productName: "Dental insurance",
  mainImage:
    "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gdent-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=73df8d2b6153ed0aa9354cb8aca8b350",
};

export const incomeProtectionProductItem: YuScreenProductCard = {
  productName: "Income protection",
  mainImage:
    "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gip-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=6e7632f4354376d9ef6c6844a8d13876",
};

export const lifeInsuranceProductItem: YuScreenProductCard = {
  productName: "Life insurance",
  mainImage:
    "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gli-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=0c8355dfb123786896286ee0fcad068d",
};

export const criticalIllnessProductItem: YuScreenProductCard = {
  productName: "Critical illness insurance",
  mainImage:
    "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gli-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=0c8355dfb123786896286ee0fcad068d",
};

export const pensionUnlinkedProductItem: YuScreenProductCard = {
  productName: "Pension",
  mainImage:
    "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/pension-unlinked-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=5597c6d792c3a3fd6d31be64bda705c4",
};

export const certificateDetailsGLAUMAnya: CertificateDetails = {
  clientName: "Anya Forgar",
  companyName: "Dunder Mifflin",
  policyNumber: "YUG0000100",
  coverStartDate: moment().subtract(5, "months").format("DD/MM/YYYY"),
};

export const certificateDetailsGIPUMAnya: CertificateDetails = {
  clientName: "Anya Forgar",
  companyName: "Dunder Mifflin",
  policyNumber: "YUG0000101",
  coverStartDate: moment().subtract(5, "months").format("DD/MM/YYYY"),
};
