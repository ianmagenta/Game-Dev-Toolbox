import React, { useEffect, useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Container, Card, Segment, Icon, Header, Label } from "semantic-ui-react";

const Profile = () => {
  const { user, isAuthenticated, loginWithPopup } = useAuth0();

  const handleSignUp = (e) => {
    loginWithPopup();
  };

  return (
    <>
      {isAuthenticated ? null : (
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
                }}
              >
                <Icon
                  size="massive"
                  inverted
                  circular
                  name="user"
                  style={{ backgroundColor: "#1e1610", color: "#f3ede3" }}
                />
                <Icon
                  size="massive"
                  inverted
                  circular
                  name="arrow left"
                  style={{ backgroundColor: "#1e1610", color: "#f3ede3" }}
                />
                <div
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                >
                  <Card.Header
                    as="h1"
                    style={{ margin: 0, color: "#f3ede3", fontSize: "5em", display: "flex", alignItems: "center" }}
                  >
                    This Could
                  </Card.Header>
                  <Card.Header
                    as="h1"
                    style={{ margin: 0, color: "#f3ede3", fontSize: "5em", display: "flex", alignItems: "center" }}
                  >
                    be You
                  </Card.Header>
                </div>
              </Segment>
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
                <div>
                  <Card.Header
                    as="h1"
                    style={{ margin: 0, color: "#f3ede3", fontSize: "4em", display: "flex", alignItems: "center" }}
                  >
                    Sign Up or
                  </Card.Header>
                  <Card.Header
                    as="h1"
                    style={{ margin: 0, color: "#f3ede3", fontSize: "4em", display: "flex", alignItems: "center" }}
                  >
                    Log In to...
                  </Card.Header>
                </div>
                <Icon
                  size="massive"
                  inverted
                  circular
                  name="arrow right"
                  style={{ backgroundColor: "#1e1610", color: "#f3ede3" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Header
                    as="h1"
                    icon="tag"
                    content="Tag Your Favorite Tools"
                    style={{ color: "#f3ede3", margin: "0px 0px 30px 0px" }}
                  />
                  <Header
                    as="h1"
                    icon="edit"
                    content="Create Your Own Projects"
                    style={{ color: "#f3ede3", margin: "0px 0px 30px 0px" }}
                  />
                  <Header
                    as="h1"
                    icon="heart"
                    content="Like/Explore Community Projects"
                    style={{ color: "#f3ede3", margin: 0 }}
                  />
                </div>
              </Segment>
            </Card.Content>
          </Card>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}>
            <Label basic size="massive" style={{ color: "#1e1610", backgroundColor: "#f3ede3" }}>
              <a onClick={handleSignUp}>
                <Icon name="user circle"></Icon>
                Sign Up
              </a>
            </Label>
          </div>
        </Container>
      )}
    </>
  );
};

export default Profile;
