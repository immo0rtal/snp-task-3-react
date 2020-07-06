import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts } from "#/store/selectors";
import { contactsGet } from "#/store/reducers/phonebook.js";

const List = React.memo(() => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(contactsGet());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const _renderContacts = React.useMemo(() => {
    return contacts.map((contact, index) => {
      return (
        <div key={index}>
          <div>======================</div>
          <div>{contact.title}</div>
          <div>{contact.owner}</div>
          <div>{contact.adress}</div>
          <div>======================</div>
        </div>
      );
    });
  }, [contacts]);

  return <div>{_renderContacts}</div>;
});

export default List;
