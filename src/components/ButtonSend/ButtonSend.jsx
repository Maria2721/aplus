import "./ButtonSend.scss";
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_for_button.svg";
import { ReactComponent as Check } from "../../assets/imgs/send_check.svg";
import { useState, useEffect } from "react";

function ButtonSend({ handleSendForm, isSending, clearInputsForm, handleModal, children, capitalLetters }) {
  const [arrowMove, setArrowMove] = useState(false);
  const [checkVisible, setCheckVisible] = useState(false);

  const classArrowWrapper = cx("buttonSend__arrowWrapper", {
    buttonSend__arrowWrapper_active: arrowMove,
  });

  const classArrow = cx("buttonSend__arrow", {
    buttonSend__arrow_active: arrowMove,
    buttonSend__arrow_bigger: capitalLetters,
  });

  const classCheckWrapper = cx("buttonSend__checkWrapper", {
    buttonSend__checkWrapper_active: checkVisible,
    buttonSend__checkWrapper_bigger: capitalLetters,
  });

  const classText = cx("buttonSend__sendedText", {
    buttonSend__sendedText_capital: capitalLetters,
  });

  const handleAnimation = () => {
    setArrowMove(true);

    setTimeout(() => {
      setCheckVisible(true);
      clearInputsForm();
    }, 500);

    setTimeout(() => {
      handleModal();
      setArrowMove(false);
      setCheckVisible(false);
    }, 1500);
  }

  useEffect(() => {
    if (isSending === true) {
      handleAnimation();
      //sendData(values);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSending])

  return (
    <button className="buttonSend btn btn_full btn__helpmodal" onClick={() => handleSendForm()}>
      <div className="buttonSend__inner">
        {arrowMove ? <div className={classText}>Отправлено</div> : children}
        <div className={classArrowWrapper}>
          <Arrow className={classArrow} />
        </div>
        <div className={classCheckWrapper}>
          <Check className="buttonSend__check" />
        </div>
      </div>
    </button>
  );
}

export default ButtonSend;
