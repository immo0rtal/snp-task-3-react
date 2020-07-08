import { createSelector } from "reselect";

export const selectContacts = createSelector(
  (state) => state.phonebook.contacts,
  (contacts) => contacts
);

export const selectLoading = createSelector(
  (state) => state.phonebook.loading,
  (loading) => loading
);

export const selectFormData = createSelector(
  (state) => state.phonebook.form,
  (form) => form
);
