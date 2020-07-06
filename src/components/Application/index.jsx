import React from "react";
import style from "./index.module.scss";
import List from "@/List";

const Application = () => {
  return (
    <div className={style["content"]}>
      <List />
    </div>
  );
};

export default Application;
