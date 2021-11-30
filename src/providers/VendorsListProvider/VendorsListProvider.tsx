import React, { useReducer, createContext } from "react";
import { vendorsListReducer } from "../../reducers/VendorsListReducer";

export interface VendorsListInterface {
  lat: number;
  long: number;
}

interface VendorsListContextInterface extends VendorsListInterface {}

const initialState: VendorsListInterface = {
  lat: 35.774,
  long: 51.418,
};

export const VendorsListContext = createContext<VendorsListContextInterface>({
  ...initialState,
});

interface Props {
  children: object;
}

export const VendorsListProvider = (props: Props) => {
  const [state, dispatch] = useReducer(vendorsListReducer, initialState);

  const value = {
    ...state,
  };

  const { children } = props;
  return (
    <VendorsListContext.Provider value={value}>
      {children}
    </VendorsListContext.Provider>
  );
};
