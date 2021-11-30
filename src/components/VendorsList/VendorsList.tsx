import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VendorsListInterface } from "../../reducers/VendorsListReducer";
import { vendorsList } from "../../utils/API";
import VendorItem from "../VendorItem/VendorItem";
import "./styles.scss";

const VendorsList = () => {
  const vendorsInfo = useSelector(
    (state: { vendorsList: VendorsListInterface }) => state.vendorsList
  );
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getVendersListFromServer();
  }, [vendorsInfo.configs]);

  const getVendersListFromServer = () => {
    const resp = vendorsList(
      1,
      vendorsInfo.configs.lat,
      vendorsInfo.configs.long
    );
    resp
      .then((data) => {
        console.log("data ------>", data);
        setVendors(data.data.finalResult);
      })
      .catch((err) => console.log("Errrr :(((", err));
  };

  return (
    <div className="venders-container">
      {vendors.map((item: { data: any }, i) => {
        return <VendorItem data={item.data} key={i} />;
      })}
    </div>
  );
};

export default VendorsList;
