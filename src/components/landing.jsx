import {
  Box,
  Typography,
  Stack,
  Card,
  CardMedia,
  CardActions,
  CardHeader,
  CardContent,
} from "@mui/material";

const svgFileNames = [
  "api.svg",
  "css.svg",
  "express.svg",
  "figma.svg",
  "git.svg",
  "github.svg",
  "html.svg",
  "js.svg",
  "landing.svg",
  "mui.svg",
  "nodejs.svg",
  "postman.svg",
  "prisma.svg",
  "react.svg",
  "sql.svg",
  "typescript.svg",
];
export default function Landing() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          width: "80%",
          height: "80vh",
          gap: 10,
          mt: 4,
          alignItems: "center",
        }}
      >
        <img src="/svg/landing.svg" alt="" height={300} />
        <Typography variant="three" sx={{ width: "50%" }}>
          Welcome to the API Documentation for our{" "}
          <Typography
            variant="three"
            sx={{ fontWeight: "500" }}
            color="warning"
          >
            Event Management System!
          </Typography>{" "}
          This resource provides all the details you need to integrate with our
          platform, build custom tools, and manage events seamlessly. Explore
          our comprehensive endpoint documentation to get started.
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          width: "80%",
          height: "90vh",
          gap: 10,
          mt: 4,
          alignItems: "center",
        }}
      >
        <Card sx={{ minWidth: "30%", minHeight: "75vh" }}>
          <Box
            sx={{
              width: 1,
              p: 4,
              display: "flex",
              justifyContent: "center",
              bgcolor: "#eaeaea",
              height: 184,
            }}
          >
            <img src="/svg/api.svg" alt="" height={100} />
          </Box>
          <CardContent>
            <Stack spacing={3}>
              <Typography variant="three" sx={{ fontWeight: "6  00" }}>
                API Endpoints
              </Typography>
              <Typography variant="two">
                APIs (Application Programming Interfaces): APIs are the
                communication bridges that allow different software applications
                to interact with each other. Our Event Management API provides a
                structured way for developers to access and manipulate event
                data, bookings, users, and more. By using our API, you can
                integrate our platform into your own systems, build custom
                applications, and automate various tasks. Think of it as a set
                of well-defined instructions that tell other software programs
                how to interact with our system.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: "30%", minHeight: "75vh" }}>
          <Stack
            direction={"row"}
            sx={{
              p: 2,
              gap: 2,
              flexWrap: "wrap",
              justifyContent: "center",
              bgcolor: "#eaeaea",
            }}
          >
            {svgFileNames.map((f) => {
              return <img src={`/svg/${f}`} alt="" height={40} />;
            })}
          </Stack>
          <CardContent>
            <Stack spacing={3}>
              <Typography variant="three" sx={{ fontWeight: "600" }}>
                Resources
              </Typography>
              <Typography variant="two">
                Our Event Management System is built using a combination of
                cutting-edge technologies to ensure scalability, reliability,
                and performance. On the front-end, we use HTML, CSS, JavaScript,
                TypeScript, and React, complemented by Material UI for a modern
                UI/UX. Our backend utilizes Node.js, Express.js, and
                communicates with a database through SQL and Prisma. These
                technologies help to provide the user interface for the
                application and power data manipulation behind the scenes. We
                also use Figma for design, Git and GitHub for version control
                and collaboration, and Postman for testing.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: "30%", minHeight: "75vh" }}>
          <CardMedia
            component="img"
            height={184}
            image="/svg/devs.webp"
          ></CardMedia>
          <CardContent>
            <Stack spacing={3}>
              <Typography variant="three" sx={{ fontWeight: "600" }}>
                About Devs
              </Typography>
              <Typography variant="two">
                Our team is passionate about creating tools that simplify event
                management. We are a group of dedicated software engineers,
                designers, and project managers committed to building intuitive,
                reliable, and scalable solutions. We strive to empower our users
                through robust, well-documented APIs and thoughtful user
                interface design, and are always looking for ways to improve our
                system based on feedback from our community of users and
                developers.
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
