import './ButtonRequestCalculator.scss';
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_for_button_calc.svg";
import { useState } from 'react';

function ButtonRequestCalculator({ handleModal, handleRequestModal }) {
  const [isActive, setIsActive] = useState(false);

  const classButtonInner = cx("buttonRequestCalculator__inner", {
    "buttonRequestCalculator__innerActive": isActive,
  });

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      handleModal();
      handleRequestModal();
      setIsActive(false);
    }, 350)
  }

  return (
    <button className="buttonRequestCalculator btn_full" onClick={handleClick}>
      <div className={classButtonInner}>
        Отправить заявку
        <div className="buttonRequestCalculator__arrowWrapper">
          <Arrow className="buttonRequestCalculator__arrow" />
        </div>
      </div>
    </button>
  )
}

export default ButtonRequestCalculator;
