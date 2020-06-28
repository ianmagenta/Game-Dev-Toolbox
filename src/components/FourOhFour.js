import React from "react";
import { Container, Card, Segment, Icon, Header, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const FourOhFour = () => {
  return (
    <>
      <Container style={{ paddingTop: 105 }}>
        <Card fluid style={{ boxShadow: "none", backgroundColor: "#f2bb4e" }}>
          <Card.Content textAlign="center">
            <Segment
              textAlign="center"
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
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Header style={{ color: "#f3ede3", paddingTop: 10, fontSize: "4em" }} as="h1" icon>
                  <Icon loading name="question" />
                  404 - Page Not Found
                </Header>
                <Label style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center", marginBottom: 10 }}>
                  <Link to="/" style={{ display: "flex", alignItems: "center", fontSize: "1.5em" }}>
                    Warp Back to Reality
                  </Link>
                </Label>
              </div>
            </Segment>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};

export default FourOhFour;
