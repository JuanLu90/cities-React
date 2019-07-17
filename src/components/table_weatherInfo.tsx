import React, { useEffect } from "react";
import "./table_weatherInfo.css";
import { IWeather } from "../interfaces";
import { connect } from "react-redux";
import * as actions from "../action";
import { IGlobalState } from "../reducers/reducers";

interface IPropsGlobal {
  weather: IWeather | null;
  setWeather: (weather: IWeather) => void;
  cityId: number;
}



const Table_weatherInfo: React.FC<IPropsGlobal> = props => {

  useEffect(() => {
    if (props.cityId) {
      getWeather();
    }
  }, [props.cityId]);

  const getWeather = () => {
    let idCity = props.cityId;
    const apiKey = "525c6a38452f962c52615acfc0813287";

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=" +
      idCity +
      "&APPID=" +
      apiKey
    ).then(response => {
      if (response.ok) {
        response.json().then(result => props.setWeather(result));
      }
    });

  };

  const calculateTempToCelsius = (temp: any) => {
    if (props.weather) {
      let celsius = parseInt(temp) - 273
      return celsius;
    }
  }

  const calculateDate = () => {
    var today = new Date();
    var date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate() + ' - ' + today.getHours() + ':00h';
    return date;
  }


  return (

    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="form-group table_infoWeather row mt-5">
              <label className="col col-form-label text-light text-center">
                Weather Info:
              </label>
            </div>
          </div>
        </div>
        {props.weather && (
          <div className="row table_infoWeather-row" key={props.weather.id}>
            <div className="col">
              <div className="row mt-2">
                <div className="col text-dark h4">{props.weather.name}</div>
                <div className="col text-dark">{calculateDate()}</div>
              </div>
              <div className="row text-dark mt-2">
                <div className="col">
                  Minimum and maximum temperature:
                </div>
              </div>
              <div className="row font-weight-bold">
                <div className="col-2 text-primary">
                  {calculateTempToCelsius(props.weather.main.temp_min) + "°C"}
                </div>
                <div className="col-2 text-danger">
                  {calculateTempToCelsius(props.weather.main.temp_max) + "°C"}
                </div>
              </div>
              <div className="row text-dark mt-2">
                <div className="col">
                  Wind Speed:
                </div>
                <div className="col">
                  Weather:
                </div>
              </div>
              <div className="row text-dark font-weight-bold">
                <div className="col">
                  {props.weather.wind.speed + 'm/s'}
                </div>
                <div className="col">
                  {props.weather.weather[0].main}
                  {/* <img src="http://openweathermap.org/img/w/01n.png" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  weather: state.weather,
  cityId: state.cityId
});

const mapDispatchToProps = {
  setWeather: actions.setWeather,
  setCityId: actions.setCityId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table_weatherInfo);
