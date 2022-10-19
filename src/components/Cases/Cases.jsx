import "./Cases.scss";
import Case1 from "../../assets/imgs/case1.jpg"
import Case1Retina from "../../assets/imgs/case1_2x.jpg"
import Case2 from "../../assets/imgs/case2.jpg"
import Case2Retina from "../../assets/imgs/case2_2x.jpg"
import Case3 from "../../assets/imgs/case3.jpg"
import Case3Retina from "../../assets/imgs/case3_2x.jpg"
import { Link } from "react-router-dom";

function Cases() {
  return (
    <div className="cases">
        <h1 className="cases__header">Кейсы</h1>
        <div className="cases__content">
          <div className="cases__leftSide">
            <Link to="/cases">
                <div className="cases__imgWrapper">
                  <img className="cases__img" alt="Кейс" src={Case1} srcSet={`${Case1Retina} 2x`}/>
                  <div className="cases__subtitle">Досрочное финансирование подрядчиков и поставщиков компании Увелка</div>
                </div>
            </Link>
          </div>
          <div className="cases__rightSide">
            <Link to="/cases">
              <div className="cases__imgWrapper">
                <img className="cases__img cases__img_smaller" alt="Кейс" src={Case2} srcSet={`${Case2Retina} 2x`}/>
                <div className="cases__subtitle cases__subtitle_smaller">Онлайн-факторинг для света и тепла</div>
              </div>
            </Link>
            <Link to="/cases">
              <div className="cases__imgWrapper">
                <img className="cases__img cases__img_smaller" alt="Кейс" src={Case3} srcSet={`${Case3Retina} 2x`}/>
                <div className="cases__subtitle cases__subtitle_smaller">Самарские коммунальные системы подключены к онлайн-факторингу</div>
              </div>
            </Link>
          </div>
          
        </div>
    </div>
  );
}

export default Cases;
