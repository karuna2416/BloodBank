import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState } from "react";
import axios from "axios";

export const Admin = () => {
  const [users, setUsers] = useState({
    username: "",
    password: "",
  });
  const formSubmit = () => {
    axios
      .post("http://localhost:5000/userName", users)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <section className="admin-section">
        <h2 className="heading">Admin login page</h2>
        <form action="action_page.php" method="post">
        <div className="container">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={users.username}
            name="uname"
            onChange={(e) => setUsers({ ...users, username: e.target.value })}
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={users.password}
            onChange={(e) => setUsers({ ...users, password: e.target.value })}
            required
          />
          <Link to={"/abc/home"}>
          <button onClick={formSubmit} type="submit">
            Login
          </button>
          </Link>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <button type="button" className="cancelbtn">
            Cancel
          </button>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
        </form>
      </section>
    </div>
  );
};
