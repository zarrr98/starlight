import { combineReducers } from "redux";
import { vendorsListReducer } from "./VendorsListReducer";

const allReducers = combineReducers({
  vendorsList: vendorsListReducer,
});

export default allReducers;
