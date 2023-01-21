import { Component } from 'react';
import LogoPic from './../../assets/logo.png'

import './Logo.scss';

class Logo extends Component {
    render() {
        return  <img
            className="logo"
            src={LogoPic}
            alt='logo'
            data-testid="logo"/>;
    }
}

export default Logo;
