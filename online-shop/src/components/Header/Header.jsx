import React from 'react';

import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import SearchBar from "../../common/SearchBar/SearchBar";

import './Header.scss';
import LoginButton from "./components/LoginButton/LoginButton";
import LogoutButton from "./components/LogoutButton/LogoutButton";

function Header(props) {
    const [login, setLogin] = React.useState(false);


    const logIn = () =>{
        setLogin(true);
    }


    const logOut = () =>{
        setLogin(false);
    }

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
                   placeholderText = 'Пошук понад 249000 товарів'
                   buttonText = 'Знайти'
               />
           </div>
           { login ? <LogoutButton OnClick={logOut}/> : <LoginButton OnClick={logIn}/>}
       </header>
    );
}
export default Header;
