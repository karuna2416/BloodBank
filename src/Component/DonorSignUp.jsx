import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

export const DonorSignUp = () => {
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    type: "warning",
    msg: "msg",
  });
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    age: "",
    bloodgroup: "",
    disease: "",
    doctorname: "",
    address: "",
    mobileno: "",
  });
  console.log(data);
  function submit() {
    setLoader(true);
    axios
      .post("http://localhost:5000/addDonor", data)
      .then((res) => {
        console.log(res);
        setLoader(false);
        setAlert({
          open: true,
          type: "success",
          msg: "this is success msg",
        });
      })
      .catch((err) => {
        console.log(err);
        setAlert({
          open: true,
          type: "error",
          msg: "this is error msg",
        });
      });
  }
  return (
    <div>
      <Navbar />
      <Backdrop open={loader}>
        <CircularProgress />
      </Backdrop>

      <section className="donor-signup">
        <h2 className="heading">donor signup</h2>
        <form action="action_page.php" method="post">
          <div className="container">
            <label for="uname">
              <b>firstname</b>
            </label>
            <input
              value={data.firstname}
              type="text"
              name="uname"
              required
              onChange={(e) => {
                setdata({ ...data, firstname: e.target.value });
              }}
            />

            <label for="psw">
              <b>lastname</b>
            </label>
            <input
              value={data.lastname}
              type="text"
              name="psw"
              required
              onChange={(e) => {
                setdata({ ...data, lastname: e.target.value });
              }}
            />

            <label for="psw">
              <b>username</b>
            </label>
            <input
              value={data.username}
              type="text"
              name="psw"
              required
              onChange={(e) => {
                setdata({ ...data, username: e.target.value });
              }}
            />

            <label for="psw">
              <b>password</b>
            </label>
            <input
              value={data.password}
              type="password"
              name="psw"
              required
              onChange={(e) => {
                setdata({ ...data, password: e.target.value });
              }}
            />

            <label for="psw">
              <b>age</b>
            </label>
            <input
              value={data.age}
              type="text"
              name="psw"
              required
              onChange={(e) => {
                setdata({ ...data, age: e.target.value });
              }}
            />

            <label for="blood-names" value={data.bloodgroup}>
              <b>blood group:</b>
            </label>
            <br />
            <select
              name="blood-names"
              id="blood-names"
              value={data.bloodgroup}
              onChange={(e) => {
                setdata({ ...data, bloodgroup: e.target.value });
              }}
            >
              <option value="rigatoni">A+</option>
              <option value="dave">B+</option>
              <option value="pumpernickel">O+</option>
              <option value="reeses">O-</option>
            </select>
            <br />

            <label for="psw">
              <b>address</b>
            </label>
            <input
              value={data.address}
              type="text"
              name="psw"
              required
              onChange={(e) => {
                setdata({ ...data, address: e.target.value });
              }}
            />

            <label for="psw">
              <b>mobile no</b>
            </label>
            <input
              value={data.mobileno}
              type="text"
              name="psw"
              required
              onChange={(e) => {
                setdata({ ...data, mobileno: e.target.value });
              }}
            />

            <button type="button" className="cancelbtn" onClick={submit}>
              register
            </button>
            {alert.open ? (
              <Alert severity={alert.type}>
                {/* {alert.type == "success"
                  ? "This is a success alert — check it out!"
                  : "this is a error"} */}
                {alert.msg}
              </Alert>
            ) : (
              ""
            )}

            <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
              <p>
                Already have an account?
                <Link to="/donor">click here to login</Link>
              </p>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
