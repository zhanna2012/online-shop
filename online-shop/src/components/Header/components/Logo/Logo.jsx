import LogoPic from './../../assets/logo.png'

import './Logo.scss';

function Logo(props)  {

    return (
        <img
        className="logo"
        src={LogoPic}
        alt='logo'
        data-testid="logo"/>
    );
}

export default Logo;
