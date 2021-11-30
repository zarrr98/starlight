import React from "react";
import "./styles.scss";

interface Props {
  active: boolean;
}

const Loading = (props: Props) => {
  return (
    <>
      <div
        className={`circular-loading ${
          !props.active && "circular-loading--hidden"
        }`}
      >
        <div className="circular-loading__rotate-bar" />
      </div>
    </>
  );
};

export default Loading;
