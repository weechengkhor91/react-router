import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <Fragment>
                <ul className="navbar-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </Fragment>
        )
    }
}

export default Navbar