import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { contactsGet } from "#/store/reducers/phonebook.js";
import { useDispatch } from "react-redux";
import { routes } from "#/utils/constants";

const Application = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(contactsGet());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route key={path} exact={exact} path={path} component={component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Application;
