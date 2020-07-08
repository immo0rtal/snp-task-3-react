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
  clearForm,
} from "#/store/reducers/phonebook";
import { selectFormData, selectLoading } from "#/store/selectors";

const Modal = (props) => {
  const { close } = props;
  const dispatch = useDispatch();
  const dataField = useSelector(selectFormData);
  const loading = useSelector(selectLoading);

  const valid = React.useMemo(() => {
    return Object.values(dataField).some((text) => !text);
  }, [dataField]);

  const handleInputChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      const { name } = event.target.dataset;
      dispatch(changeField({ value, name }));
    },
    [dispatch]
  );

  const handleClose = React.useCallback(() => {
    close();
    dispatch(clearForm());
  }, [dispatch, close]);

  const handleSubmit = React.useCallback(
    (event) => {
      event.preventDefault();
      close();
      dispatch(contactsPost({ dataField }));
    },
    [dispatch, dataField, close]
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

  return createPortal(
    <div className={style["modal-wrapper"]}>
      <div className={style["modal"]}>
        <button className={style["close"]} onClick={handleClose}>
          <img src={closeButton} alt="close" />
        </button>
        <form className={style["form"]} onSubmit={handleSubmit} noValidate>
          {_renderInput}
          <button
            className={style["button"]}
            type="submit"
            disabled={loading || valid}
          >
            Создать
          </button>
        </form>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default React.memo(Modal);
