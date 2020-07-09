import React from "react";
import style from "./index.module.scss";
import Modal from "@/Modal";
import { contactsSearch, changeSearchText } from "#/store/reducers/phonebook";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchText } from "#/store/selectors";
import { useDebounce } from "#/hooks";

const Header = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const searchText = useSelector(selectSearchText);

  const searchTextDebounce = useDebounce(searchText, 500);

  const search = React.useCallback(() => {
    dispatch(contactsSearch({ value: searchTextDebounce }));
  }, [dispatch, searchTextDebounce]);

  React.useEffect(() => {
    search();
  }, [searchTextDebounce, search]);

  const toggle = React.useCallback(() => setShowModal(!showModal), [showModal]);

  const onChange = React.useCallback(
    (event) => {
      dispatch(changeSearchText({ text: event.target.value }));
    },
    [dispatch]
  );

  return (
    <div className={style["header"]}>
      <h1 className={style["title"]}>Телефонный справочник</h1>
      <input
        className={style["search"]}
        onChange={onChange}
        placeholder="Поиск"
        value={searchText}
        type="text"
      />
      <button className={style["add"]} onClick={toggle}>
        Добавить
      </button>
      {showModal && <Modal edit={false} close={toggle} />}
    </div>
  );
};

export default React.memo(Header);
