import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav>
                
                <Link to='/bmical'>BMI Calculator</Link>
                <Link to='/texttransform'>Text Transform</Link>
                <Link to='/catage'>Cat Age Conversion</Link>
            </nav>
        </div>
    )
}

export default Header
