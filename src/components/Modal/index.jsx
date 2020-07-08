import React from "react";
import { createPortal } from "react-dom";
import style from "./index.module.scss";
import closeButton from "#/assets/images/close.png";

const Modal = (props) => {
  return createPortal(
    <div className={style["modal-wrapper"]}>
      <div className={style["modal"]}>
        <button className={style["close"]} onClick={props.close}>
          <img src={closeButton} alt="close" />
        </button>
        <form className={style["form"]}>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="submit">Создать</button>
        </form>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default React.memo(Modal);
