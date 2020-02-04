import './Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'

import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

export default props =>
    <aside className="logo">
        <Link to="/" className="logo text-white">
            <h1>
                <SentimentVeryDissatisfiedIcon fontSize="large" />
            </h1>
        </Link>
    </aside>