import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SchemePage from './pages/SchemePage/SchemePage';
import CasesPage from './pages/CasesPage/CasesPage';
import MarketplacePage from './pages/MarketplacePage/MarketplacePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
// import CalculatorModal from './components/CalculatorModal/CalculatorModal';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDisableBodyScroll } from './hooks/useDisableBodyScroll';
import Modal from './components/Modal/Modal';
import Calculator from './components/Calculator/Calculator';
import Request from './components/Request/Request';

function App() {
  const { pathname } = useLocation(); 
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false);
  const [openedCalculatorModal, setOpenedCalculatorModal] = useState(false);
  const [openedRequestModal, setOpenedRequestModal] = useState(false);
  useDisableBodyScroll(openedBurgerMenu)
  useDisableBodyScroll(openedCalculatorModal)
  useDisableBodyScroll(openedRequestModal)

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style = "";
  }, [pathname]);

  return (
      <div className="App">
        <Modal className="modal__calculator" handleModal={() => setOpenedCalculatorModal((curr) => !curr)} opened={openedCalculatorModal}>
          <Calculator isModal={true}/>
        </Modal>
        <Modal className="modal__request" handleModal={() => setOpenedRequestModal((curr) => !curr)} opened={openedRequestModal}>
          <Request handleModal={() => setOpenedRequestModal((curr) => !curr)}/>
        </Modal>
        <Header opened={openedBurgerMenu}
        handleBurger={() => setOpenedBurgerMenu((curr) => !curr)}
        handleCalculatorModal={() => setOpenedCalculatorModal((curr) => !curr)}
        handleRequestModal={() => setOpenedRequestModal((curr) => !curr)}/>
        <main>
          <Routes>
                  <Route path='/' element={<HomePage
                  handleCalculatorModal={() => setOpenedCalculatorModal((curr) => !curr)}
                  handleRequestModal={() => setOpenedRequestModal((curr) => !curr)}/>}/>
                  <Route path='/scheme' element={<SchemePage/>}/>
                  <Route path='/cases' element={<CasesPage/>}/>
                  <Route path='/for-marketplaces' element={<MarketplacePage
                  handleRequestModal={() => setOpenedRequestModal((curr) => !curr)}/>}/>
                  <Route path='/contacts' element={<ContactsPage/>}/>
              </Routes>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
