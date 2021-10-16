import React from 'react';

import './Navbar.css';
import Logo from '../../Assets/images/acmlogo.png';
import { Button } from '@material-ui/core';

function Navigationbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='flex'>
                    <img className='logo' src={Logo} alt='logo' />
                    <h2>ACM</h2>
                </div>
                <ul>
                    <li>
                        <Button
                            variant='outlined'
                            href='https://acmpesuecc.github.io'>
                            Head Back To ACM Website
                        </Button>
                    </li>
                </ul>
            </nav>
            <br />
        </>
    );
}

export default Navigationbar;
