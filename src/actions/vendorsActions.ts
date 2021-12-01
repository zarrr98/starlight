import { SET_VENDORS, Vendor } from "../reducers/VendorsListReducer";

export const setVendors = (vendors: Vendor[]) => {
  return {
    type: SET_VENDORS,
    payload: {
      vendors,
    },
  };
};
