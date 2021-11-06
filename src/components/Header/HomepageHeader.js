import React from 'react'
// import Logo from './Logo/Logo'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './header.scss'

class HomePageHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            displayDropDownNav: false,
            thePosition: 0
        }
        this.showNav = this.showNav.bind(this);
        this.hideNav = this.hideNav.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
      
    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
        const scrolled = winScroll / height
        
        console.log(`Position: ${scrolled}`);
        this.setState({
            thePosition: scrolled,
        })
    }

    showNav = () => {
        this.setState({
            displayDropDownNav: true
        })
    }

    hideNav = () => {
        this.setState({
            displayDropDownNav: false
        })
    }

    render(){

        let navMenuClass = 'NavMenuList DropDownInActive';
        if(this.state.displayDropDownNav){
            navMenuClass = 'NavMenuList DropDownActive';
        }

        const NavMenu = this.state.thePosition > 0.1 ? <nav className="NavContainer">
        <Link to="/">LivingFree</Link>
        <ul className={navMenuClass}>
            <li className="closeMenu" onClick={this.hideNav}><FaTimes/></li>
            <Link className="navlink" to='/history'><li>History</li></Link>
            <Link className="navlink" to='/vision'><li>Vision</li></Link>
            <Link className="navlink" to='/creatives'><li>Creatives</li></Link>
            <Link className="navlink" to='/about-us'><li>About Us</li></Link>
        </ul>
        <div className="menuIcon" onClick={this.showNav}><FaBars/></div>
    </nav> : null;


            return (
               <>{NavMenu}</>
        )
    }
}

export default HomePageHeader