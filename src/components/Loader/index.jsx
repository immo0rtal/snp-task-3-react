import React from "react";
import loader from "#/assets/images/loader.gif";
import style from "./index.module.scss";

const Loader = () => {
  return (
    <div className={style["loader"]}>
      <img src={loader} alt="loading..." />
    </div>
  );
};

export default Loader;
