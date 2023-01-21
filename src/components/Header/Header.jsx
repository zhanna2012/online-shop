import React from 'react';

import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import SearchBar from "../../common/SearchBar/SearchBar";

import './Header.scss';

function Header(props) {
    return (
       <header className="header">
           <div className="header-contacts">
               <div className="header-contacts-text">
                   (044) 593 82 56 0(800) 50 77 40 <br/>
                   Щоденно з 7:55 до 20:05
               </div>
               <Button buttonText = 'Зворотній здвінок'/>
           </div>
           <div className="logo-wrapper">
               <Logo/>
           </div>
           <div>
               <SearchBar
                   placeholderText = 'Пошук понад 249000 товарів'
                   buttonText = 'Знайти'
               />
           </div>
       </header>
    );
}
export default Header;
