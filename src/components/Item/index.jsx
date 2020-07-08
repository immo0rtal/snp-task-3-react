import React from "react";
import style from "./index.module.scss";
import picture from "#/assets/images/picture.png";

const Item = (props) => {
  const { contact } = props;

  return (
    <div className={style["item"]}>
      <img src={picture} alt="loading..." />
      <div className={style["content"]}>
        <div className={style["name"]}>
          <div>{contact.title}</div>
          {contact.owner && <div>{"(" + contact.owner + ")"}</div>}
          <div>{contact.type}</div>
        </div>
        <div className={style["info"]}>
          <div>{contact.adress}</div>
          <div>{contact.number}</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Item);
