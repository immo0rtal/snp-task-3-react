import { put, takeEvery, call } from "redux-saga/effects";
import {
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
  contactsSearch,
  contactsSearchSuccess,
  contactsSearchFailed,
} from "../reducers/phonebook.js";
import { getRequest, postRequest, deleteRequest, putRequest } from "#/agent";
import { api, apiMethod } from "#/utils/constants";

const { SEARCH, POST, ROOT } = apiMethod;

function* contactsGetEffect() {
  try {
    const contacts = yield call(getRequest, api(ROOT));
    yield put(
      contactsGetSuccess({
        contacts,
      })
    );
  } catch (errorMessage) {
    yield put(contactsGetFailed({ errorMessage }));
  }
}

function* contactsPostEffect(action) {
  const { dataField } = action.payload;
  try {
    const contact = yield call(postRequest, api(ROOT), dataField);
    yield put(
      contactsPostSuccess({
        contact,
      })
    );
  } catch (errorMessage) {
    yield put(contactsPostFailed({ errorMessage }));
  }
}

function* contactsDeleteEffect(action) {
  const { id } = action.payload;
  try {
    yield call(deleteRequest, api(POST, id), { id });
    yield put(
      contactsDeleteSuccess({
        id,
      })
    );
  } catch (errorMessage) {
    yield put(contactsDeleteFailed({ errorMessage }));
  }
}

function* contactsPutEffect(action) {
  const { dataField } = action.payload;
  try {
    const contact = yield call(putRequest, api(POST, dataField.id), dataField);
    yield put(
      contactsPutSuccess({
        contact,
      })
    );
  } catch (errorMessage) {
    yield put(contactsPutFailed({ errorMessage }));
  }
}

function* contactsSearchEffect(action) {
  const { value } = action.payload;
  try {
    const contacts = yield call(getRequest, api(SEARCH, value));
    yield put(
      contactsSearchSuccess({
        contacts,
      })
    );
  } catch (errorMessage) {
    yield put(contactsSearchFailed({ errorMessage }));
  }
}

function* watchContactsActions() {
  yield takeEvery(contactsGet, contactsGetEffect);
  yield takeEvery(contactsPost, contactsPostEffect);
  yield takeEvery(contactsDelete, contactsDeleteEffect);
  yield takeEvery(contactsPut, contactsPutEffect);
  yield takeEvery(contactsSearch, contactsSearchEffect);
}

export default watchContactsActions;
