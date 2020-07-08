import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  contacts: [],
  loading: false,
  errorMessage: null,
};

const phoneBookSlice = createSlice({
  name: "phonebook",
  initialState,
  reducers: {
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
  },
});

export const {
  contactsGet,
  contactsGetSuccess,
  contactsGetFailed,
} = phoneBookSlice.actions;

export default phoneBookSlice.reducer;
