import './ButtonRequest.scss';
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_for_button.svg";
import { useState } from 'react';

function ButtonRequest({ isSmall, handleRequestModal }) {
  const [isActive, setIsActive] = useState(false);
  const classButton = cx("buttonRequest btn btn_full", {
    "btn btn_full btn_smaller": isSmall,
  });
  
  const classButtonInner = cx("buttonRequest__inner", {
    "buttonRequest__inner_active": isActive && !isSmall,
  });

  const handleClick = () => {
    setIsActive(true)
    setTimeout(() => {
      handleRequestModal();
      setIsActive(false)
    }, 200)
  } 

  return (
      <button className={classButton} onClick={handleClick}>
        <div className={classButtonInner}>
          Отправить заявку
          {!isSmall && 
          <div className='buttonRequest__arrowWrapper'>
          <Arrow className='buttonRequest__arrow'/>
        </div>
      }
      </div>
      </button>
  );
}

export default ButtonRequest;
