import './ButtonCalculateModal.scss';
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_for_button_calc.svg";
import { useState } from 'react';

function ButtonCalculateModal({ handleCalculationModal, handleLoading }) {
  const [isActive, setIsActive] = useState(false);

  const classButtonInner = cx("buttonCalculateModal__inner", {
    "buttonCalculateModal__innerActive": isActive,
  });

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      handleCalculationModal();
      handleLoading();
      setIsActive(false);
    }, 350)
  }

  return (
    <button className="buttonCalculateModal btn_full" onClick={handleClick}>
      <div className={classButtonInner}>
        Расчитать стоимость
        <div className="buttonCalculateModal__arrowWrapper">
          <Arrow className="buttonCalculateModal__arrow" />
        </div>
      </div>
    </button>
  )
}

export default ButtonCalculateModal;
