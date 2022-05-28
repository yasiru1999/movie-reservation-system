import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from "./pages/movieList/movieList";
import EditMovie from "./pages/editMovie/editMovie";
import NewMovie from "./pages/newMovie/NewMovie";
import NewTheater from "./pages/newTheater/newTheater";
import ViewTheater from "./pages/theaterList/theaterList"
import EditTheater from "./pages/editTheater/editTheater"
import Bookings from "./pages/bookings/bookings"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movieList">
            <MovieList />
          </Route>

          <Route path="/newmovie">
            <NewMovie />
          </Route>
          <Route path="/editmovie/:id">
            <EditMovie />
          </Route>
          <Route path="/addTheater">
            <NewTheater />
          </Route>
          <Route path="/viewTheater">
            <ViewTheater />
          </Route>
          <Route path="/editTheater">
            <EditTheater />
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
