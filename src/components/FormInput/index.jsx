import React from "react";
import style from "./index.module.scss";
import { placeholders } from "#/utils/constants";

const FormInput = (props) => {
  const { field, onChange, data } = props;

  const getPlaceholder = React.useCallback(() => placeholders[field], [field]);

  return (
    <div className={style["form-input"]}>
      <input
        className={style["input"]}
        onChange={onChange}
        type="text"
        data-name={field}
        value={data[field]}
        placeholder={getPlaceholder(field)}
      />
    </div>
  );
};

export default React.memo(FormInput);
