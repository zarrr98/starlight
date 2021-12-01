import React, { useRef } from "react";
import VendorsList from "../../components/VendorsList/VendorsList";
import "./styles.scss";

const Vendors = () => {
  let vendorsPageElement = useRef(null);
  return (
    <div className="vendors-page" ref={vendorsPageElement}>
      <VendorsList containerRef={vendorsPageElement} />
    </div>
  );
};

export default Vendors;
