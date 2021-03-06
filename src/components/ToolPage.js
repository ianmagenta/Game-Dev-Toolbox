import React, { useEffect, useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import { Segment, Container, Grid, Image, Progress, Icon, Label, Card, Responsive } from "semantic-ui-react";
import axios from "axios";
import { api } from "../config";
import { Link, Redirect } from "react-router-dom";

const ToolPage = (props) => {
  const { isAuthenticated, user, getTokenSilently, loginWithPopup } = useAuth0();
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [dLink, setDLink] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [wLink, setWLink] = useState("");
  const [associated, setAssociated] = useState([]);
  const [backAssociated, setBackAssociated] = useState([]);
  const [tagged, setTagged] = useState(false);
  const [loadingTag, setLoadingTag] = useState(true);
  const toolId = props.match.params.id;

  useEffect(() => {
    async function getGameInfo() {
      const res = await axios({
        url: `${api}/tools/${toolId}`,
        method: "get",
      });
      const data = res.data;
      setImage(data.picture);
      setDescription(data.description);
      setDLink(data.description_link);
      setName(data.tool_name);
      data.tool_type && setType(data.tool_type.tool_type);
      setWLink(data.website);
      data.associated && setAssociated(data.associated);
      data.back_associated && setBackAssociated(data.back_associated);
    }
    getGameInfo();
  }, [toolId]);

  useEffect(() => {
    async function getTagInfo() {
      setLoadingTag(true);
      if (isAuthenticated && user) {
        const token = await getTokenSilently();
        const tagRes = await axios({
          url: `${api}/tags/is_tagged`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          method: "post",
          data: { id: user.sub, tool: toolId },
        });
        const tagData = tagRes.data;
        setTagged(tagData.tagged);
        setLoadingTag(false);
      } else {
        setLoadingTag(false);
      }
    }
    getTagInfo();
  }, [isAuthenticated, getTokenSilently, toolId, user]);

  const handleTagClick = async (e) => {
    if (isAuthenticated && user) {
      setLoadingTag(true);
      const token = await getTokenSilently();
      const res = await axios({
        url: `${api}/tags`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "post",
        data: { id: user.sub, tool: toolId },
      });
      setTagged(res.data.tagged);
      setLoadingTag(false);
    } else {
      loginWithPopup();
    }
  };

  return (
    <>
      {(toolId < 1 || toolId > 38 || /[a-zA-Z]/.test(toolId)) && <Redirect to="/404" />}
      <Container style={{ paddingTop: 105 }}>
        <Grid centered>
          <Grid.Row columns={2}>
            <Grid.Column style={{ display: "flex", justifyContent: "center" }}>
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        alignItems: "center",
                      }}
                    >
                      {image ? (
                        <Image size="medium" centered src={image} style={{ maxWidth: "max-content" }}></Image>
                      ) : image === null || image === undefined ? (
                        <Icon
                          size="huge"
                          inverted
                          circular
                          name="question"
                          style={{ backgroundColor: "transparent" }}
                        ></Icon>
                      ) : (
                        <Progress active percent={100} style={{ width: "100%" }} />
                      )}
                    </div>
                  </Segment>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column style={{ display: "flex", justifyContent: "center" }}>
              <Card fluid style={{ boxShadow: "none", backgroundColor: "#f2bb4e" }}>
                <Responsive minWidth={800}>
                  {name && (
                    <div
                      style={{
                        position: "absolute",
                        top: -17,
                        right: 100,
                      }}
                    >
                      {loadingTag ? (
                        <Label floating style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
                          <a
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1.25em",
                              pointerEvents: "none",
                            }}
                          >
                            <Icon size="big" loading name="circle notch" style={{ margin: "auto" }} />
                          </a>
                        </Label>
                      ) : (
                        <Label floating style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
                          <a
                            style={{ display: "flex", alignItems: "center", fontSize: "1.25em" }}
                            onClick={handleTagClick}
                          >
                            {tagged ? <Icon name="check"></Icon> : <Icon name="tag"></Icon>}
                            {tagged ? "Tool Tagged" : "Tag this Tool"}
                          </a>
                        </Label>
                      )}
                    </div>
                  )}
                </Responsive>
                <Responsive maxWidth={800}>
                  {name && (
                    <div
                      style={{
                        position: "absolute",
                        top: -17,
                        right: 300,
                      }}
                    >
                      {loadingTag ? (
                        <Label floating style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
                          <a
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1.25em",
                              pointerEvents: "none",
                            }}
                          >
                            <Icon size="big" loading name="circle notch" style={{ margin: "auto" }} />
                          </a>
                        </Label>
                      ) : (
                        <Label floating style={{ color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
                          <a
                            style={{ display: "flex", alignItems: "center", fontSize: "1.25em" }}
                            onClick={handleTagClick}
                          >
                            {tagged ? <Icon name="check"></Icon> : <Icon name="tag"></Icon>}
                            {tagged ? "Tool Tagged" : "Tag this Tool"}
                          </a>
                        </Label>
                      )}
                    </div>
                  )}
                </Responsive>
                <Card.Content textAlign="center">
                  <Segment
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
                    <Card.Header as="h1" style={{ color: "#f3ede3", fontSize: "3em" }}>
                      {name ? name : <Progress active percent={100} />}
                    </Card.Header>
                    {type && (
                      <>
                        <Card.Description style={{ color: "#f3ede3", fontSize: "1.25em" }}>Tool Type</Card.Description>
                        <Card.Description style={{ color: "#f3ede3", fontSize: "1.25em" }}>{type}</Card.Description>
                      </>
                    )}
                    {wLink && (
                      <Label size="large" style={{ backgroundColor: "transparent" }}>
                        <a href={wLink} style={{ color: "#f3ede3", fontSize: "1.25em" }}>
                          <Icon name="globe"></Icon>
                          Website
                        </a>
                      </Label>
                    )}
                  </Segment>
                </Card.Content>
                {(associated.length > 0 || backAssociated.length > 0) && (
                  <Card.Content textAlign="center">
                    <Segment
                      inverted
                      style={{
                        boxShadow: "none",
                        backgroundColor: "#1e1610",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <Card.Header as="h4" style={{ color: "#f3ede3", fontSize: "1.5em" }}>
                          Associated Tools
                        </Card.Header>
                        {associated.map((assoc) => (
                          <Label key={assoc.id} style={{ backgroundColor: "transparent", fontSize: "1.1em" }}>
                            <Link to={`/tools/${assoc.associated_tool_id.id}`} style={{ color: "#f3ede3" }}>
                              <Icon name="wrench" />
                              {assoc.associated_tool_id.tool_name}
                            </Link>
                          </Label>
                        ))}
                        {backAssociated.map((assoc) => (
                          <Label key={assoc.id} style={{ backgroundColor: "transparent", fontSize: "1.1em" }}>
                            <Link to={`/tools/${assoc.primary_tool_id.id}`} style={{ color: "#f3ede3" }}>
                              <Icon name="wrench" />
                              {assoc.primary_tool_id.tool_name}
                            </Link>
                          </Label>
                        ))}
                      </div>
                    </Segment>
                  </Card.Content>
                )}
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Segment
                textAlign="left"
                inverted
                style={{ boxShadow: "none", backgroundColor: "#f2bb4e", width: "100%" }}
              >
                <Segment inverted style={{ boxShadow: "none", backgroundColor: "#1e1610", width: "100%" }}>
                  <div style={{ color: "#f3ede3" }}>
                    {description ? (
                      <p style={{ fontSize: "1.3em" }}>{description}</p>
                    ) : (
                      <div style={{ padding: 20 }}>
                        <Progress active percent={100} color="black" style={{ backgroundColor: "#1e1610" }} />
                      </div>
                    )}
                  </div>
                </Segment>
              </Segment>
              {dLink && (
                <Label basic size="large" pointing style={{ color: "#1e1610", backgroundColor: "#f3ede3" }}>
                  <a href={dLink} style={{ fontSize: "1.25em" }}>
                    <Icon name="question circle"></Icon>
                    Source
                  </a>
                </Label>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default ToolPage;
