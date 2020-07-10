import React from "react";
import style from "./index.module.scss";
import List from "@/List";
import Header from "@/Header";

const Main = (props) => {
  const { location } = props;

  return (
    <div className={style["content"]}>
      <Header location={location} />
      <List />
    </div>
  );
};

export default React.memo(Main);
