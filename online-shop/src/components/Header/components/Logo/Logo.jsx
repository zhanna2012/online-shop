import LogoPic from './../../assets/logo.png'

import styles from './Logo.module.scss';

function Logo(props)  {

    return (
        <img
        className={styles.logo}
        src={LogoPic}
        alt='logo'
        data-testid="logo"/>
    );
}

export default Logo;
