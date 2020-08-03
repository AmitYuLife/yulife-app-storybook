import { UPDATE_FIB_VALUE, ProductActionTypes, IProductStore } from "./product.types";

export { IProductStore } from "./product.types";

export const initialState: IProductStore = {
  fib: {
    salary: 0,
    selectedPackage: "common",
  },
};

function personalProductReducer(state: IProductStore = initialState, action: ProductActionTypes) {
  switch (action.type) {
    case UPDATE_FIB_VALUE:
      return {
        ...state,
        fib: {
          ...state.fib,
          [action.payload.key]: action.payload.value,
        },
      };
    default:
      return state;
  }
}

export default personalProductReducer;
