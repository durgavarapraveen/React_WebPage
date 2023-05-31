import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
import Button from './Button';

function Navbar() {
    document.title = 'Home';

    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    
    const handleclick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize',showButton);

    

  return (
    <div>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo ' onClick={closeMobileMenu} >
                    TRVL <i className='fa-solid fa-fan' />
                </Link>
                <div className='menu-icon' onClick={handleclick}>
                    <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' buttonSize='btn--large' >SIGN UP</Button>}
            </div>
        </nav>
    </div>
  )
}

export default Navbar