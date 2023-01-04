import './Request.scss';
// import * as cx from "classnames";
import ButtonSend from '../ButtonSend/ButtonSend';
import RequestInput from '../RequestInput/RequestInput';
import { requestFields } from './requestFields';
import { ReactComponent as CheckboxMark } from "../../assets/imgs/checkbox_mark.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { initialState } from "./initialState";

function Request({ handleModal }) {
  const [valid, setValid] = useState(false);
  const [agreeToAllTerms, setAgreeToAllTerms] = useState(true);
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
    inn: {
      value: '',
      isDirty: false,
      error: ''
    }
  });
  const { surname, name, middle, email, inn } = state;

  const handleChange = (e, id) => {
    // let value = e.target.value.trimStart().replace(/ +/g, " ");
    setState({
      ...state,
      [id]: {
        ...state[id],
        value: e.target.value
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

  const handleSendForm = () => {
    validateForm();

    for (let key in state) { // проходим по стейту и отмечаем isDirty, чтобы отобразилась ошибка у всех
      setState((state) => ({
        ...state,
        [key]: {
          ...state[key],
          isDirty: true
        }
      }));
    }

    if (valid) {
      console.log(`Фамилия: ${surname.value.trim()},
    Имя: ${name.value.trim()},
    Отчество: ${middle.value.trim()},
    Email:${email.value.trim()},
    ИНН: ${inn.value.trim()}`)
      // handleModal() // закрытие модалки перенесено в кнопку
      setState(initialState); // возвращаем состояние к началу - почему не возвращается?
    }
  };

  const validateForm = () => {
    setValid(true);
    const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/; // /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    const regEmailFirstSign = /^[a-zA-Z0-9]/;
    const regNumber = /^\d+$/;

    if (!agreeToAllTerms) {
      setValid(false);
    }

    for (const field of requestFields) {
      const { rule, id } = field;
      const value = state[id].value.trim();
      let error;

      switch (rule) {
        case 'name':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (!regName.test(value)) {
            error = 'Недопустимые символы';
            setValid(false);
            break;
          }
          if (value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
          }
          break;
        case 'inn':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (!regNumber.test(value)) {
            error = 'Недопустимый формат';
            setValid(false);
            break;
          }
          if ((value.length > 0) && (value.length < 10)) {
            error = 'Минимум 10 символов';
            setValid(false);
            break;
          }
          if (value.length > 12) {
            error = 'Максимум 12 символов';
            setValid(false);
            break;
          }
          break;
        case 'middle':
          if (value.length !== 0 && !regName.test(value)) {
            error = 'Недопустимые символы';
            setValid(false);
            break;
          }
          if (value.length !== 0 && value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
          }
          break;
        case 'email':
          if (value.length === 0) {
            error = 'Необходимо заполнить';
            setValid(false);
            break;
          }
          if (!regEmailFirstSign.test(Array.from(value)[0])) {
            error = 'Недопустимый формат';
            setValid(false);
            break;
          }
          if (!regEmail.test(value)) {
            error = 'Недопустимый формат';
            setValid(false);
            break;
          }
          if (value.length < 5) {
            error = 'Минимум 5 символов';
            setValid(false);
            break;
          }
          if (value.length > 200) {
            error = 'Максимум 200 символов';
            setValid(false);
            break;
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
              value={state[field.id].value}
              blurHandler={blurHandler}
              handleChange={handleChange}
              errorMessage={state[field.id].error}
              isDirty={state[field.id].isDirty}
            />
          ))}
        </div>

        <div className="request__checkbox checkbox">
          <input className="checkbox__input" id="requestCheckbox" type="checkbox"
            checked={agreeToAllTerms}
            onChange={() => setAgreeToAllTerms((curr) => !curr)} />
          <label className="checkbox__label" htmlFor="requestCheckbox">
            <CheckboxMark className="checkbox__mark" />
            <div className="checkbox__text">Принимаю условия <Link to="/agreement" onClick={handleModal} className="checkbox__link">соглашения об обработке персональных данных</Link></div>
          </label>
        </div>
        <div className="request__buttonWrapper">
          <ButtonSend handleSendForm={handleSendForm} isValid={valid} handleModal={handleModal}>Отправить заявку</ButtonSend>
        </div>
      </div>
    </div>
  )
}

export default Request;
