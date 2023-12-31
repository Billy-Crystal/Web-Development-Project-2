//------------------------------------------------------------------
//Import all necessary sources, dependencies, libraries, other components
import React, { Component } from "react"; //Import React Component Class
import PropTypes from "prop-types";
import movie0 from "./images/movie0.jpg";
import movie1 from "./images/movie1.jpg";
import movie2 from "./images/movie2.jpg";
import movie3 from "./images/movie3.jpg";
import movie4 from "./images/movie4.jpg";

//------------------------------------------------------------------
//CLASS COMPONENT
export class Demo1 extends Component {
    //----------------------------
    //Props & constructor
    constructor(props) {
        super(props);
        this.state = {
            images: [movie0, movie1, movie2, movie3, movie4],
            currentIndex: 0,
        };
    }

    //----------------------------
    //Component lifecycle: methods
    componentDidMount() {
        //Called after the Component is mounted, rendered, and available to the DOM.
        //Best place for API calls to retrieve the initial data.
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate() {
        //Called right after the Component update has been rendered in the DOM
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    //----------------------------
    //Other methods
    tick = () => {
        this.setState((state) => {
            let newIndex =
                state.currentIndex < state.images.length - 1
                    ? state.currentIndex + 1
                    : 0;
            return { currentIndex: newIndex };
        });
    };

    //----------------------------
    //Render HTML: Outputs the HTML/JSX to the DOM.
    render() {
        //Outputs the HTML/JSX to the DOM.
        return (
            <div style={slideShowStyle}>
                <h1>Automatic Slideshow</h1>
                <img
                    style={{ height: "250px" }}
                    src={this.state.images[this.state.currentIndex]}
                    alt="movieimage"
                ></img>
            </div>
        );
    }
}

//------------------------------------------------------------------
//Define Props Types: have to import "PropTypes" above
Demo1.propTypes = {
    state: PropTypes.object.isRequired,
};

//-----------------------------------------------------------------
//Define CSS variables
const slideShowStyle = {
    minHeight: "20vh",
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

//------------------------------------------------------------------
//Export this Component
export default Demo1;
