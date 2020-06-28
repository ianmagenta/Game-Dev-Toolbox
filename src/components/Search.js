import React, { useEffect, useState } from "react";
import { Container, Card, Segment, Icon, Header, Search, Image, Label } from "semantic-ui-react";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";
import { api } from "../config";
import { Link } from "react-router-dom";

const SiteSearch = () => {
  const { user, isAuthenticated, loginWithPopup, getTokenSilently } = useAuth0();
  const [tools, setTools] = useState([]);
  const [searchTools, setSearchTools] = useState([]);

  useEffect(() => {
    async function getTools() {
      const res = await axios({
        url: `${api}/tools`,
        method: "get",
      });
      const data = Object.values(res.data);
      setTools(data);
      setSearchTools(data);
    }
    getTools();
  }, []);

  const searchChange = (e, { value }) => {
    if (value === "") {
      setTools(searchTools);
    } else {
      let searchList = [];
      for (let i = 0; i < searchTools.length; i++) {
        if (
          searchTools[i].tool_name.toLowerCase().includes(value.toLowerCase()) ||
          searchTools[i].tool_type.tool_type.toLowerCase().includes(value.toLowerCase())
        ) {
          searchList.push(searchTools[i]);
        }
      }
      setTools(searchList);
    }
  };

  return (
    <>
      <Container style={{ paddingTop: 105 }}>
        <Card style={{ boxShadow: "none", backgroundColor: "#f2bb4e", width: "100%" }}>
          <Card.Content textAlign="center">
            <Segment
              inverted
              style={{
                boxShadow: "none",
                backgroundColor: "#1e1610",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Search open={false} showNoResults={false} size="massive" onSearchChange={searchChange} />
            </Segment>
          </Card.Content>
        </Card>
        <Card.Group doubling itemsPerRow={4} style={{ display: "flex", justifyContent: "center" }}>
          {tools.length > 0 && searchTools.length > 0 ? (
            tools.map((tool) => (
              <Card
                as={Link}
                to={`/tools/${tool.id}`}
                key={tool.id}
                style={{ boxShadow: "none", backgroundColor: "#f2bb4e" }}
              >
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
                  {/* <Label floating style={{ color: "#1e1610", backgroundColor: "#f3ede3", top: 0, left: 146 }}>
                  <a style={{ fontSize: "1.5em" }} onClick={handleClick}>
                    <Icon name="tag" style={{ margin: 0 }}></Icon>
                  </a>
                </Label> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 200,
                      height: 200,
                    }}
                  >
                    {tool.picture ? (
                      <Image size="medium" centered src={tool.picture}></Image>
                    ) : (
                      <Icon
                        size="huge"
                        inverted
                        circular
                        name="question"
                        style={{ backgroundColor: "transparent" }}
                      ></Icon>
                    )}
                  </div>
                </Segment>
                <Card.Content>
                  <Segment
                    textAlign="center"
                    inverted
                    style={{
                      boxShadow: "none",
                      backgroundColor: "#1e1610",
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Card.Header as="h3" style={{ color: "#f3ede3", fontSize: "1.5em", whiteSpace: "nowrap" }}>
                      {tool.tool_name}
                    </Card.Header>
                    <Card.Description style={{ color: "#f3ede3" }}>Tool Type</Card.Description>
                    <Card.Description style={{ color: "#f3ede3" }}>{tool.tool_type.tool_type}</Card.Description>
                  </Segment>
                </Card.Content>
              </Card>
            ))
          ) : searchTools.length > 0 ? (
            <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
              <Header as="h1" content="— No Results Found —" style={{ color: "#f3ede3", fontSize: "3em" }} />
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Icon loading size="massive" name="circle notch" style={{ color: "#f3ede3", marginTop: 40 }} />
            </div>
          )}
        </Card.Group>
      </Container>
    </>
  );
};

export default SiteSearch;
