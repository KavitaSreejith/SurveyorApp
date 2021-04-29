import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="nav navbar navbar-light bg-light">
            <div className="container">
                <Link to="/" className="nav-link active">
                    Home
                </Link>
            </div>
        </nav>
    )
}

export default Nav
