import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/userSlice";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [state, setState] = useState({
    nameInput: "",
    emailInput: "",
    passwordInput: "",
  });
  const [error, setError] = useState("");

  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const dispatch = useDispatch();

  if (isLoggedIn) {
    return <Navigate to={"/"} replace />;
  }

  function validateForm() {
    if (!state.nameInput) {
      setError("Your name is Required.");
      return false;
    }
    if (!state.emailInput) {
      setError("Email is Required.");
      return false;
    }
    if (!state.passwordInput) {
      setError("Please enter password.");
      return false;
    }
    if (state.passwordInput.length < 8) {
      setError("Password length should be minimum 8 characters.");
      return false;
    }

    return true;
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      dispatch(
        loginUser({
          name: state.nameInput,
          email: state.emailInput,
          password: state.passwordInput,
        })
      );
      <Navigate to="/" replace />;
    }
  }

  return (
    <div className="login-box" onSubmit={(e) => handleSubmit(e)}>
      <form className="login-form" action="">
        <input
          type="text"
          placeholder="Enter your name"
          name="nameInput"
          className="name-input"
          value={state.nameInput}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="email"
          name="emailInput"
          placeholder="email@gmail.com"
          value={state.emailInput}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="password"
          name="passwordInput"
          placeholder="Enter your password"
          value={state.passwordInput}
          onChange={(e) => handleInputChange(e)}
        />
        {error && <p className="error">{error}</p>}
        <button>Submit</button>
      </form>
    </div>
  );
}
