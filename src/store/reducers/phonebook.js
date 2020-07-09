import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  contacts: [],
  form: {
    title: "",
    owner: "",
    type: "",
    adress: "",
    number: "",
  },
  loading: false,
  errorMessage: null,
};

const phoneBookSlice = createSlice({
  name: "phonebook",
  initialState,
  reducers: {
    clearForm(state) {
      state.form = initialState.form;
    },
    setForm(state, { payload }) {
      const { title, owner, type, adress, number } = payload.contact;
      state.form = { title, owner, type, adress, number };
    },
    changeField(state, { payload }) {
      state.form[payload.name] = payload.value;
    },
    contactsGet(state) {
      state.loading = true;
    },
    contactsGetSuccess(state, { payload }) {
      state.loading = false;
      state.contacts = payload.contacts;
    },
    contactsGetFailed(state, { payload }) {
      state.loading = false;
      state.errorMessage = payload.errorMessage;
    },
    contactsPost(state) {
      state.loading = true;
    },
    contactsPostSuccess(state, { payload }) {
      state.loading = false;
      state.contacts.push(payload.contact);
      state.form = initialState.form;
    },
    contactsPostFailed(state, { payload }) {
      state.loading = false;
      state.errorMessage = payload.errorMessage;
    },
    contactsDelete(state) {
      state.loading = true;
    },
    contactsDeleteSuccess(state, { payload }) {
      state.loading = false;
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== payload.id
      );
    },
    contactsDeleteFailed(state, { payload }) {
      state.loading = false;
      state.errorMessage = payload.errorMessage;
    },
    contactsPut(state) {
      state.loading = true;
    },
    contactsPutSuccess(state, { payload }) {
      state.loading = false;
      const id = state.contacts.findIndex((el) => el.id === payload.contact.id);
      state.contacts[id] = payload.contact;
    },
    contactsPutFailed(state, { payload }) {
      state.loading = false;
      state.errorMessage = payload.errorMessage;
    },
  },
});

export const {
  clearForm,
  changeField,
  setForm,
  contactsGet,
  contactsGetSuccess,
  contactsGetFailed,
  contactsPost,
  contactsPostSuccess,
  contactsPostFailed,
  contactsDelete,
  contactsDeleteSuccess,
  contactsDeleteFailed,
  contactsPut,
  contactsPutSuccess,
  contactsPutFailed,
} = phoneBookSlice.actions;

export default phoneBookSlice.reducer;
