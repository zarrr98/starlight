import React from "react";
import VendorsList from "../../components/VendorsList/VendorsList";
import { VendorsListProvider } from "../../providers/VendorsListProvider/VendorsListProvider";

const Vendors = () => {
  return (
    <VendorsListProvider>
      <VendorsList />
    </VendorsListProvider>
  );
};

export default Vendors;
