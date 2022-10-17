import './HomePage.scss';
import FirstScreen from '../../components/FirstScreen/FirstScreen';
import FiveSteps from '../../components/FiveSteps/FiveSteps';

function HomePage () {
  return (
  <div className="homePage">
    <FirstScreen/>
    <FiveSteps/>
    Home Page
  </div>
)
};

export default HomePage;
