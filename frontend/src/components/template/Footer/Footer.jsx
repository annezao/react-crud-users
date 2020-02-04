import './Footer.css'
import React from 'react'

import FavoriteIcon from '@material-ui/icons/Favorite';

export default props =>
    <footer className="footer">
        <span>
            Developed with <FavoriteIcon fontSize="small" color="secondary" />
        </span>
    </footer>