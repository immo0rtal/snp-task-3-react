import { createSelector } from "reselect";

export const selectContacts = createSelector(
  (state) => state.phonebook.contacts,
  (contacts) => contacts
);
