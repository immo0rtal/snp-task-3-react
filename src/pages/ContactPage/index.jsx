import React from "react";
import style from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectContacts } from "#/store/selectors";
import picture from "#/assets/images/picture.png";

const ContactPage = (props) => {
  const { id } = props.match.params;
  const contacts = useSelector(selectContacts);

  const contact = React.useMemo(() => {
    const idx = contacts.findIndex((el) => el.id === Number(id));
    return contacts[idx];
  }, [id, contacts]);

  return (
    <div className={style["content"]}>
      <img className={style["picture"]} src={picture} alt="loading" />
      <div className={`${style["info"]} ${style["title"]}`}>
        {contact.title}
      </div>
      <div className={`${style["info"]} ${style["desription"]}`}>
        {"Адрес: " + contact.adress}
      </div>
      <div className={`${style["info"]} ${style["desription"]}`}>
        {"Номер телефона: " + contact.number}
      </div>
    </div>
  );
};

export default React.memo(ContactPage);
