import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onBtnSubmit = this.onBtnSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    // empties searchbar string
    this.setState({ term: "" });
  }

  onBtnSubmit(event) {
    event.preventDefault();

    // we need to go and fetch weather data
    this.props.fetchWeather(event.target.value);
    
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            onClick={this.onBtnSubmit}
            value="San Diego"
            className="btn btn-primary"
          >
            San Diego
          </button>
          <button
            type="button"
            onClick={this.onBtnSubmit}
            value="Tokyo"
            className="btn btn-primary"
          >
            Tokyo
          </button>
          <button
            type="button"
            onClick={this.onBtnSubmit}
            value="Noel"
            className="btn btn-primary"
          >
            Noel
          </button>
          <button
            type="button"
            onClick={this.onBtnSubmit}
            value="Ding Dong"
            className="btn btn-primary"
          >
            Ding Dong
          </button>
          <button
            type="button"
            onClick={this.onBtnSubmit}
            value="Toad Suck"
            className="btn btn-primary"
          >
            Toad Suck
          </button>
          <button
            type="button"
            onClick={this.onBtnSubmit}
            value="Saint-Louis-du-Ha! Ha!"
            className="btn btn-primary"
          >
            Saint-Louis-du-Ha! Ha!
          </button>
        </div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Enter City"
            className="form-control border-secondary"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-outline-secondary">
              IKUZO!
            </button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
