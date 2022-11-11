import { useState } from 'react';
import './ButtonCalculate.scss';
import * as cx from "classnames";

function ButtonCalculate({ handleCalculatorModal }) {
  const [isActive, setIsActive] = useState(false);

  const classButton = cx("btn btn_blank buttonCalculate", {
    "buttonCalculate__inactive": isActive === false,
    "buttonCalculate__active": isActive === true,
  });

  const handleClick = () => {
    setIsActive(true)
    setTimeout(() => {
      handleCalculatorModal();
      setIsActive(false)
    }, 250)
  }

  return (
    <button className={classButton} onClick={handleClick}>
      Рассчитать стоимость
    </button>
  )
}

export default ButtonCalculate;
