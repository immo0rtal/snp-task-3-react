import React from "react";
import style from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectContacts } from "#/store/selectors";
import picture from "#/assets/images/picture.png";
import Loader from "@/Loader";

const ContactPage = (props) => {
  const { id } = props.match.params;
  const contacts = useSelector(selectContacts);

  const contact = React.useMemo(() => {
    const idx = contacts.findIndex((el) => el.id === Number(id));
    return contacts[idx];
  }, [id, contacts]);

  return (
    <div className={style["content"]}>
      {contact ? (
        <>
          <img className={style["picture"]} src={picture} alt="loading" />
          <div className={`${style["info"]} ${style["title"]}`}>
            {contact.title}
          </div>
          <div className={`${style["info"]} ${style["owner"]}`}>
            {"(" + contact.owner + ")"}
          </div>
          <div className={`${style["info"]} ${style["number"]}`}>
            {"Номер телефона: " + contact.number}
          </div>
          <div className={`${style["info"]} ${style["desription"]}`}>
            {"Адрес: " + contact.adress}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default React.memo(ContactPage);
