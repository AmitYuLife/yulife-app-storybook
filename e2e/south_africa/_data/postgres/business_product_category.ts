import {
  BUSINESS_PRODUCT_SA_1_GCI,
  BUSINESS_PRODUCT_SA_1_GIP,
  BUSINESS_PRODUCT_SA_1_GrFun,
  BUSINESS_PRODUCT_SA_1_LSDC,
  BUSINESS_PRODUCT_SA_1_MeGL,
  BUSINESS_PRODUCT_SA_1_SpGL,
  BUSINESS_PRODUCT_SA_1_TmpGIP,
} from "./business_product";

const type = "postgres";
const modelName = "business_product_category";

export const BPC_SA_1_MeGL = {
  type,
  modelName,
  data: {
    product_id: BUSINESS_PRODUCT_SA_1_MeGL.product.data.product_id,
    category_id: "1",
    category_description: "Directors",
    earn_rate: 10,
    benefit_basis: "multiple_of_salary",
    multiple_or_amount: 4.0,
    custom_data:
      '{"BasisOfCover":"Unapproved","FreeCoverLimit":2000000,"MultipleOfSalarySpouse":0,"ReplacementRatio":0,"FixedCoverAmountSpouse":0,"ChildCoverAmountStillBorn":0,"ChildCoverAmount0105":0,"ChildCoverAmount0613":0,"ChildCoverAmount1421":0,"RepatriationMaxCoverAmount":0,"INITIALPERIOD":0,"DeferedPeriod":0}',
    version_id: 1,
    version_archived: false,
  },
};

export const BPC_SA_2_MeGL = {
  type,
  modelName,
  data: {
    product_id: BUSINESS_PRODUCT_SA_1_MeGL.product.data.product_id,
    category_id: "2",
    category_description: "Staff",
    earn_rate: 5,
    benefit_basis: "flat_amount",
    multiple_or_amount: 500000.0,
    custom_data:
      '{"BasisOfCover":"Unapproved","FreeCoverLimit":1500000,"MultipleOfSalarySpouse":0,"ReplacementRatio":0,"FixedCoverAmountSpouse":100000,"ChildCoverAmountStillBorn":25000,"ChildCoverAmount0105":300000,"ChildCoverAmount0613":40000,"ChildCoverAmount1421":50000,"RepatriationMaxCoverAmount":0,"INITIALPERIOD":0,"DeferedPeriod":0}',
    version_id: 1,
    version_archived: false,
  },
};

export const BPC_SA_1_GrFun = {
  type,
  modelName,
  data: {
    product_id: BUSINESS_PRODUCT_SA_1_GrFun.product.data.product_id,
    category_id: "1",
    category_description: "Directors",
    earn_rate: 4,
    benefit_basis: "flat_amount",
    multiple_or_amount: 50000.0,
    is_benefit_visible: false,
    custom_data:
      '{"BasisOfCover":"Unapproved","FreeCoverLimit":0,"MultipleOfSalarySpouse":0,"ReplacementRatio":0,"FixedCoverAmountSpouse":0,"ChildCoverAmountStillBorn":5000,"ChildCoverAmount0105":20000,"ChildCoverAmount0613":60000,"ChildCoverAmount1421":100000,"RepatriationMaxCoverAmount":20000,"INITIALPERIOD":0,"DeferedPeriod":0}',
    version_id: 1,
    version_archived: false,
  },
};

export const BPC_SA_1_GIP = {
  type,
  modelName,
  data: {
    product_id: BUSINESS_PRODUCT_SA_1_GIP.product.data.product_id,
    category_id: "1",
    category_description: "Directors",
    earn_rate: 4,
    benefit_basis: "flat_amount",
    multiple_or_amount: 0.0,
    category_name: "Directors",
    custom_data:
      '{"BasisOfCover":"Unapproved","FreeCoverLimit":90000,"MultipleOfSalarySpouse":0,"ReplacementRatio":75,"FixedCoverAmountSpouse":0,"ChildCoverAmountStillBorn":0,"ChildCoverAmount0105":0,"ChildCoverAmount0613":0,"ChildCoverAmount1421":0,"RepatriationMaxCoverAmount":0,"INITIALPERIOD":12,"DeferedPeriod":3}',
    version_id: 1,
    version_archived: false,
  },
};

export const BPC_SA_1_LSDC = {
  type,
  modelName,
  data: {
    product_id: BUSINESS_PRODUCT_SA_1_LSDC.product.data.product_id,
    category_id: "1",
    category_description: "Directors",
    earn_rate: 4,
    benefit_basis: "multiple_of_salary",
    multiple_or_amount: 4.0,
    category_name: "Directors",
    is_benefit_visible: false,
    custom_data:
      '{"BasisOfCover":"Unapproved","FreeCoverLimit":1500000,"MultipleOfSalarySpouse":0,"ReplacementRatio":0,"FixedCoverAmountSpouse":0,"ChildCoverAmountStillBorn":0,"ChildCoverAmount0105":0,"ChildCoverAmount0613":0,"ChildCoverAmount1421":0,"RepatriationMaxCoverAmount":0,"INITIALPERIOD":0,"DeferedPeriod":6}',
    version_id: 1,
    version_archived: false,
  },
};

export const BPC_SA_1_TmpGIP = {
  type,
  modelName,
  data: {
    product_id: BUSINESS_PRODUCT_SA_1_TmpGIP.product.data.product_id,
    category_id: "1",
    category_description: "Directors",
    earn_rate: 3,
    benefit_basis: "flat_amount",
    multiple_or_amount: 0.0,
    category_name: "Accountant",
    custom_data:
      '{"BasisOfCover":"Unapproved","FreeCoverLimit":150000,"MultipleOfSalarySpouse":0,"ReplacementRatio":75,"FixedCoverAmountSpouse":0,"ChildCoverAmountStillBorn":0,"ChildCoverAmount0105":0,"ChildCoverAmount0613":0,"ChildCoverAmount1421":0,"RepatriationMaxCoverAmount":0,"INITIALPERIOD":12,"DeferedPeriod":6}',
    version_id: 1,
    version_archived: false,
  },
};

export const BPC_SA_1_SpGL = {
  type,
  modelName,
  data: {
    product_id: BUSINESS_PRODUCT_SA_1_SpGL.product.data.product_id,
    category_id: "1",
    category_description: "Directors",
    earn_rate: 6,
    benefit_basis: "flat_amount",
    multiple_or_amount: 0.0,
    category_name: "Accountant",
    custom_data:
      '{"BasisOfCover":"Unapproved","FreeCoverLimit":0,"MultipleOfSalarySpouse":0,"ReplacementRatio":0,"FixedCoverAmountSpouse":0,"ChildCoverAmountStillBorn":0,"ChildCoverAmount0105":0,"ChildCoverAmount0613":0,"ChildCoverAmount1421":0,"RepatriationMaxCoverAmount":0,"INITIALPERIOD":0,"DeferedPeriod":0}',
    version_id: 1,
    version_archived: false,
  },
};

export const BPC_SA_1_GCI = {
  type,
  modelName,
  data: {
    product_id: BUSINESS_PRODUCT_SA_1_GCI.product.data.product_id,
    category_id: "1",
    category_description: "Directors",
    earn_rate: 4,
    benefit_basis: "flat_amount",
    multiple_or_amount: 0.0,
    category_name: "Directors",
    custom_data:
      '{"BasisOfCover":"Unapproved","FreeCoverLimit":90000,"MultipleOfSalarySpouse":0,"ReplacementRatio":75,"FixedCoverAmountSpouse":0,"ChildCoverAmountStillBorn":0,"ChildCoverAmount0105":0,"ChildCoverAmount0613":0,"ChildCoverAmount1421":0,"RepatriationMaxCoverAmount":0,"INITIALPERIOD":12,"DeferedPeriod":3}',
    version_id: 1,
    version_archived: false,
  },
};
