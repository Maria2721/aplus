import './Modal.scss';
import * as cx from "classnames";
import { ReactComponent as Close } from "../../assets/imgs/close_icon_black.svg";
import { RemoveScroll } from "react-remove-scroll";

function Modal({ handleModal, opened, className, children }) {
  const classModal = cx("modal", {
    "modal_show": opened,
  });

  const classModalInner = cx("modal__inner", {
    "modal__innerHelp": className === "modal__help",
  });

  if (!opened) {
    return null
  }

  return (
    <RemoveScroll removeScrollBar allowPinchZoom>
      <div className={classModal}>
        <div className={classModalInner}>
          <div className={className} onClick={e => e.stopPropagation()}>
            {children}
            <button className="modal__closeButton" onClick={handleModal}>
              <Close className="modal__closeIcon" />
            </button>
          </div>
        </div>
      </div>
    </RemoveScroll>
  )
};

export default Modal;