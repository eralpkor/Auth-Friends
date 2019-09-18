import React, { useState, useEffect } from "react";
// import moment from 'moment';
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";

import Circle from "./Circle";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendCard from "./FriendCard";
import AddNewFriend from "./AddNewFriend";

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <AddNewFriend />
      <h4>.</h4>
      <section className="character-list grid-view">
        <Grid container columns={3}>
          {friends.length ? (
            friends.map(friend => {
              return <FriendCard
              key={friend.id}
              friend={friend}
              />;
            })
          ) : (
            <Circle />
          )}
        </Grid>
      </section>
    </div>
  );
}
