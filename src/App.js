import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CasesPage from "./pages/CasesPage/CasesPage";
import OneCasePage from "./pages/OneCasePage/OneCasePage";
import MarketplacePage from "./pages/MarketplacePage/MarketplacePage";
import AgreementPage from "./pages/AgreementPage/AgreementPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDisableBodyScroll } from "./hooks/useDisableBodyScroll";
import Modal from "./components/Modal/Modal";
import Calculator from "./components/Calculator/Calculator";
import Request from "./components/Request/Request";
import HelpDesk from "./components/HelpDesk/HelpDesk";

function App() {
  const { pathname } = useLocation();
  const { hash } = useLocation();
  const [loading, setLoading] = useState(0);
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false);
  const [openedCalculatorModal, setOpenedCalculatorModal] = useState(false);
  const [openedRequestModal, setOpenedRequestModal] = useState(false);
  const [openedHelpModal, setOpenedHelpModal] = useState(false);
  const appRef = useRef(null);
  useDisableBodyScroll(openedBurgerMenu);

  // снятие выделения и скролл в начало при обновлении/открытии новой страницы
  useEffect(() => {
    clearSelection();
    window.scrollTo(0, 0);
    document.body.style = "";
  }, [pathname]);

  const clearSelection = () => {
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
    } else {
      // старый IE
      document.selection.empty();
    }
  };

  // scroll to hash after reload page
  useEffect(() => {
    scrollToHashElement();
  }, []);

  // scroll to hash after reload page when document is visible for the first time
  useEffect(() => {
    if (loading === 1) {
      scrollToHashElement();
    } else return;
  }, [loading]);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden === false) {
      setLoading((curr) => curr + 1);
    }
  });

  const scrollToHashElement = () => {
    const elementToScroll = document.getElementById(hash?.replace("#", ""));

    if (!elementToScroll) return;

    setTimeout(() => {
      window.scrollTo({
        top: elementToScroll.offsetTop,
        behavior: "smooth",
      });
    }, 200);
  };

  // фиксирование фона при открытии бургер-меню
  /* useEffect(() => {
    if (openedBurgerMenu) {
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;
      appRef.current.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "0px";
      appRef.current.style.removeProperty("overflow");
    }
  }, [openedBurgerMenu]); */

  const getScrollbarWidth = () => {
    document.body.style.overflow = "hidden";
    let width = document.body.clientWidth;
    document.body.style.overflow = "scroll";

    width -= document.body.clientWidth;

    if (!width) width = document.body.offsetWidth - document.body.clientWidth;

    document.body.style.overflow = "";

    return width;
  };

  return (
    <div className="App" ref={appRef}>
      <Modal
        className="modal__calculator"
        handleModal={() => setOpenedCalculatorModal((curr) => !curr)}
        opened={openedCalculatorModal}
      >
        <Calculator
          isModal={true}
          handleModal={() => setOpenedCalculatorModal((curr) => !curr)}
          handleRequestModal={() => setOpenedRequestModal(true)}
        />
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
      <Footer
        handleHelpModal={() => setOpenedHelpModal(true)}
        clearSelection={clearSelection()}
      />
    </div>
  );
}

export default App;
