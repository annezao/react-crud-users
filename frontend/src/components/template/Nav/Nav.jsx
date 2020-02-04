import React from 'react'
import './Nav.css'

import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" url="/" label="Home" />
            <NavItem icon="group" url="/users" label="Users" />
        </nav>
    </aside>