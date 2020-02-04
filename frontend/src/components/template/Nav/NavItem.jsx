import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';

export default props =>
    <Link to={props.url}>
        <Icon>props.icon</Icon> {props.label}
    </Link>