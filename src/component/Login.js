import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
// import axios from "axios";
//import TextField from "@mui/material/TextField";
//import { Form } from "react-bootstrap";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const handleSubmit = async (event) => {
    event.preventDefault();
    const loginUrl = "http://127.0.0.1:8000/auth/login/";
    const data = JSON.stringify({
      username: username,
      password: password,
    });

    // axios
    //   .post(loginUrl, data, {
    //     headers: postHeader,
    //   })
    //   .then((res) => {
    //     //const token1 = res.data;
    //     // console.log(token1);
    //     console.log.apply(res);
    //   });

    const res_data = await fetch(loginUrl, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: data,
    }).then((response) => response.json());
    setToken(res_data);
    sessionStorage.setItem("token", res_data);
    console.log(token);

    //alert(`The name you entered was`);
  };

  useEffect(() => {
    console.log(token);
  }, []);

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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/signup">
              <button className="btn btn-info mx-2">signup</button>
            </Link>
          </form>
        </div>
      </>
    );
  }
  return <Navigate to="/" />;
}
