import './Header.scss';
import * as cx from "classnames";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/imgs/logo.svg"
import { ReactComponent as CalculatorIcon } from "../../assets/imgs/calc_icon.svg"

function Header () {
  let [opened, setOpened] = useState(false);

  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });

  const handleClick = () => {
    if(opened) {
      setOpened(false)
    }
  }
  return (
    <header className="header container">
    <div className="header__inner container__row">
    <Link to="/" className='header__logo'><Logo className='header__logoIcon'/></Link>
    <nav className={classNav} onClick={handleClick}>
          <div className="header__links" onClick={e => e.stopPropagation()}>
            <Link to="/" onClick={handleClick} className="header__link">Факторинг</Link>
            <Link to="/scheme" onClick={handleClick} className="header__link">Схема факторинга</Link>
            <Link to="/cases" onClick={handleClick} className="header__link">Кейсы</Link>
            <Link to="/contacts" onClick={handleClick} className="header__link header__link_border">Контакты</Link>
          </div>
      </nav>
      <div className='header__buttons'>
        <button className='btn btn_full btn_smaller'>Отправить заявку</button>
        <button className='header__calc'><CalculatorIcon className='header__calcIcon'/></button>
      </div>
    {/* <BurgerBlack onClick={() => setOpened(!opened)} className="header__burger"/> */}
    </div>
  </header>
  )
};

export default Header;
