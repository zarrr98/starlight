import { VendorsListInterface } from "../providers/VendorsListProvider/VendorsListProvider";

export const vendorsListReducer = (
  state: VendorsListInterface,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "value":
      return state;

    default:
      return state;
  }
};
