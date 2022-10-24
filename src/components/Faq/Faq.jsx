import './Faq.scss';
import ButtonRequest from '../ButtonRequest/ButtonRequest';

function Faq({ title, solution, rate, experience, turnover, warehouse, documents }) {
  return (
    <div className="faq">
      <div className="faq__header">{title}</div>
      <div className="faq__mainfirst">
        <div>Решение: {solution}</div>
        <div>Ставки: {rate}</div>
      </div>
      <div className="faq__mainsecond">
        <div>Опыт: {experience}</div>
        <div>Оборот: {turnover}</div>
        <div>Склад: {warehouse}</div>
        <div>Документы: {documents}</div>
      </div>
      <ButtonRequest />
    </div>
  )
}

export default Faq;
