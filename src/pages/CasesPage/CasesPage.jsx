import './CasesPage.scss';
import { Link } from "react-router-dom";

const CasesPage = () => (
  <div className="casesPage container">
    <div className="casesPage__inner container__row">
      <h1>КЕЙСЫ</h1>
      <Link to="/case-fruitdelivery" className="casesPage__link">
        Поставка фруктов и овощей
      </Link>
      <Link to="/case-seafooddelivery" className="casesPage__link">
        Поставка морепродуктов
      </Link>
      <Link to="/case-softwaredevelopment" className="casesPage__link">
        Разработка программного обеспечения
      </Link>
      <Link to="/case-itoutsourcing" className="casesPage__link">
        IT-аутсорсинг
      </Link>
    </div>
  </div>
);

export default CasesPage;
