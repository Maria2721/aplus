import "./HelpDesk.scss";
// import * as cx from "classnames";
import HelpInput from "../HelpInput/HelpInput";
import { helpFields } from "./helpFields";
import { Link } from "react-router-dom";
import { ReactComponent as AlertIcon } from "../../assets/imgs/alert_icon.svg";
import { initialState } from "./initialState";
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import ButtonSend from "../ButtonSend/ButtonSend";
import { useState } from "react";

export default function HelpModal({ handleModal, opened }) {
const [state, setState] = useState(initialState)
const [phoneValue, setPhoneValue] = useState('');
const [valid, setValid] = useState(false);

  const handleChange = (e, id) => {
    // const value = e.target.value.trimStart().replace(/ +/g, " ");
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

const handleClick = () => {
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
      console.log(`Фамилия: ${state.helpSurname.value.trimStart().replace(/ +/g, " ")},
                Имя: ${state.helpName.value.trimStart().replace(/ +/g, " ")},
                Отчество: ${state.helpMiddle.value.trimStart().replace(/ +/g, " ")},
                Название компании:${state.helpInn.value.trimStart().replace(/ +/g, " ")},
                Телефон: ${phoneValue.trimStart().replace(/ +/g, " ")},
                Почта: ${state.helpEmail.value.trimStart().replace(/ +/g, " ")},
                Вопрос: ${state.helpQuestion.value.trimStart().replace(/ +/g, " ")}.`)
      setState(initialState);
      setPhoneValue('');
    }
};

const validateForm = () => {
  setValid(true)
  const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
  const regNumber = /\d{1,3}/;
  const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  
      for (const field of helpFields) {
          const { rule, id } = field;
          const value = state[id].value.trimStart().replace(/ +/g, " ");
          let error;
  
          switch (rule) {
              case 'name':
                if (value.length === 0) {
                  error = 'Необходимо заполнить';
                  setValid(false);
                  break;
                } 
                if (value.length > 200) {
                    error = 'Максимум 200 символов';
                    setValid(false);
                    break;
                }
                if (!regName.test(value)) {
                    error = 'Недопустимые символы';
                    setValid(false);
                    break;
                  }
                break;
            case 'middle':
                if (value.length !== 0 && value.length > 200) {
                    error = 'Максимум 200 символов';
                    setValid(false);
                    break;
                }
                if (value.length !== 0 && !regName.test(value)) {
                    error = 'Недопустимые символы';
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
            case 'phone':
                if (!isPossiblePhoneNumber(phoneValue)) {
                  error = 'Недопустимая длина';
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
            if (!regEmail.test(value)) {
                error = 'Недопустимый формат';
                setValid(false);
                break;
              }
            break;
            case 'question':
                if (value.length === 0) {
                  error = 'Необходимо заполнить';
                  setValid(false);
                  break;
                } 
                if (value.length > 5000) {
                    error = 'Максимум 5000 символов';
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
    <div className="help">
            <div className="help__rows">
              {helpFields.map((item) => (
                <HelpInput
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  label={item.label}
                  value={state[item.id].value}
                  type={item.type}
                  view={item.view}
                  blurHandler={blurHandler}
                  phoneValue={phoneValue}
                  handlePhoneValue={setPhoneValue}
                  handleChange={handleChange}
                  handleClick={handleClick}
                  errorMessage={state[item.id].error}
                  isDirty={state[item.id].isDirty}
                />
              ))}
            </div>
            <div className="help__footer">
              <div className="help__helper"></div>
                <div className="help__alertAndButton">
                    <div className="help__alert">
                      <div>
                          <AlertIcon className="help__alertIcon" />
                      </div>
                      <span>
                        Нажимая «Отправить», вы даете{" "}
                        <Link
                          to="/agreement"
                          target="_blank"
                          rel="noreferrer"
                          className="help__agreement">
                          согласие на обработку персональных данных
                        </Link>
                      </span>
                    </div>
                    <ButtonSend capitalLetters={true} handleSendForm={handleClick} isValid={valid} handleModal={handleModal}>ОТПРАВИТЬ</ButtonSend>
                </div>
              </div>
    </div>
  );
}