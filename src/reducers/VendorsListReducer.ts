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

export interface VendorsListInterface {
  configs: {
    lat: number;
    long: number;
  };
}

const initialState: VendorsListInterface = {
  configs: {
    lat: 35.774,
    long: 51.418,
  },
};

export const vendorsListReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "value":
      return state;

    default:
      return state;
  }
};
