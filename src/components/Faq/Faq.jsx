import './Faq.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';

function Faq({ id, title, solution, rate, experience, turnover, warehouse, documents }) {
  return (
    <div className="faq" id={id}>
      <div className="faq__header">{title}</div>
      <div className="faq__mainfirst">
        <div>Решение:<span>{solution}</span></div>
        <div>Ставки: {rate}</div>
      </div>
      <div className="faq__mainsecond">
        <div>Опыт:<span>{experience}</span></div>
        <div>Оборот: {turnover}</div>
        <div>Склад: {warehouse}</div>
        <div>Документы: {documents}</div>
      </div>
      <ButtonRequest isSmall={true} />
    </div>
  )
}

export default Faq;
