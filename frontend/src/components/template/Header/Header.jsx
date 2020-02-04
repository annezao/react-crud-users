import React from 'react'
import './Header.css'
import Icon from '@material-ui/core/Icon';

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <Icon>{props.icon}</Icon> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>