import React from "react";
import { Container, Card, Segment, Icon } from "semantic-ui-react";

const UnderConstruction = () => {
  return (
    <>
      <Container style={{ paddingTop: 105 }}>
        <Card fluid style={{ boxShadow: "none", backgroundColor: "#f2bb4e" }}>
          <Card.Content textAlign="center">
            <Icon
              inverted
              circular
              size="massive"
              name="wrench"
              style={{ backgroundColor: "#1e1610", color: "#f3ede3", fontSize: "10em" }}
            />
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};

export default UnderConstruction;
