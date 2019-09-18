import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function AddNewFriend() {
  const [newFriend, setNewFriend] = useState({});

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]:
      e.target.type === "number" ? +e.target.value : e.target.value
    });
    console.log(newFriend);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewFriend({
      ...newFriend,
      id: Date.now()
    });
    console.log(newFriend);
  };

  const submitHandler = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends/', newFriend)
    .then(() => window.location.reload());
  }

  return (
    <div className="friends">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h2 className="active">friends info</h2>
          {/* <h2 className="inactive underlineHover">Sign Up </h2> */}

          <div className="fadeIn first"></div>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              id="login"
              className="fadeIn second"
              name="name"
              placeholder="name"
              value={newFriend.name}
              onChange={handleChange}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="age"
              placeholder="age..."
              value={newFriend.age}
              onChange={handleChange}
            />
            <input
              type="text"
              id="password"
              className="fadeIn third"
              name="email"
              placeholder="email..."
              value={newFriend.email}
              onChange={handleChange}
            />
            <input type="submit" className="fadeIn fourth" value="Add Friend" />
          </form>

          <div id="formFooter">
            <h3 className="underlineHover">
              Welcome Back
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
