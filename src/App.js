import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SchemePage from './pages/SchemePage/SchemePage';
import CasesPage from './pages/CasesPage/CasesPage';
import MarketplacePage from './pages/MarketplacePage/MarketplacePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import CalculatorModal from './components/CalculatorModal/CalculatorModal';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const { pathname } = useLocation(); 
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false);
  const [openedCalculatorModal, setOpenedCalculatorModal] = useState(false);

  const handleBurgerMenu = () => {
    if (openedBurgerMenu) {
      setOpenedBurgerMenu(false);
      document.body.style = "";
    } else {
      setOpenedBurgerMenu(true)
      document.body.style.overflow = "hidden";
    }
  };

  const handleCalculatorModal = () => {
    if (openedCalculatorModal) {
      setOpenedCalculatorModal(false)
      document.body.style = "";
    } else {
      setOpenedCalculatorModal(true)
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <div className="App">
        <CalculatorModal handleModal={handleCalculatorModal} opened={openedCalculatorModal}/>
        <Header opened={openedBurgerMenu}
        handleBurger={handleBurgerMenu}
        handleCalculatorModal={handleCalculatorModal}/>
        <main>
          <Routes>
                  <Route path='/' element={<HomePage  handleCalculatorModal={handleCalculatorModal}/>}/>
                  <Route path='/scheme' element={<SchemePage/>}/>
                  <Route path='/cases' element={<CasesPage/>}/>
                  <Route path='/for-marketplaces' element={<MarketplacePage/>}/>
                  <Route path='/contacts' element={<ContactsPage/>}/>
              </Routes>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
