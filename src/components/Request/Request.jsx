import './Request.scss';
import ButtonSendRequest from '../ButtonSendRequest/ButtonSendRequest';
import RequestInput from '../RequestInput/RequestInput';
import { requestFields } from './requestFields';
import { ReactComponent as CheckboxMark } from "../../assets/imgs/checkbox_mark.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Request ({ handleModal }) {
  const [valid, setValid] = useState(false);
  const [state, setState] = useState({
    surname: {
        value: '',
        isDirty: false,
        error: ''
    },
    name: {
        value: '',
        isDirty: false,
        error: ''
    },
    middle: {
        value: '',
        isDirty: false,
        error: ''
    },
    email: {
      value: '',
      isDirty: false,
      error: ''
  },
    company: {
        value: '',
        isDirty: false,
        error: ''
    }
});

const handleChange = (e, id, type) => {
  let value;
  switch (type) {
    case 'text':
        value = e.target.value.trimStart().replace(/ +/g, " ");
      break;
    // case 'tel':
    //     value = e.target.value.trimStart().replace(/ +/g, " ").replace (/[^0-9+]/, '');
      // break;
    default:
    value = e.target.value;
}  

setState({
  ...state,
  [id]: {
      ...state[id],
      value: value
  }
});
};

const blurHandler = (type) => {
  setState((state) => ({
 ...state,
 [type]: {
     ...state[type],
     isDirty: true
 }
}));
  validateForm()
}

const handleClick = () => {
  validateForm();

  if (valid) {
    console.log('Форма отправлена')
    handleModal()
  }
};

const validateForm = () => {
  setValid(true);

    for (const field of requestFields) {
        const { rule, id } = field;
        const { value } = state[id];
        let error;

        switch (rule) {
            case 'required':
              if (value.length === 0) {
                error = 'Необходимо заполнить';
                setValid(false);
              }
              break;
            default:
            error = '';
        }    

        setState((state) => ({
            ...state,
            [id]: {
                ...state[id],
                error: error ? error : ''
            }
          }));
    }
}

  return (
    <div className="request">
    <h1 className="request__header">Заявка на факторинг</h1>
    <div className="request__form">
      <div className="request__inputsWrapper">
        {requestFields.map((field) => (
          <RequestInput
          key={field.id}
          id={field.id}
          name={field.name}
          type={field.type}
          rule={field.rule}
          value={state[field.id].value}
          blurHandler={blurHandler}
          handleChange={handleChange}
          errorMessage={state[field.id].error}
          isDirty={state[field.id].isDirty}
          />
        ))}
      </div>

      <div className="request__checkbox checkbox">
            <input className="checkbox__input" id="requestCheckbox" type="checkbox" required/>
            <label className="checkbox__label" htmlFor="requestCheckbox">
                <CheckboxMark className="checkbox__mark"/>
                <div className="checkbox__text">Принимаю условия <Link to="/" className="checkbox__link">соглашения об обработке персональных данных</Link></div>
            </label>
        </div>
    <div className="request__buttonWrapper">
      <ButtonSendRequest handleClick={handleClick}/>
    </div>
    </div>
    </div>
  )
}

export default Request;
