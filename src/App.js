import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SchemePage from './pages/SchemePage/SchemePage';
import CasesPage from './pages/CasesPage/CasesPage';
import MarketplacePage from './pages/MarketplacePage/MarketplacePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <div className="App">
        <Header/>
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
