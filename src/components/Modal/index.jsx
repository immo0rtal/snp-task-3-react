import React from "react";
import { createPortal } from "react-dom";
import style from "./index.module.scss";
import closeButton from "#/assets/images/close.png";
import FormInput from "@/FormInput";
import { fields } from "#/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  changeField,
  contactsPost,
  contactsPut,
  setForm,
  clearForm,
} from "#/store/reducers/phonebook";
import { selectFormData, selectLoading } from "#/store/selectors";

const Modal = (props) => {
  const { close, edit, contact } = props;
  const dispatch = useDispatch();
  const dataField = useSelector(selectFormData);
  const loading = useSelector(selectLoading);

  React.useEffect(() => {
    if (edit) {
      dispatch(setForm({ contact }));
    }
  }, [contact, dispatch, edit]);

  const valid = React.useMemo(() => {
    return Object.values(dataField).some((text) => !text);
  }, [dataField]);

  const [isNotValid, setIsNotValid] = React.useState(valid);

  const handleInputChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      const { name } = event.target.dataset;
      dispatch(changeField({ value, name }));
    },
    [dispatch]
  );

  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      setIsNotValid(valid);
      if (!valid) {
        close();
        if (edit) {
          dispatch(
            contactsPut({ dataField: { ...dataField, id: contact.id } })
          );
        } else {
          dispatch(contactsPost({ dataField }));
        }
      }
    },
    [dispatch, dataField, close, valid, setIsNotValid, edit, contact]
  );

  const _renderInput = React.useMemo(() => {
    return fields.map((field, index) => (
      <FormInput
        key={index}
        field={field}
        onChange={handleInputChange}
        data={dataField}
      />
    ));
  }, [handleInputChange, dataField]);

  const closeModal = React.useCallback(() => {
    close();
    if (edit) {
      dispatch(clearForm());
    }
  }, [dispatch, close, edit]);

  return createPortal(
    <div className={style["modal-wrapper"]}>
      <div className={style["modal"]}>
        <button className={style["close"]} onClick={closeModal}>
          <img src={closeButton} alt="close" />
        </button>
        <form className={style["form"]} onSubmit={handleSubmit} noValidate>
          {_renderInput}
          <button className={style["button"]} type="submit" disabled={loading}>
            {edit ? "Заменить" : "Создать"}
          </button>
          {isNotValid && (
            <span className={style["valid-message"]}>
              Не все поля заполнены
            </span>
          )}
        </form>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default React.memo(Modal);
