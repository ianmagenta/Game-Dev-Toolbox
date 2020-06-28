import React from "react";
import { Container, Card, Segment, Icon, Label } from "semantic-ui-react";

const Info = () => {
  return (
    <>
      <Container style={{ paddingTop: 105 }}>
        <Card.Group doubling itemsPerRow={2}>
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
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Segment
                  inverted
                  circular
                  style={{
                    boxShadow: "none",
                    backgroundColor: "#f3ede3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: 350,
                    maxHeight: 350,
                  }}
                >
                  <Icon size="massive" name="info circle" style={{ color: "#1e1610", fontSize: "20em" }}></Icon>
                </Segment>
              </Segment>
            </Card.Content>
          </Card>
          <Card fluid style={{ boxShadow: "none", backgroundColor: "#f2bb4e" }}>
            <Card.Content textAlign="left">
              <Segment
                inverted
                style={{
                  boxShadow: "none",
                  backgroundColor: "#1e1610",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Card.Header as="h2" style={{ margin: 0 }}>
                  <Card.Header style={{ margin: 0, color: "#f2bb4e", display: "inline" }}>
                    Game Dev Toolbox{" "}
                  </Card.Header>
                  <Card.Header style={{ margin: 0, color: "#f3ede3", display: "inline" }}>
                    is a catalogue of game development tools including engines, frameworks, libraries, art tools, sound
                    tools, and more! You can use it to discover new development resources or plan out your next big game
                    dev project. The site is under construction and the following features are still in the works:
                    project creation, project sharing, liking projects, tool type explanations, and a tool suggestion
                    form. More tools are being added regularly, so be sure to check back often!
                  </Card.Header>
                </Card.Header>
              </Segment>
            </Card.Content>
          </Card>
        </Card.Group>
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
              <div>
                <Card.Header as="h2" style={{ margin: 0, color: "#f3ede3", display: "inline" }}>
                  Site by{" "}
                </Card.Header>
                <Card.Header as="h2" style={{ margin: 0, color: "#e442f9", display: "inline" }}>
                  {" "}
                  Ian Magenta
                </Card.Header>
              </div>
              <Label style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
                <a
                  style={{ display: "flex", alignItems: "center", fontSize: "1.75em", fontWeight: 700 }}
                  href="https://github.com/ianmagenta/Game-Dev-Toolbox"
                >
                  <Icon name="github"></Icon>
                  GitHub
                </a>
              </Label>
              <Label style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
                <a
                  style={{ display: "flex", alignItems: "center", fontSize: "1.75em", fontWeight: 700 }}
                  href="https://www.linkedin.com/in/ianmagenta/"
                >
                  <Icon name="linkedin"></Icon>
                  LinkedIn
                </a>
              </Label>
              <Label style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
                <a
                  style={{ display: "flex", alignItems: "center", fontSize: "1.75em", fontWeight: 700 }}
                  href="https://twitter.com/ianmagenta"
                >
                  <Icon name="twitter"></Icon>
                  Twitter
                </a>
              </Label>
            </Segment>
          </Card.Content>
        </Card>
      </Container>
    </>
  );
};

export default Info;
