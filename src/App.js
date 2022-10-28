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

  const closeBurgerMenu = () => {
    if (openedBurgerMenu) {
      setOpenedBurgerMenu(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <div className="App">
        <CalculatorModal handleModal={() => setOpenedCalculatorModal((curr) => !curr)} opened={openedCalculatorModal}/>
        <Header opened={openedBurgerMenu} closeBurgerMenu={closeBurgerMenu} handleBurger={() => setOpenedBurgerMenu(!openedBurgerMenu)}/>
        <main>
          <Routes>
                  <Route path='/' element={<HomePage/>}/>
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
