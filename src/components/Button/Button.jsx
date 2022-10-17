import './Button.scss';
import * as cx from "classnames";

function Button({children, blank}) {
  const classButton = cx("btn btn_full", {
    "btn btn_blank": blank,
  });

  return (
      <button className={classButton}>
          {children}
      </button>
  );
}

export default Button;
