import { Component } from "react";
import background from "../assets/Banner.png";

class TopBar extends Component {
    render() {
        return (
            <div className="contorno1" /* style={{ background: `url(${background})` }} */>
                <h1>EpicWeather</h1>
            </div>
        );
    }
}

export default TopBar;