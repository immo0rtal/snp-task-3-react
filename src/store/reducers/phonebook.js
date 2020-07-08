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
    changeField(state, { payload }) {
      state.form[payload.name] = payload.value;
    },
    contactsGet(state) {
      state.loading = true;
    },
    contactsGetSuccess(state, { payload }) {
      state.loading = false;
      payload.contacts.map((item) => {
        return state.contacts.push(item);
      });
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
  },
});

export const {
  clearForm,
  changeField,
  contactsGet,
  contactsGetSuccess,
  contactsGetFailed,
  contactsPost,
  contactsPostSuccess,
  contactsPostFailed,
} = phoneBookSlice.actions;

export default phoneBookSlice.reducer;
