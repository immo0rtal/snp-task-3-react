import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, selectLoading } from "#/store/selectors";
import { contactsGet } from "#/store/reducers/phonebook.js";
import Item from "@/Item";
import Loader from "@/Loader";
import style from "./index.module.scss";

const List = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);

  React.useEffect(() => {
    dispatch(contactsGet());
  }, [dispatch]);

  const _renderContacts = React.useMemo(() => {
    return contacts.map((contact, index) => (
      <Item key={index} contact={contact} />
    ));
  }, [contacts]);

  return (
    <div className={style["list"]}>
      {loading ? <Loader /> : _renderContacts}
    </div>
  );
};

export default React.memo(List);
