import './FaqItem.scss';
import { faqItems } from './faqItems';
import Faq from '../Faq/Faq';

function FaqItem() {
  return (
    <div className="faqItem container">
      <div className="faqItem__inner container__row">
        <h1 className="faqItem__header">Берите столько, сколько нужно вашему бизнесу</h1>
        <div className="faqItem__items">
          {faqItems.map((item) => (
            <Faq
              key={item.id}
              id={item.id}
              title={item.title}
              solution={item.solution}
              rate={item.rate}
              experience={item.experience}
              turnover={item.turnover}
              warehouse={item.warehouse}
              documents={item.documents}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FaqItem;
