import React, {useState} from "react";

import "./Login.css";

const Login = () => {
  const [state, setState] = useState({ credentials: {username: '', password: ''}});

  function handleChange(e) {
    const val = e.target.value;
    setState(prevState => {
      return {
      ...prevState,
       [e.target.name]: val, 
      }
    });
    console.log(state)
  }

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>

        <div className="fadeIn first">
        </div>

        <form >
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="username"
            placeholder="login"
            value={state.credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
