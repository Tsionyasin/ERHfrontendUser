import React, { Component, useState } from "react";
import axios from "axios";
import "./loginregister.css";

//import { render } from "@testing-library/react";

class LoginRegister extends Component {
  //const [addclass, setaddclass] = useState("");

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(data);

    axios.post("http://localhost:8000/api/auth/login", data).then((res) => {
      this.setState({
        username: "",
        password: "",
      });
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      this.props.history.push(`/complete-profile/`);
    });
  };

  render() {
    const users = this.state.users;

    return (
      <div className id="container">
        <div className="form-container  contact-container">
          <form>
            <h2>ETHIOPIAN RESEARCH HUB</h2>

            <h3>GET IN TOUCH </h3>
            <h4>Email: Ethiopianresearchhub@gmail.com</h4>
            <h5> Phone: +251912323443</h5>

            <button
              className="ghost1"
              id="signIn"
              //onClick={() => setaddclass("")}
            >
              BACK TO LOGIN
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={this.onSubmit}>
            <h1>Sign In</h1>
            <input
              name="username"
              type="text"
              placeholder="ID"
              value={this.state.username}
              onChange={this.onChange}
            />
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={this.state.password}
              onChange={this.onChange}
            />
            <button
              className="ghost2"
              onClick={this.state.onSubmit}
              type="submit"
            >
              LOGIN
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left"></div>
            <div className="overlay-panel overlay-right">
              <button
                className="ghost"
                id="contact"
                //onClick={() => setaddclass("right-panel-active")}
              >
                CONTACT INFO.
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
