import './Nav.css'
import React from 'react'

import NavItem from './NavItem'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem icon="home" url="/" label="Início" />
            <NavItem icon="group" url="/users" label="Usuários" />
        </nav>
    </aside>