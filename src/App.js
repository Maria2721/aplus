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
import { useDisableBodyScroll } from './hooks/useDisableBodyScroll';

function App() {
  const { pathname } = useLocation(); 
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false);
  const [openedCalculatorModal, setOpenedCalculatorModal] = useState(false);
  useDisableBodyScroll(openedBurgerMenu)
  useDisableBodyScroll(openedCalculatorModal)

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style = "";
  }, [pathname]);

  return (
      <div className="App">
        <CalculatorModal handleModal={() => setOpenedCalculatorModal((curr) => !curr)} opened={openedCalculatorModal}/>
        <Header opened={openedBurgerMenu}
        handleBurger={() => setOpenedBurgerMenu((curr) => !curr)}
        handleCalculatorModal={() => setOpenedCalculatorModal((curr) => !curr)}/>
        <main>
          <Routes>
                  <Route path='/' element={<HomePage  handleCalculatorModal={() => setOpenedCalculatorModal((curr) => !curr)}/>}/>
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
