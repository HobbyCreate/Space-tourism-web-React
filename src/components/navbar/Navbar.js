import React, {useState} from 'react';
import logo from '../../assets/images/shared/logo.svg';
import hamburger from '../../assets/images/shared/icon-hamburger.svg';
import close from '../../assets/images/shared/icon-close.svg';
import { navbarItems } from './NavbarItems';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const onClickHandler = () => {
        setClick(!click);
    };

    return (
        <div className='nav-container'>
            <div className='logo'>
                <img src={logo} alt='logo' />
            </div>
            <ul className= {click ? 'nav-items-active' : 'nav-items'}>
                {
                    navbarItems.map((item, index) =>
                        <li key={index}>
                            <a href={item.url} value={item.url}><span>{item.id}</span>{item.title}</a>
                        </li>
                    )
                }
            </ul>
            <div className= {click ? 'close-icon' : 'hamburger-icon'}>
                {
                    click ? <img src={close} alt='' onClick={onClickHandler}/>
                    : <img src={hamburger} alt='' onClick={onClickHandler}/>
                }
                
            </div>
        </div>
    )
}

export default Navbar
