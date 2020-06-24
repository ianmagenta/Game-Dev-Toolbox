import React, { useEffect, useState, useContext } from "react";
import { Segment, Container, Grid, Image, Placeholder, Dimmer, Loader, Header, Icon, Label } from "semantic-ui-react";
import axios from "axios";
import { api } from "../config";
import { Context } from "../Context";

const ToolPage = (props) => {
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [dLink, setDLink] = useState("");
  const toolId = props.match.params.id;
  const { getRandomColor } = useContext(Context);

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
    }
    getGameInfo();
  }, [toolId]);

  return (
    <>
      <Container style={{ paddingTop: 100 }}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="center">
              {image ? (
                <Image size="medium" centered src={image}></Image>
              ) : image === null || image === undefined ? (
                <Icon size="huge" inverted circular name="question"></Icon>
              ) : (
                <Placeholder style={{ height: 150, width: 150, backgroundColor: "transparent" }}>
                  <Placeholder.Image />
                </Placeholder>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Segment textAlign="left" inverted style={{ boxShadow: "none", backgroundColor: "#f2bb4e" }}>
                <Header style={{ color: "#1e1610" }} as="h4">
                  {description}
                </Header>
              </Segment>
              {dLink && (
                <Label
                  size="large"
                  pointing
                  as="a"
                  href={dLink}
                  style={{ color: "#1e1610", backgroundColor: "#f2bb4e" }}
                >
                  <Icon name="question circle"></Icon>
                  Source
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
