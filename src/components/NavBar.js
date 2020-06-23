// src/components/NavBar.js

// import React from "react";
// import { useAuth0 } from "../react-auth0-spa";
// import { Link } from "react-router-dom";

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

import React from "react";
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from "semantic-ui-react";

const FixedMenuLayout = () => (
  <div>
    <Menu
      icon
      borderless
      size="massive"
      fixed="top"
      style={{
        "background-color": "#f2bb4e",
      }}
    >
      <Menu.Item circular as="a" href="/" header style={{ fontFamily: "cooper-black-std, serif" }}>
        <Header as="h1">
          <Icon name="wrench" style={{ color: "#1e1610" }} />
          <Header.Content style={{ fontFamily: "cooper-black-std, serif", color: "#1e1610" }}>
            Game Dev Toolbox
          </Header.Content>
        </Header>
      </Menu.Item>
    </Menu>
  </div>
);

export default FixedMenuLayout;
