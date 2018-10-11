import React, { Component } from "react";
import { connect } from "react-redux";
import History from "../components/history.js"


class WeatherList extends Component {
  renderWeather(weather) {
    const name = weather.city.name

    return (
          <tr key={name}>
            <td>{name}</td>
            <td>
              <History />
            </td>
          </tr>
        
    );
  }

  render() {
    const Zname = this.props.weather[0] && this.props.weather[0].city.name;
    let Ztemp =
      (((this.props.weather[0] && this.props.weather[0].list[0].main.temp-273.15)*1.8)+32).toFixed(2);
    const Zpress =
      Math.floor(this.props.weather[0] && this.props.weather[0].list[0].main.pressure);
    const Zhumid =
      this.props.weather[0] && this.props.weather[0].list[0].main.humidity;
    const ZminT =
    (((this.props.weather[0] && this.props.weather[0].list[0].main.temp_min-273.15)*1.8)+32).toFixed(2);
    const ZmaxT =
    (((this.props.weather[0] && this.props.weather[0].list[0].main.temp_max-273.15)*1.8)+32).toFixed(2);
    const ZwinS =
      this.props.weather[0] && this.props.weather[0].list[0].wind.speed;
    const Zlat =
      this.props.weather[0] && this.props.weather[0].city.coord.lat + ",";
    const Zlon = this.props.weather[0] && this.props.weather[0].city.coord.lon;

    return (
      <div className="row">
        <div className="col-md-6">
          <div className="card border-info flex-fill">
            <h7 className="card-header border-info text-info alert-primary font-weight-bold">
              City Information
            </h7>
            <div className="card-body">
              <h1 className="text-center">{Zname}</h1>
              <p className="text-center">
                Lat/Long: {Zlat}
                {Zlon}
              </p>
              <hr />
              <div className="card-deck">
                <div className="card text-center border-white font-weight-bold">
                  Temperature(F)
                  <p className="text-success">{Ztemp}F</p>
                </div>
                <div className="card text-center border-white font-weight-bold">
                  Pressure
                  <p className="text-success">{Zpress}</p>
                </div>
                <div className="card text-center border-white font-weight-bold">
                  Humidity
                  <p className="text-success">{Zhumid}</p>
                </div>
              </div>
              <p />
              <div className="card-deck">
                <div className="card text-center border-white font-weight-bold">
                  Lowest Temp(F)
                  <p className="text-success">{ZminT}F</p>
                </div>
                <div className="card text-center border-white font-weight-bold">
                  Highest Temp(F)
                  <p className="text-success">{ZmaxT}F</p>
                </div>
                <div className="card text-center border-white font-weight-bold">
                  Wind Speed
                  <p className="text-success">{ZwinS}MPH</p>
                </div>
              </div>

              {/* card body */}
            </div>
            {/* within card 1 */}
          </div>
          {/* within col-6 */}
        </div>

        <div className="col-md-6">
          <div className="card border-info flex-fill">
            <h7 className="card-header border-info text-info alert-primary font-weight-bold">
              Search History
            </h7>
            <div className="card-body">
              <table className="table table-striped">
                <tbody>
                  {this.props.weather.map(this.renderWeather)}
                </tbody>
              </table>
            </div>
            {/* within card 2 */}
          </div>
          {/* within col-6 */}
        </div>

        {/* row */}
      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // es6 // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
