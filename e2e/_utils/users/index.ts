import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const getFullName = (customer: IDatabaseItem, locale: "UK" | "JP" = "UK") => {
  switch (locale) {
    case "UK":
      return `${customer.data.firstName} ${customer.data.lastName}`;
    case "JP":
      return `${customer.data.lastName} ${customer.data.firstName}`;
  }
};
