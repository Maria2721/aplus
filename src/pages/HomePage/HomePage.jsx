import './HomePage.scss';
import FirstScreen from '../../components/FirstScreen/FirstScreen';
import FiveSteps from '../../components/FiveSteps/FiveSteps';
import FactoringIs from '../../components/FactoringIs/FactoringIs';
import Interaction from '../../components/Interaction/Interaction';
import Cases from '../../components/Cases/Cases';

function HomePage () {
  return (
  <div className="homePage">
    <FirstScreen/>
    <FiveSteps/>
    <FactoringIs/>
    <Interaction/>
    <div className='container'>
      <div className='homePage__casesAndDocuments container__row'>
        <Cases/>
      </div>
      </div>
  </div>
)};

export default HomePage;
