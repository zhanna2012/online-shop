import React from 'react';

import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import SearchBar from "../../common/SearchBar/SearchBar";

import './Header.scss';
import { useInputValue, useOnlineStatus, useToggle } from "./cutom-hooks";

function Header(props) {

    const [isTextChanged, setIsTextChanged] = useToggle();
    const search = useInputValue("");
    const isOnline = useOnlineStatus();


    return (
       <header className="header container">
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
                   {...search}
                   placeholderText = 'Пошук понад 249000 товарів'
                   buttonText = 'Знайти'
               />
           </div>
           <Button
               disabled={!isOnline}
               onClick={setIsTextChanged} buttonText={isTextChanged ? 'Log out' : 'Login'}></Button>
       </header>
    );
}
export default Header;


