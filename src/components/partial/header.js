import React, { PureComponent } from 'react'
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import '../../assets/scss/navbar.scss'

class Header extends PureComponent {
    render() {
        return (
            <header>
<div className="logo">
    <h1 className="logo-text"><a href="#">Stock Management</a></h1>
</div>
<i className="fa fa-bars menu-toggle"></i>
<ul className="nav" className="site-nav" id="site-nav">
    <li>
    <a href="#"><i className="fa fa-user"></i> Settings <i className="fa fa-chevron-down"></i> </a>
    <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#" className="logout"> <Link to="/">logout</Link></a></li>
    </ul>
   </li>
</ul>
</header>
        );
    }
}

export default Header;
