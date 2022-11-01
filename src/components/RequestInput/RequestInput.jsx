import "./RequestInput.scss";
import * as cx from "classnames";

function RequestInput({ type, name, id, errorMessage, blurHandler, handleChange, isDirty }) {
  const classInput = cx("requestInput__input", {
    "requestInput__input_error": errorMessage && isDirty,
  });
  return (
    <div className="requestInput">
      <label className="requestInput__label" htmlFor={id}>
        {name}
        </label>
        {(errorMessage && isDirty) && <div className="requestInput__error">Необходимо заполнить</div>}
        <input
          className={classInput}
          onChange={(e) => handleChange(e, id, type)}
          type={type}
          onBlur={() => blurHandler(id)}
        />
   </div>
  );
}

export default RequestInput;
