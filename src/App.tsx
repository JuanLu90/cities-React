import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/login";
import { connect } from "react-redux";
import { IGlobalState } from "./reducers/reducers";
import * as action from "./action";
import { ICity } from "./interfaces";
import Table_cities from "./components/table_cities";
import Table_weatherInfo from "./components/table_weatherInfo";

interface IProps {}

interface IPropsGLobal {
  token: string;
  setCities: (cities: ICity[]) => void;
}

const App: React.FC<IProps & IPropsGLobal> = props => {
  // useEffect(() => {
  //   if (props.token) {
  //     getCities();
  //   }
  // }, [props.token]);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = () => {
    fetch("../cities.json", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
        // Authorization: "Bearer " + props.token
      }
    }).then(response => {
      if (response.ok) {
        response.json().then(result => props.setCities(result));
      }
    });
  };

  return (
    <div className="container pt-4">
      {/* {!props.token && (
        <div className="row">
          <div className="col">
            <Login />
          </div>
        </div>
      )} */}
      {!props.token && (
        <>
          <div className="row">
            <div className="col mt-3 text-light text-center">
              <h1>Choose your city</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Table_cities />
            </div>
            <div className="col">
              <Table_weatherInfo />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Mapea STORE to UI para recibir props del store
const mapStateToProps = (state: IGlobalState) => ({
  token: state.token
});

const mapDispatchToProps = {
  setCities: action.setCities
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
