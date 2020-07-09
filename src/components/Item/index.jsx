import React from "react";
import style from "./index.module.scss";
import picture from "#/assets/images/picture.png";
import { contactsDelete } from "#/store/reducers/phonebook";
import { useDispatch } from "react-redux";
import closeButton from "#/assets/images/close.png";
import editButton from "#/assets/images/edit.png";
import { useHistory } from "react-router-dom";
import Modal from "@/Modal";

const Item = (props) => {
  const { contact } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const [showModal, setShowModal] = React.useState(false);

  const toggle = React.useCallback(() => setShowModal(!showModal), [showModal]);

  const handleDelete = React.useCallback(() => {
    dispatch(contactsDelete({ id: contact.id }));
  }, [dispatch, contact]);

  const handleItemClick = React.useCallback(
    (event) => {
      event.stopPropagation();
      history.push(`/contacts/${contact.id}`);
    },
    [contact, history]
  );

  return (
    <div className={style["wrapper"]}>
      <div className={style["item"]} onClick={handleItemClick}>
        <img src={picture} alt="loading..." />
        <div className={style["content"]}>
          <div className={style["name"]}>
            <div>{contact.title}</div>
            {contact.owner && <div>{"(" + contact.owner + ")"}</div>}
            <div>{contact.type}</div>
          </div>
          <div className={style["info"]}>
            <div>{contact.adress}</div>
          </div>
        </div>
      </div>
      <button className={style["edit-button"]} onClick={toggle}>
        <img className={style["edit"]} src={editButton} alt="eidt" />
      </button>
      <button className={style["delete-button"]} onClick={handleDelete}>
        <img className={style["delete"]} src={closeButton} alt="delete" />
      </button>
      {showModal && <Modal edit={true} contact={contact} close={toggle} />}
    </div>
  );
};

export default React.memo(Item);
