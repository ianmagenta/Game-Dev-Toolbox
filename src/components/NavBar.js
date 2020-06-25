// src/components/NavBar.js

// import React from "react";
// import { useAuth0 } from "../react-auth0-spa";

// const NavBar = () => {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   return (
//     <div style={{ backgroundColor: "red" }}>
//       {!isAuthenticated && <button onClick={() => loginWithRedirect({})}>Log in</button>}

//       {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

//       {isAuthenticated && (
//         <span>
//           <Link to="/">Home</Link>&nbsp;
//           <Link to="/profile">Profile</Link>
//         </span>
//       )}
//     </div>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon,
  SegmentGroup,
} from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/tools/")) {
      setActiveItem("none");
    }
  }, [location]);

  const handleItemClick = (event, { name }) => {
    setActiveItem(name);
  };

  return (
    <div>
      <Menu
        pointing
        icon
        borderless
        size="large"
        fixed="top"
        style={{
          backgroundColor: "#f2bb4e",
        }}
      >
        <Menu.Item name="home" active={activeItem === "home"} onClick={handleItemClick} as={Link} to="/">
          <Header as="h1">
            <Header.Content style={{ fontFamily: "cooper-black-std, serif", color: "#1e1610" }}>
              <Icon inverted circular name="wrench" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
              Game Dev Toolbox
            </Header.Content>
          </Header>
        </Menu.Item>

        <Container style={{ display: "flex", justifyContent: "center" }} textAlign="center"></Container>

        <Menu.Item name="map" active={activeItem === "map"} onClick={handleItemClick} as={Link} to="/">
          <Icon size="large" inverted circular name="map" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
        </Menu.Item>
        <Menu.Item name="edit" active={activeItem === "edit"} onClick={handleItemClick} as={Link} to="/">
          <Icon size="large" inverted circular name="edit" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
        </Menu.Item>
        <Menu.Item name="search" active={activeItem === "search"} onClick={handleItemClick} as={Link} to="/">
          <Icon size="large" inverted circular name="search" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
        </Menu.Item>
        <Menu.Item name="info" active={activeItem === "info"} onClick={handleItemClick} as={Link} to="/">
          <Icon size="large" inverted circular name="info" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
        </Menu.Item>
        <Menu.Item name="user" active={activeItem === "user"} onClick={handleItemClick} as={Link} to="/">
          {user ? (
            <Image circular src={user.picture} style={{ width: 45, height: 45 }}></Image>
          ) : (
            <Icon size="large" inverted circular name="user" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
          )}
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
