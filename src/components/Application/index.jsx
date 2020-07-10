import React from "react";
import Main from "&/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactPage from "&/ContactPage";
import { contactsGet } from "#/store/reducers/phonebook.js";
import { useDispatch } from "react-redux";

const Application = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(contactsGet());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route path="/contacts" component={Main} exact={true}></Route>
        <Route path="/contacts/:id" component={ContactPage}></Route>
        <Route path="/?search=:str" component={Main}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Application;
