import Main from "&/Main";
import ContactPage from "&/ContactPage";

export const placeholders = {
  title: "Название",
  owner: "Владелец",
  type: "Тип",
  adress: "Адрес",
  number: "Телефон",
};

export const fields = ["title", "owner", "type", "adress", "number"];

export const root = "http://localhost:3001/phonebook";

export const routes = [
  { path: "/", exact: true, component: Main },
  { path: "/contacts", exact: true, component: Main },
  { path: "/contacts/:id", component: ContactPage },
  { path: "/?search=:str", component: Main },
];

export const apiProperties = {
  SEARCH: (param) => `${root}/?q=${param}`,
  ROOT: () => `${root}`,
  POST: (id) => `${root}/${id}`,
};

export const api = (type, param) => {
  return apiProperties[type](param);
};

export const apiMethod = {
  SEARCH: "SEARCH",
  ROOT: "ROOT",
  POST: "POST",
};
