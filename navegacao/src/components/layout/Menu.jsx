import React from 'react';
import "./Menu.css"

import { Link } from 'react-router-dom'

const Menu = props => (
    <asside className='Menu'>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Inicio</Link>
                </li>
                <li>
                    <Link to='/param/1'>Param #01</Link>
                </li>
                <li>
                    <Link to='/param/Miau'>Param #02</Link>
                </li>
                <li>
                    <Link to='/about'>Sobre</Link>
                </li>
                <li>
                    <Link to='/naoExiste'>NãoExiste</Link>
                </li>
            </ul>
        </nav>
    </asside>
)

export default Menu