import React from "react";
import style from "./index.module.scss";
import Modal from "@/Modal";
import { contactsSearch, changeSearchText } from "#/store/reducers/phonebook";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchText } from "#/store/selectors";
import { useDebounce } from "#/hooks";
import queryString from "query-string";
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);
  const searchText = useSelector(selectSearchText);
  const history = useHistory();
  const searchTextDebounce = useDebounce(searchText, 500);

  React.useEffect(() => {
    dispatch(contactsSearch({ value: searchTextDebounce }));
  }, [searchTextDebounce, dispatch]);

  React.useEffect(() => {
    const value = queryString.parse(props.location.search).search;
    if (searchText === "" && value) {
      dispatch(
        changeSearchText({
          text: value,
        })
      );
    }
  }, [dispatch, props.location, searchText]);

  const toggle = React.useCallback(() => setShowModal(!showModal), [showModal]);

  const onChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      if (value) {
        history.push(`/?search=${value}`);
      } else {
        history.push(`/`);
      }
      dispatch(changeSearchText({ text: value }));
    },
    [dispatch, history]
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
