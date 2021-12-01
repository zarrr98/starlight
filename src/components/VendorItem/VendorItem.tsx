import React from "react";
import { Vendor } from "../../reducers/VendorsListReducer";
import { addCommaInEveryThreeChars } from "../../utils/functions";
import "./styles.scss";

interface Props {
  data?: Vendor;
  isSkeleton?: boolean;
}
const VendorItem = (props: Props) => {
  const isSkeleton = props.isSkeleton || !props.data;
  // const stadardizePhotoSize = (url: string) => {
  //   // let endpoint = url.substring(url.indexOf("uploads"));
  //   // console.log("end point :", endpoint, "original url: ",url);
  //   // return `https://static.snapp-food.com/530x530/${endpoint}`;
  //   return props.data.backgroundImage;
  // };

  return (
    <div className={`vendor-item ${isSkeleton && "vendor-item--skeleton"}`}>
      <header
        className={`vendor-item__header ${
          isSkeleton && "vendor-item__header--skeleton"
        }`}
      >
        {props.data && (
          <img
            className={`vendor-item__img`}
            src={props.data.backgroundImage}
            alt=""
          />
        )}
      </header>
      <div className="vendor-item__body">
        <div
          className={`vendor-item__info ${
            isSkeleton && "vendor-item__info--skeleton"
          }`}
        >
          {props.data && (
            <div className="vendor-item__title">
              <span className={"vendor-item__name"}>{props.data.title}</span>
              {props.data.discountValueForView ? (
                <span className="vendor-item__discount">
                  تا {props.data.discountValueForView} %
                </span>
              ) : null}
            </div>
          )}
          {props.data && (
            <div className="vendor-item__point">
              <span className="vendor-item__votes">
                ({props.data.voteCount})
              </span>
              <span className={"vendor-item__rate"}>{props.data.rate}</span>
            </div>
          )}
        </div>
        <div
          className={`vendor-item__desc ${
            isSkeleton && "vendor-item__desc--skeleton"
          }`}
        >
          {props.data && props.data.description.replace(/,/g, " ")}
        </div>
        <div
          className={`vendor-item__fee-info ${
            isSkeleton && "vendor-item__fee-info--skeleton"
          }`}
        >
          {props.data && (
            <>
              <span className="vendor-item__fee-text">ارسال اکسپرس</span>
              <span className="vendor-item__fee-num">
                {addCommaInEveryThreeChars(props.data.deliveryFee)} تومان
              </span>
            </>
          )}
        </div>
      </div>
      {props.data && (
        <div className="vendor-item__logo-container">
          <img alt="" src={props.data.logo} className="vendor-item__logo" />
        </div>
      )}
    </div>
  );
};

export default VendorItem;
