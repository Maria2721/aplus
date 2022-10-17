import './ButtonRequest.scss';
import * as cx from "classnames";

function ButtonRequest({ isSmall }) {
  const classButton = cx("btn btn_full", {
    "btn btn_full btn_smaller": isSmall,
  });

  return (
      <button className={classButton}>
        Отправить заявку
      </button>
  );
}

export default ButtonRequest;
