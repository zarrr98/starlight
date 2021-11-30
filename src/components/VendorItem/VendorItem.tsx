import React from "react";
import "./styles.scss";

interface Props {
  data: {
    title: string;
    logo: string;
    backgroundImage: string;
    coverPath: string;
    voteCount: number;
    rate: number;
    discountValueForView: number;
    description: string;
    deliveryFee: number;
  };
}
const VendorItem = (props: Props) => {
  const stadardizePhotoSize = (url: string) => {
    let endpoint = url.substring(url.indexOf("uploads"));
    console.log("end point :", endpoint);
    return `https://static.snapp-food.com/400x266/${endpoint}`;
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
      </div>
    </div>
  );
};

export default VendorItem;
