import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
//import TextField from "@mui/material/TextField";
//import { Form } from "react-bootstrap";

function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const signUPUrl = "http://127.0.0.1:8000/auth/signup";
    const data = JSON.stringify({
      username: username,
      email: email,
      password: password,
    });

    const res_data = await fetch(signUPUrl, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: data,
    }).then((response) => response.json());
    setToken(res_data);
    sessionStorage.setItem("token", res_data);
    console.log(res_data);
  };

  if (!token) {
    return (
      <>
        {console.log(token)}
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                class="form-control"
                id="outlined-basic"
                label="First Name"
                type="text"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                class="form-control"
                id="outlined-basic"
                label="Email"
                type="text"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                class="form-control"
                id="outlined-basic"
                label="Desired Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mx-2">
              Submit
            </button>
            <Link to="/login">
              <button className="btn btn-info mx-2">Login</button>
            </Link>
          </form>
        </div>
      </>
    );
  }
  return (
    <>
      <Navigate to="/" />
    </>
  );
}

export default Signup;
