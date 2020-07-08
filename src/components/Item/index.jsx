import React from "react";
import style from "./index.module.scss";
import picture from "#/assets/images/picture.png";
import { contactsDelete } from "#/store/reducers/phonebook";
import { useDispatch } from "react-redux";
import closeButton from "#/assets/images/close.png";

const Item = (props) => {
  const { contact } = props;
  const dispatch = useDispatch();

  const handleDelete = React.useCallback(() => {
    dispatch(contactsDelete({ id: contact.id }));
  }, [dispatch, contact]);

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
      <button className={style["delete-button"]} onClick={handleDelete}>
        <img className={style["delete"]} src={closeButton} alt="delete" />
      </button>
    </div>
  );
};

export default React.memo(Item);
