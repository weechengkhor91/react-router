import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

//styling
import './navbar.less'

class Navbar extends Component{

    render(){

        //console.log(window.location)
        const {location} = window
        const {pathname} = location
        return(
            <Fragment>
                <div className="navbar-outer">
                    <div className="navbar-wrapper">
                <ul className="navbar-list">
                    <li className={pathname === '/' ? 'active' : ''}><a href="/">Home</a></li>
                    <li className={pathname === '/about' ? 'active' : ''}><a href="/about" >About</a></li>
                    <li className={pathname === '/contact' ? 'active' : ''}><a href="/contact">Contact</a></li>
                </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Navbar