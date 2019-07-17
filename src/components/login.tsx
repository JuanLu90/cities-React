import React from "react";
import "./login.css";
import { connect } from "react-redux";
import * as actions from "../action";
import { IGlobalState } from "../reducers/reducers";

interface IPropsGLobal {
  setToken: (token: string) => void;
}

const centerForm = {
  margin: "auto"
};

const Login: React.FC<IPropsGLobal> = props => {
  const [usernameValue, setInputUsername] = React.useState("");
  const [passwordValue, setInputPassword] = React.useState("");

  const updateInputUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputUsername(event.currentTarget.value);

  const updateInputPassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setInputPassword(event.currentTarget.value);

  const getToken = () => {
    fetch("http://localhost:8080/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // Authorization: "Bearer " + token
      },
      body: JSON.stringify({ username: usernameValue, password: passwordValue })
    }).then(response => {
      if (response.ok) {
        response.text().then(token => {
          props.setToken(token);
        });
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-5 form mt-5" style={centerForm}>
            <div className="form-group mt-5">
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="User"
                onChange={updateInputUsername}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
                onChange={updateInputPassword}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn w-100 mb-5"
                onClick={getToken}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token
});

const mapDispatchToProps = {
  setToken: actions.setToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
