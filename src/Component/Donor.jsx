import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar"
import axios from "axios";
export const Donor = () => {
  const [values, setValue] = useState({
    username: "",
    password: "",
  });
  const chngvalue = (e) => {
    console.log(e);
    setValue({values, username: e.target.value });
    console.log({ ...values });
  };
  const chngvaluep = (e) => {
    setValue({ ...values, password: e.target.value });
    console.log(values);
  };
  function submit()
  {
    axios
    .post("http://localhost:5000/donorName",values)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  }
  return (
    <div>
      <Navbar/>
      <section className="donate-section">
        <h2 className="heading">donor login</h2>
        <form action="action_page.php" method="post">
          <div className="container">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              value={values.username}
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              onChange={chngvalue}
            />

            <label for="psw">
              <b>Password</b>
            </label>
            <input
              value={values.password}
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onChange={chngvaluep}
            />

            <button type="submit" onClick={submit}>Login</button>
          </div>
          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <span className="ps">
              Does not have an account?{" "}
              <Link to="/donorsignup">click here to register</Link>
            </span>
          </div>
        </form>
      </section>
    </div>
  );
};
