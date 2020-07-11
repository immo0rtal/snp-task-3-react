import React from "react";
import { useSelector } from "react-redux";
import { selectContacts, selectLoading } from "#/store/selectors";
import Item from "@/Item";
import Loader from "@/Loader";
import style from "./index.module.scss";

const List = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);

  const _renderContacts = React.useMemo(() => {
    if (contacts) {
      return contacts.map((contact, index) => (
        <Item key={index} contact={contact} />
      ));
    }
  }, [contacts]);

  const contactsLength = React.useMemo(() => {
    if (contacts) {
      return contacts.length;
    } else {
      return 0;
    }
  }, [contacts]);

  return (
    <div className={style["list"]}>
      {loading ? (
        <Loader />
      ) : contactsLength ? (
        _renderContacts
      ) : (
        <div className={style["empty"]}>Пусто</div>
      )}
    </div>
  );
};

export default React.memo(List);
