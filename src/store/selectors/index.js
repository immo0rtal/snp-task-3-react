import { createSelector } from "reselect";

export const selectContacts = createSelector(
  (state) => state.phonebook.contacts,
  (contacts) => contacts
);

export const selectLoading = createSelector(
  (state) => state.phonebook.loading,
  (loading) => loading
);
