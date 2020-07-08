import React from "react";
import style from "./index.module.scss";
import Modal from "@/Modal";

const Header = () => {
  const [showModal, setShowModal] = React.useState(false);

  const toggle = React.useCallback(() => setShowModal(!showModal), [showModal]);

  return (
    <div className={style["header"]}>
      <h1 className={style["title"]}>Телефонный справочник</h1>
      <input className={style["search"]} placeholder="Поиск" type="text" />
      <button className={style["add"]} onClick={toggle}>
        Добавить
      </button>
      {showModal && <Modal close={toggle} />}
    </div>
  );
};

export default Header;
