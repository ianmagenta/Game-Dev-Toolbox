import React from "react";
import { Container, Card, Segment, Icon, Header } from "semantic-ui-react";

const UnderConstruction = () => {
  return (
    <>
      <Container style={{ paddingTop: 105 }}>
        <Card fluid style={{ boxShadow: "none", backgroundColor: "#f2bb4e" }}>
          <Card.Content textAlign="center">
            <Segment
              inverted
              style={{
                boxShadow: "none",
                backgroundColor: "#1e1610",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Header style={{ color: "#f3ede3", paddingTop: 10, fontSize: "4em" }} as="h1" icon>
                <Icon name="warning sign" />
                Under Construction
                <Header style={{ color: "#f3ede3", fontSize: "0.5em", margin: 0 }}>
                  This part of the site isn't ready yet, but check back soon!
                </Header>
              </Header>
            </Segment>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};

export default UnderConstruction;
