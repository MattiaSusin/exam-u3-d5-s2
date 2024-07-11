import { Component } from "react";
import { NavLink } from "react-router-dom";

class TopBar extends Component {
    render() {
        return (
            <div className="contorno1" /* style={{ background: `url(${background})` }} */>
                <NavLink to="/" className="nav-link"> 
                <h1>EpicWeather</h1>
                </NavLink>
            </div>
        );
    }
}

export default TopBar;