// import { VendorsListInterface } from "../providers/VendorsListProvider/VendorsListProvider";

// export const vendorsListReducer = (
//   state: VendorsListInterface,
//   action: { type: string; payload: any }
// ) => {
//   switch (action.type) {
//     case "value":
//       return state;

//     default:
//       return state;
//   }
// };

export const SET_VENDORS = "SET_VENDORS";
export interface Vendor {
  title: string;
  logo: string;
  backgroundImage: string;
  coverPath: string;
  voteCount: number;
  rate: number;
  discountValueForView: number;
  description: string;
  deliveryFee: number;
}

export interface VendorsListInterface {
  configs: {
    lat: number;
    long: number;
  };
  vendors: Vendor[];
}

const initialState: VendorsListInterface = {
  configs: {
    lat: 35.774,
    long: 51.418,
  },
  vendors: [],
};

export const vendorsListReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_VENDORS:
      return { ...state, vendors: action.payload.vendors };

    default:
      return state;
  }
};
