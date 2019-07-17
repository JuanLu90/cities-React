import React from "react";
import "./table_cities.css";
import { ICity } from "../interfaces";
import { IGlobalState } from "../reducers/reducers";
import { connect } from "react-redux";
import * as actions from "../action";

interface IProps {}

interface IPropsGLobal {
  cities: ICity[];
  setCityId: (cityId: number) => void;
}

const Table_cities: React.FC<IProps & IPropsGLobal> = props => {
  const [inputCity, setInputCity] = React.useState<string>("");

  const UpdateInputCity = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputCity(event.currentTarget.value);

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <div className="form-group table_cities row mt-5">
              <label className="col-sm-2 col-form-label text-light text-center">
                Search:
              </label>
              <div className="col">
                <input
                  value={inputCity}
                  type="text"
                  className="form-control-plaintext"
                  onChange={UpdateInputCity}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {props.cities
              .filter(c =>
                c.name.toLowerCase().startsWith(inputCity.toLowerCase())
              )
              .slice(0, 5)
              .map(c => (
                <div className="row prueba text-dark table_cities" key={c.id}>
                  <div className="col-2  text-light table_cities-col" />
                  <div className="col-2 table_cities-row">{c.country}</div>
                  <div className="col-6 table_cities-row">{c.name}</div>
                  <div className="col-2 table_cities-row">
                    <button onClick={() => props.setCityId(c.id)}>SELECT</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  cities: state.cities,
  cityId: state.cityId
});

const mapDispatchToProps = {
  setCities: actions.setCities,
  setCityId: actions.setCityId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table_cities);
