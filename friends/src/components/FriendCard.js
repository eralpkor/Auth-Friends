import React from "react";
import { Card, Button, Grid, Image } from "semantic-ui-react";
import { axiosWithAuth } from '../utils/axiosWithAuth';


export default function FriendCard(props) {
  const { name, age, email } = props.friend;

  const deleteFriend = id  => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => console.log(res.data.id))
      .catch(err => console.log(err));
  };

  return (
    <Grid.Column>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span className="date">{name}</span>
          </Card.Meta>
          <Card.Description>Age: {age}</Card.Description>
          <Card.Description>Email: {email}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color="orange" content="Delete"
          onClick={props.remove}
           />
        </Card.Content>
      </Card>
    </Grid.Column>
  );
}
