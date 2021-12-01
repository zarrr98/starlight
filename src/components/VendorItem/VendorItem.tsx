import React from "react";
import { Vendor } from "../../reducers/VendorsListReducer";
import { addCommaInEveryThreeChars } from "../../utils/functions";
import "./styles.scss";

interface Props {
  data: Vendor;
}
const VendorItem = (props: Props) => {
  const stadardizePhotoSize = (url: string) => {
    // let endpoint = url.substring(url.indexOf("uploads"));
    // console.log("end point :", endpoint, "original url: ",url);
    // return `https://static.snapp-food.com/530x530/${endpoint}`;
    return props.data.backgroundImage;
  };

  return (
    <div className="vendor-item">
      <header className="vendor-item__header">
        <img
          className="vendor-item__img"
          src={stadardizePhotoSize(props.data.coverPath)}
          alt=""
        />
      </header>
      <div className="vendor-item__body">
        <div className="vendor-item__info">
          <div className="vendor-item__title">
            <span className={"vendor-item__name"}>{props.data.title}</span>
            {props.data.discountValueForView ? (
              <span className="vendor-item__discount">
                تا {props.data.discountValueForView} %
              </span>
            ) : null}
          </div>
          <div className="vendor-item__point">
            <span className="vendor-item__votes">({props.data.voteCount})</span>
            <span className={"vendor-item__rate"}>{props.data.rate}</span>
          </div>
        </div>
        <div className="vendor-item__desc">
          {props.data.description.replace(/,/g, " ")}
        </div>
        <div className="vendor-item__fee-info">
          <span className="vendor-item__fee-text">ارسال اکسپرس</span>
          <span className="vendor-item__fee-num">
            {addCommaInEveryThreeChars(props.data.deliveryFee)} تومان
          </span>
        </div>
      </div>
      <div className="vendor-item__logo-container">
        <img alt="" src={props.data.logo} className="vendor-item__logo" />
      </div>
    </div>
  );
};

export default VendorItem;
