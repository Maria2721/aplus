import './ButtonSendRequest.scss';

function ButtonSendRequest ({ handleClick }) {
  return (
    <button  className="buttonSendRequest btn btn_full" onClick={handleClick}>
        <div className="buttonSendRequest__inner">
          Отправить заявку
          {/* {!isSmall && 
          <div className='buttonRequest__arrowWrapper'>
          <Arrow className='buttonRequest__arrow'/>
        </div>
      } */}
      </div>
    </button>
  )
}

export default ButtonSendRequest;
