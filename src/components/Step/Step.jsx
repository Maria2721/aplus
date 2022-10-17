import './Step.scss';
import * as cx from "classnames";

function Step ({text, number, highlight}) {
  const classStep = cx("step", {
    "step step_highlight": highlight,
  });

  return (
    <div className={classStep}>
            <div className="step__number">{number}</div>
      <div className="step__header">{text}</div>
    </div>
  )
}

export default Step;
