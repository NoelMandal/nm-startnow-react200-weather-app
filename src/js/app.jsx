import React from "react";
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="text-left">Origin Weather Application</h1>
          <p className="text-left">
          Umbrellas are for the weak
          </p>
          {/* jumbotron */}
        </div>

        <SearchBar />
        <WeatherList />

      </div>
    );
  }
}
