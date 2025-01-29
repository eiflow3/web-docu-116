import {
  Container,
  Drawer,
  Toolbar,
  AppBar,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const endpoints = [
  {
    id: 1,
    method: "GET",
    route: "/auth/login",
    link: "/endpoint/login",
  },
  {
    id: 2,
    method: "POST",
    route: "/auth/register",
    link: "/endpoint/register",
  },
  {
    id: 3,
    method: "GET",
    route: "/auth/logout",
    link: "/endpoint/logout",
  },
  {
    id: 4,
    method: "GET",
    route: "/api/user/:username",
    link: "/endpoint/get-user",
  },
  {
    id: 5,
    method: "GET",
    route: "/events",
    link: "/endpoint/get-events",
  },
  {
    id: 6,
    method: "POST",
    route: "/events",
    link: "/endpoint/post-events",
  },
  {
    id: 8,
    method: "PATCH",
    route: "/events/:id/:event_id",
    link: "/endpoint/patch-events",
  },
  {
    id: 7,
    method: "DELETE",
    route: "/events/:id/:event_id",
    link: "/endpoint/delete-events",
  },
  {
    id: 9,
    title: "getUserJoinedEvents",
    method: "GET",
    route: "/my-events/:id",
    link: "/endpoint/get-my-events",
  },
  {
    id: 10,
    title: "registerForEvent",
    method: "POST",
    route: "/my-events/:id/:event_id",
    link: "/endpoint/post-my-events",
  },
  {
    id: 11,
    title: "unregisterFromEvent",
    method: "DELETE",
    route: "/my-events/:id/:event_id",
    link: "/endpoint/delete-my-events",
  },
];

export default function Home() {
  return (
    <Container
      sx={{
        m: 0,
        display: "flex",
        alignItems: "center",
        width: "80% !important",
        maxWidth: "100% !important",
        pt: 10,
      }}
    >
      <Helmet>
        <title>Web Documentation</title>
      </Helmet>
      <AppBar
        position="fixed"
        sx={{
          height: "60px",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "#EAEAEA",
          boxShadow: "none",
          borderBottom: "1px solid #cfd8dc",
        }}
      >
        <Toolbar>
          <Typography variant="three" color="#000">
            Web Documentation
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          "& .MuiDrawer-paper": {
            width: "20%",
            boxSizing: "border-box",
            bgcolor: "#EAEAEA",
            pt: "4rem",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start  ",
            pt: "1rem",
            gap: 1,
          }}
        >
          <Link
            href="/"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography variant="two">Home</Typography>
          </Link>
          <List>
            <Typography variant="two">API Endpoints</Typography>
            {endpoints.map((endpoint, i) => {
              return (
                <ListItem key={i}>
                  <Link
                    to={endpoint.link}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="one"
                      color={
                        endpoint.method === "GET"
                          ? "success"
                          : endpoint.method === "POST"
                          ? "warning"
                          : endpoint.method === "DELETE"
                          ? "error"
                          : "violet"
                      }
                    >
                      {endpoint.method}
                      <Typography variant="one" color="#0d47a1">
                        {" "}
                        {endpoint.route}
                      </Typography>
                    </Typography>
                  </Link>
                </ListItem>
              );
            })}
          </List>
          <Link
            to="/resources"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography variant="two">Resources</Typography>
          </Link>
          <Link
            to="/about"
            target="_blank"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Typography variant="two">About Devs</Typography>
          </Link>
        </Toolbar>
      </Drawer>
      <Outlet />
    </Container>
  );
}
