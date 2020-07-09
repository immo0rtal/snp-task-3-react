import React from "react";
import Main from "&/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactPage from "&/ContactPage";
import { contactsGet } from "#/store/reducers/phonebook.js";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "#/store/selectors";

const Application = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  React.useEffect(() => {
    dispatch(contactsGet());
  }, [dispatch]);

  React.useEffect(() => {
    localStorage.setItem("Contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route path="/contacts" component={Main} exact={true}></Route>
        <Route path="/contacts/:id" component={ContactPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default React.memo(Application);
