import './FaqItem.scss';
import { faqItems } from './faqItems';
import Faq from '../Faq/Faq';

function FaqItem() {
  return (
    <div className="faqItem container">
      <div className="faqItem__inner container__row">
        <div className="faqItem__header">Берите столько, сколько нужно вашему бизнесу</div>
        <div className="faqItem__items">
          {faqItems.map((item) => (
            <Faq
              key={item.id}
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
