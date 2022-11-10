import { useState } from 'react';
import useMountTransition from "../../hooks/useMountTransition";
import cn from "classnames";
import './FaqItem.scss';
import ArrowMore from "../../assets/imgs/arrow-more.svg";
import ArrowLess from "../../assets/imgs/arrow-less.svg";

function FaqItem({ id, question, answer }) {
  const [show, setShow] = useState(false);
  const hasTransitionedIn = useMountTransition(show, 400);

  return (
    <div className={cn("faqItem", { "faqItem_lastopen": (show === true && id === "deposit") })} id={id}>
      <div className={cn("faqItem__question", { "faqItem__question_smaller": show === true })} onClick={() => setShow(!show)}>
        <div className="faqItem__question__title">{question}</div>
        <button className="faqItem__question__btn" onClick={() => setShow(!show)}>
          <img src={(hasTransitionedIn || show) ? ArrowLess : ArrowMore} alt="Показать" />
        </button>
      </div>
      {(hasTransitionedIn || show) && (
        <div className={`faqItem__answer ${hasTransitionedIn && "in"} ${show && "visible"}`}>
          {answer}
        </div>
      )}
    </div>
  )
}

export default FaqItem;
