import './Select.scss';
import * as cx from "classnames";
import { ReactComponent as ArrowMore } from "../../assets/imgs/arrow-more-calc.svg";
import { ReactComponent as ArrowLess } from "../../assets/imgs/arrow-less-calc.svg";

import { useState } from 'react';

function Select({ isModal, handleChange, firstValue, secondValue, value, name, question, firstOption, secondOption }) {
  const [show, setShow] = useState(false);

  const classSelect = cx("select", {
    "select_modal": isModal,
    "select_showOptions": show,
  });

  return (
    <div className={classSelect} id={name}>
      <button className="select__questionBtn" onClick={() => setShow(!show)}>
        <div className="select__questionBtnTitle">{question}</div>
        {show ? <ArrowLess className="select__questionBtnArrow" />
          : <ArrowMore className="select__questionBtnArrow" />}
      </button>

      {show &&
        <div className="select__options">
          <div className="select__optionsRadioFirst">
            <input type="radio" name={name}
              className="select__optionsRadioInput"
              value={firstValue}
              checked={value === firstValue ? true : false}
              onChange={handleChange} />
            <span className="select__optionsText">{firstOption}</span>
          </div>
          <div className="select__optionsRadioSecond">
            <input type="radio" name={name}
              className="select__optionsRadioInput"
              value={secondValue}
              checked={value === secondValue ? true : false}
              onChange={handleChange} />
            <span className="select__optionsText">{secondOption}</span>
          </div>
        </div>}
    </div>
  )
}

export default Select;
