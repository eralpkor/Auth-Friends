import React, {useState} from "react";
import useSignUpForm from './CustomHook';
import "./Login.css";

const Login = () => {
//   const [state, setState] = useState({});

//   function handleChange(e) {
//     const val = e.target.value;
//     e.persist();
//     setState(state => ({
//       ...state,
//        [e.target.name]: val}));
//     console.log(state)
//   }

const {inputs, handleInputChange, handleSubmit} = useSignUpForm();

  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>

        <div className="fadeIn first">
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="username"
            placeholder="login"
            value={inputs.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            name="password"
            placeholder="password"
            value={inputs.password}
            onChange={handleInputChange}
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <div id="formFooter">
          <a className="underlineHover" >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
