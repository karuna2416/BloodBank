import React, { useState } from "react";

export default function RegistrationForm(props) {
  const { singleUser, setSingleUser } = props;
  // const[data,setSingleUser]=useState(singleUser)
  return (
    <div>
      <form action="action_page.php">
        <div class="container">
          <h1>Register</h1>
          <hr />

          <label for="firstname">
            <b>firstname</b>
          </label>

          <input
            type="text"
            placeholder="Enter firstname"
            name="firstname"
            value={singleUser.firstname}
            onChange={(e) => {
              setSingleUser({ ...singleUser, firstname: e.target.value });
            }}
            required
          />
          <label for="email">
            <b>lastname</b>
          </label>
          <input
            type="text"
            placeholder="Enter lastname"
            name="lastanme"
            value={singleUser.lastname}
            onChange={(e) => {
              setSingleUser({ ...singleUser, lastname: e.target.value });
            }}
            required
          />
          <label for="email">
            <b>bloodgroup</b>
          </label>
          <input
            type="text"
            placeholder="Enter bloodgroup"
            name="bloodgroup"
            required
            value={singleUser.bloodgroup}
            onChange={(e) => {
              setSingleUser({ ...singleUser, bloodgroup: e.target.value });
            }}
          />
          <label for="psw-repeat">
            <b>age</b>
          </label>
          <input
            type="text"
            placeholder="enter disease"
            name="age"
            required
            value={singleUser.age}
            onChange={(e) => {
              setSingleUser({ ...singleUser, age: e.target.value });
            }}
          />
          <label for="email">
            <b>mobileno</b>
          </label>
          <input
            type="text"
            placeholder="Enter mobileno"
            name="mobileno"
            required
            value={singleUser.mobileno}
            onChange={(e) => {
              setSingleUser({ ...singleUser, mobileno: e.target.value });
            }}
          />

          <label for="psw">
            <b>address</b>
          </label>
          <input
            type="text"
            placeholder="Enter address"
            name="address"
            required
            value={singleUser.address}
            onChange={(e) => {
              setSingleUser({ ...singleUser, address: e.target.value });
            }}
          />

          <hr />
        </div>
      </form>
    </div>
  );
}
