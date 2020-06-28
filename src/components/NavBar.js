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
import { Container, Header, Image, Menu, Icon, Label } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = (props) => {
  const { loginWithPopup, logout, user } = useAuth0();
  const [activeItem, setActiveItem] = useState("home");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveItem("home");
        break;
      case "/profile":
        setActiveItem("user");
        break;
      case "/info":
        setActiveItem("info");
        break;
      case "/explore":
        setActiveItem("map");
        break;
      case "/projects":
        setActiveItem("edit");
        break;
      case "/search":
        setActiveItem("search");
        break;
      default:
        setActiveItem("none");
        break;
    }
  }, [location]);

  const handleItemClick = (event, { name }) => {
    setActiveItem(name);
  };

  const handleLogClick = () => {
    if (user) {
      logout();
    } else {
      loginWithPopup();
    }
  };

  // const handleDropDownClick = (e, d) => {
  //   if (d.value === "profile") {
  //     setActiveItem("user");
  //     setLinkToProfile(true);
  //   } else {
  //   }
  //   console.log(d);
  // };

  return (
    <div>
      {/* {linkToProfile && <Redirect to="/profile" />} */}
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

        <Menu.Item name="map" active={activeItem === "map"} onClick={handleItemClick} as={Link} to="/explore">
          <Icon size="large" inverted circular name="map" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
        </Menu.Item>
        <Menu.Item name="edit" active={activeItem === "edit"} onClick={handleItemClick} as={Link} to="/projects">
          <Icon size="large" inverted circular name="edit" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
        </Menu.Item>
        <Menu.Item name="search" active={activeItem === "search"} onClick={handleItemClick} as={Link} to="/search">
          <Icon size="large" inverted circular name="search" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
        </Menu.Item>
        <Menu.Item name="info" active={activeItem === "info"} onClick={handleItemClick} as={Link} to="/info">
          <Icon size="large" inverted circular name="info" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
        </Menu.Item>
        <Menu.Item name="user" active={activeItem === "user"} onClick={handleItemClick} as={Link} to="/profile">
          {user ? (
            <Image circular src={user.picture} style={{ width: 45, height: 45 }}></Image>
          ) : (
            <Icon size="large" inverted circular name="user" style={{ backgroundColor: "#1e1610", color: "#f3ede3" }} />
          )}
        </Menu.Item>
        {/* <Dropdown
          as={Menu.Item}
          active={activeItem === "user"}
          compact
          direction="left"
          trigger={
            user ? (
              <Image circular src={user.picture} style={{ width: 45, height: 45 }}></Image>
            ) : (
              <Icon
                size="large"
                inverted
                circular
                name="user"
                style={{ backgroundColor: "#1e1610", color: "#f3ede3" }}
              />
            )
          }
          options={[
            { value: "profile", text: "Profile", active: false, selected: false, onClick: handleDropDownClick },
            { value: false, text: "Log In", active: false, selected: false, onClick: handleDropDownClick },
          ]}
          item
          icon={null}
        ></Dropdown> */}
      </Menu>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: 70,
          right: 0,
          width: 79.28,
          zIndex: 10,
        }}
      >
        <Label style={{ paddingTop: 20, color: "#1e1610", backgroundColor: "#f3ede3", textAlign: "center" }}>
          <a style={{ display: "flex", alignItems: "center", fontSize: "1.25em" }} onClick={handleLogClick}>
            {user ? "Log Out" : "Log In"}
          </a>
        </Label>
      </div>
    </div>
  );
};

export default NavBar;
