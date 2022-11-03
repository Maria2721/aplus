import './Modal.scss';
import * as cx from "classnames";
import { ReactComponent as Close } from "../../assets/imgs/close_icon_black.svg";


function Modal ({ handleModal, opened, className, children }) {
  const classModal= cx("modal", {
    "modal_show": opened,
});

  return (
    <div className={classModal}>
      <div className='modal__inner'>
        <div className={className} onClick={e => e.stopPropagation()}>
          {children}
          <button className="modal__closeButton" onClick={handleModal}>
                <Close className="modal__closeIcon" />
          </button>
        </div>
      </div>
    </div>
  )
};

export default Modal;