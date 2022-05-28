import React, {useState} from "react";
import '../style/Navbar.scss';
import logo from '../images/logo1.png'
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return(
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
           <div className="containerNavBar">
               <div className="left">
                    <img
                        src={logo}
                        alt="logo"
                    />
                   <Link to="/" className="link">
                       <span>Homepage</span>
                   </Link>
                   <Link to="/Search" className="link">
                       <span>Movies</span>
                   </Link>
                   <Link to="" className="link">
                       <span>Upcoming</span>
                   </Link>

               </div>
               <div className="right">
                   <SearchIcon className="icon"/>
                   <span>KID</span>
                   <NotificationsIcon className="icon"/>
                   <img
                       src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                       alt=""
                   />
                   <div className="profile">
                       <ArrowDropDownIcon className="icon"/>
                       <div className="options">
                           <span>Settings</span>
                           <span>Logout</span>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Navbar;