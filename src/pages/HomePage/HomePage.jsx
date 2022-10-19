import './HomePage.scss';
import FirstScreen from '../../components/FirstScreen/FirstScreen';
import FiveSteps from '../../components/FiveSteps/FiveSteps';
import FactoringIs from '../../components/FactoringIs/FactoringIs';
import Interaction from '../../components/Interaction/Interaction';

function HomePage () {
  return (
  <div className="homePage">
    <FirstScreen/>
    <FiveSteps/>
    <FactoringIs/>
    <Interaction/>
  </div>
)};

export default HomePage;
