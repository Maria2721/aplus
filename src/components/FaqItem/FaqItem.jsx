import { useState } from 'react';
import cn from "classnames";
import './FaqItem.scss';
import ArrowMore from "../../assets/imgs/arrow-more.svg";
import ArrowLess from "../../assets/imgs/arrow-less.svg";

function FaqItem({ id, question, answer }) {
  const [show, setShow] = useState(false);

  return (
    <div className="faqItem" id={id}>
      <div className={cn("faqItem__question", { "faqItem__question_smaller": show === true })}>
        <div className="faqItem__question__title">{question}</div>
        <button className="faqItem__question__btn" onClick={() => setShow(!show)}>
          <img src={show ? ArrowLess : ArrowMore} alt="Показать" />
        </button>
      </div>
      {show && <div className="faqItem__answer">{answer}</div>}
    </div>
  )
}

export default FaqItem;
