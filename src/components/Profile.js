import React, { useEffect, useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Container, Card, Segment, Icon, Header, Label, Image, Tab, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { api } from "../config";

const Profile = () => {
  const { user, isAuthenticated, loginWithPopup, getTokenSilently } = useAuth0();
  const [tags, setTags] = useState([]);
  const [loadingTags, setLoadingTags] = useState(true);

  const handleRemoveTags = (e) => {
    e.preventDefault();
    async function doTheThing() {
      const value = e.currentTarget;
      const number = parseInt(value.id, 10);
      const toolId = tags[number].tool.id;
      const newState = [...tags.slice(0, number), ...tags.slice(number + 1, tags.length)];
      const token = await getTokenSilently();
      setTags(newState);
      await axios({
        url: `${api}/tags`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "post",
        data: { id: user.sub, tool: toolId },
      });
    }
    doTheThing();
  };

  const panes = [
    {
      menuItem: { key: "tags", icon: "tag", content: "Tags" },
      render: () => (
        <Tab.Pane loading={loadingTags} style={{ color: "#f3ede3", backgroundColor: "#1e1610", border: "none" }}>
          <Table inverted style={{ backgroundColor: "#1e1610" }}>
            <Table.Body>
              {!tags.length > 0 ? (
                <Table.Row>
                  <Table.Cell textAlign="center">
                    <Header as="h1" content={"— Nothing Here Yet —"} style={{ color: "#f3ede3" }} />
                    <Label style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
                      <Link to="/tools/3" style={{ display: "flex", alignItems: "center", fontSize: "1.5em" }}>
                        <Icon name="tag"></Icon>
                        Tag some tools!
                      </Link>
                    </Label>
                  </Table.Cell>
                </Table.Row>
              ) : (
                <>
                  {tags.map((item, index) => (
                    <Table.Row key={item.tool.tool_name}>
                      <Table.Cell>
                        <Header as="h1" icon="tag" style={{ color: "#f3ede3", margin: 0 }}>
                          <Link to={`/tools/${item.tool.id}`} className="tag-links">
                            <Icon name="tag" />
                            {item.tool.tool_name}
                          </Link>
                        </Header>
                      </Table.Cell>
                      <Table.Cell textAlign="right">
                        <Label style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
                          <a
                            onClick={handleRemoveTags}
                            id={index}
                            style={{ display: "flex", alignItems: "center", fontSize: "1.5em" }}
                          >
                            <Icon name="x"></Icon>
                            Remove Tag
                          </a>
                        </Label>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </>
              )}
            </Table.Body>
          </Table>
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: "projects", icon: "edit", content: "Projects" },
      render: () => (
        <Tab.Pane style={{ color: "#f3ede3", backgroundColor: "#1e1610", border: "none" }}>Tab 2 Content</Tab.Pane>
      ),
    },
    {
      menuItem: { key: "likes", icon: "heart", content: "Likes" },
      render: () => (
        <Tab.Pane style={{ color: "#f3ede3", backgroundColor: "#1e1610", border: "none" }}>Tab 3 Content</Tab.Pane>
      ),
    },
  ];

  useEffect(() => {
    async function getUserInfo() {
      if (isAuthenticated && user) {
        setLoadingTags(true);
        const token = await getTokenSilently();
        const res = await axios({
          url: `${api}/tags/user/${user.sub}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "get",
        });
        console.log(Object.values(res.data));
        setTags(Object.values(res.data));
        setLoadingTags(false);
      }
    }
    getUserInfo();
  }, [isAuthenticated, user, getTokenSilently]);

  const handleSignUp = (e) => {
    loginWithPopup();
  };

  return (
    <>
      {isAuthenticated && user ? (
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
                <Segment
                  inverted
                  circular
                  style={{
                    boxShadow: "none",
                    backgroundColor: "#f3ede3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image size="medium" circular src={user.picture} />
                </Segment>

                <div
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
                >
                  {user.name.split(" ").map((word) => (
                    <Card.Header
                      key={word}
                      as="h1"
                      style={{ margin: 0, color: "#f3ede3", fontSize: "5em", display: "flex", alignItems: "center" }}
                    >
                      {word}
                    </Card.Header>
                  ))}
                </div>
              </Segment>
              <Tab
                panes={panes}
                style={{
                  boxShadow: "none",
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </Card.Content>
          </Card>
        </Container>
      ) : (
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
                <Segment
                  inverted
                  circular
                  style={{
                    boxShadow: "none",
                    backgroundColor: "#f3ede3",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    size="massive"
                    inverted
                    circular
                    name="user"
                    style={{ backgroundColor: "#1e1610", color: "#f3ede3" }}
                  />
                </Segment>
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
