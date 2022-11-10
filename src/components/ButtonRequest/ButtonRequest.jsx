import './ButtonRequest.scss';
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_for_button.svg";
import { useState } from 'react';

function ButtonRequest({ size, handleRequestModal }) {
  const [isActive, setIsActive] = useState(false);
  const classButton = cx("buttonRequest btn btn_full", {
    "btn btn_full btn_smaller": size === 'small',
    "btn btn_full btn_smallerOnTablet": size === 'smallerOnTablet',
  });
  
  const classButtonInner = cx("buttonRequest__inner", {
    "buttonRequest__inner_active": isActive,
  });

  const classArrowWrapper = cx("buttonRequest__arrowWrapper", {
    "buttonRequest__arrowWrapper_small": size === 'small',
  });

  const handleClick = () => {
    setIsActive(true)
    setTimeout(() => {
      handleRequestModal();
      setIsActive(false)
    }, 250)
  } 

  return (
      <button className={classButton} onClick={handleClick}>
        <div className={classButtonInner}>
          Отправить заявку
          <div className={classArrowWrapper}>
          <Arrow className="buttonRequest__arrow"/>
        </div>
      </div>
      </button>
  );
}

export default ButtonRequest;
