import React from "react";
import { Card } from "semantic-ui-react";

const Cards = props => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.person.name}</Card.Header>
        <Card.Meta>
          <span className="date">Birth Year: {props.person.birth_year}</span>
        </Card.Meta>

        <Card.Description>Weight: {props.person.mass} KG</Card.Description>
        <Card.Description>Gender: {props.person.gender}</Card.Description>
        <Card.Description>
          Hair Color: {props.person.hair_color}
        </Card.Description>
        <Card.Description>Eye Color: {props.person.eye_color}</Card.Description>
      </Card.Content>
    </Card>
  );
};
export default Cards;
