import "./sidebar.css";
import MovieIcon from '@material-ui/icons/Movie';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TheatersIcon from '@material-ui/icons/Theaters';
import {Timeline,PermIdentity, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report,} from "@material-ui/icons";
import { Link } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";

export default function Sidebar(props) {

  const userType = localStorage.getItem('userType');

  if (userType === "SystemAdmin") {
    console.log(userType);
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Movie</h3>
              <ul className="sidebarList">
                <Link to="/newmovie" className="link">
                  <li className="sidebarListItem">
                    <AddCircleIcon className="sidebarIcon"/>
                    Add movie
                  </li>
                </Link>
                <Link to="/movieList" className="link">
                  <li className="sidebarListItem">
                    <MovieIcon className="sidebarIcon"/>
                    Movies
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Theaters</h3>
              <ul className="sidebarList">
                <Link to="/addTheater" className="link">
                  <li className="sidebarListItem">
                    <AddCircleIcon className="sidebarIcon"/>
                    Add Theater
                  </li>
                </Link>
                <Link to="/viewTheater" className="link">
                  <li className="sidebarListItem">
                    <TheatersIcon className="sidebarIcon"/>
                    Theaters
                  </li>
                </Link>
              </ul>
            </div>
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Bookings</h3>
              <ul className="sidebarList">
                <Link to="/bookings" className="link">
                  <li className="sidebarListItem">
                    <MovieIcon className="sidebarIcon"/>
                    Bookings
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
    )
  } else if (userType === "MovieAdmin") {
      console.log(userType);
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Movie</h3>
              <ul className="sidebarList">
                <Link to="/newmovie" className="link">
                  <li className="sidebarListItem">
                    <AddCircleIcon className="sidebarIcon"/>
                    Add movie
                  </li>
                </Link>
                <Link to="/movieList" className="link">
                  <li className="sidebarListItem">
                    <MovieIcon className="sidebarIcon"/>
                    Movies
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
    )
    }else {
    console.log("normal");
    return (
        <div className="sidebar">
          <FeaturedInfo/>
        </div>
    )
  }
  }




