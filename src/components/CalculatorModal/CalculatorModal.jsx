import './CalculatorModal.scss';
import * as cx from "classnames";
import Calculator from '../Calculator/Calculator';
import { ReactComponent as Close } from "../../assets/imgs/close_icon_black.svg";

function CalculatorModal ({ handleModal, opened }) {
  const classCalculatorModal= cx("calculatorModal", {
    "calculatorModal_show": opened,
});

  return (
    <div className={classCalculatorModal}>
      <div className='calculatorModal__inner' onClick={handleModal}>
        <div className='calculatorModal__content' onClick={e => e.stopPropagation()}>
              <button className="calculatorModal__closeButton" onClick={handleModal}>
                <Close className="calculatorModal__closeIcon" />
              </button>
          <Calculator isModal={true}/>
        </div>
      </div>
    </div>
  )
}

export default CalculatorModal;
