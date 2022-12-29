import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CasesPage from "./pages/CasesPage/CasesPage";
import OneCasePage from "./pages/OneCasePage/OneCasePage";
import MarketplacePage from "./pages/MarketplacePage/MarketplacePage";
import AgreementPage from "./pages/AgreementPage/AgreementPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDisableBodyScroll } from "./hooks/useDisableBodyScroll";
import Modal from "./components/Modal/Modal";
import Calculator from "./components/Calculator/Calculator";
import Request from "./components/Request/Request";
import HelpDesk from "./components/HelpDesk/HelpDesk";

function App() {
  const { pathname } = useLocation();
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false);
  const [openedCalculatorModal, setOpenedCalculatorModal] = useState(false);
  const [openedRequestModal, setOpenedRequestModal] = useState(false);
  const [openedHelpModal, setOpenedHelpModal] = useState(false);
  useDisableBodyScroll(openedBurgerMenu);
  useDisableBodyScroll(openedCalculatorModal);
  useDisableBodyScroll(openedRequestModal);
  useDisableBodyScroll(openedHelpModal);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style = "";
  }, [pathname]);

  return (
    <div className="App">
      <Modal
        className="modal__calculator"
        handleModal={() => setOpenedCalculatorModal((curr) => !curr)}
        opened={openedCalculatorModal}
      >
        <Calculator isModal={true} />
      </Modal>
      <Modal
        className="modal__request"
        handleModal={() => setOpenedRequestModal((curr) => !curr)}
        opened={openedRequestModal}
      >
        <Request handleModal={() => setOpenedRequestModal((curr) => !curr)} />
      </Modal>
      <Modal
        className="modal__help"
        handleModal={() => setOpenedHelpModal((curr) => !curr)}
        opened={openedHelpModal}
      >
        <HelpDesk handleModal={() => setOpenedHelpModal((curr) => !curr)} />
      </Modal>
      <Header
        opened={openedBurgerMenu}
        closeBurger={() => setOpenedBurgerMenu(false)}
        openBurger={() => setOpenedBurgerMenu(true)}
        handleCalculatorModal={() => setOpenedCalculatorModal(true)}
        handleRequestModal={() => setOpenedRequestModal(true)}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                handleCalculatorModal={() => setOpenedCalculatorModal(true)}
                handleRequestModal={() => setOpenedRequestModal(true)}
              />
            }
          />
          {/* <Route path='/scheme' element={<SchemePage/>}/> */}
          <Route path="/cases" element={<CasesPage />} />
          <Route
            path="/case-fruitdelivery"
            element={
              <OneCasePage
                case="fruitdelivery"
                handleRequestModal={() => setOpenedRequestModal(true)}
              />
            }
          />
          <Route
            path="/case-seafooddelivery"
            element={
              <OneCasePage
                case="seafooddelivery"
                handleRequestModal={() => setOpenedRequestModal(true)}
              />
            }
          />
          <Route
            path="/case-softwaredevelopment"
            element={
              <OneCasePage
                case="softwaredevelopment"
                handleRequestModal={() => setOpenedRequestModal(true)}
              />
            }
          />
          <Route
            path="/case-itoutsourcing"
            element={
              <OneCasePage
                case="itoutsourcing"
                handleRequestModal={() => setOpenedRequestModal(true)}
              />
            }
          />
          <Route
            path="/for-marketplaces"
            element={
              <MarketplacePage
                handleRequestModal={() => setOpenedRequestModal(true)}
              />
            }
          />
          <Route path="/agreement" element={<AgreementPage />} />
        </Routes>
      </main>
      <Footer handleHelpModal={() => setOpenedHelpModal(true)} />
    </div>
  );
}

export default App;
