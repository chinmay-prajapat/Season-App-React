import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("The component was just updated");
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
// import React from "react";
// import ReactDOM from "react-dom";
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { lat: null, errorMessage: "" };
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => this.setState({ lat: position.coords.latitude }),
//       (err) => this.setState({ errorMessage: err.message })
//     );
//   }
//   render() {
//     return !this.state.lat && this.state.errorMessage ? (
//       <div>error:{this.state.errorMessage}</div>
//     ) : this.state.lat && !this.state.errorMessage ? (
//       <div>Latitude:{this.state.lat}</div>
//     ) : (
//       <div>Loading</div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.querySelector("#root"));
