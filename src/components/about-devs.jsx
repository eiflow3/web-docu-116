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
import AboutCard from "./about-card";

const info = [
  {
    name: "Michael Santos",
    role: "Frontend Developer",
    img: "/mikel.webp",
    description:
      "Michael is a frontend developer with a passion for creating user-friendly interfaces. He specializes in React and Material UI, using his skills to design and implement engaging user experiences. Michael is dedicated to building accessible and responsive web applications that meet the needs of users.",
    github: "@eiflow3",
    githubLink: "https://github.com/eiflow3",
  },
  {
    name: "Darenz Hicap",
    role: "Backend Developer",
    img: "/darenz.webp",
    description:
      "Darenz is a backend developer with a focus on Node.js and Express. He is experienced in building RESTful APIs and database management, ensuring the server-side of the application runs smoothly. Darenz is committed to creating scalable and secure web services that power our application.",
    github: "@Hakdoooooooooooog",
    githubLink: "https://github.com/Hakdoooooooooooog",
  },
  {
    name: "Angel Bacongan",
    role: "Document Writer",
    img: "/gelo.webp",
    description: "~",
    github: "@krispyoleg",
    githubLink: "https://github.com/krispyoleg",
  },
  {
    name: "Rudy Calay",
    role: "Document Writer",
    description: "~",
    img: "/rudy.webp",
    github: "@Cplasplas",
    githubLink: "https://github.com/Cplasplas",
  },
  {
    name: "Neil Tolero",
    role: "Document Writer",
    description: "~",
    img: "/neil.webp",
    github: "@neilllsz",
    githubLink: "https://github.com/neilllsz",
  },
];

export default function AboutDevs() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="six"
        component="h1"
        sx={{ textAlign: "start", mb: 2 }}
      >
        Our Team
      </Typography>
      <Stack spacing={2} sx={{ p: 1 }}>
        <Stack
          direction={"row"}
          spacing={3}
          sx={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          {info.slice(0, 2).map((dev, i) => {
            return <AboutCard key={dev.name} info={dev} />;
          })}
        </Stack>
        <Stack direction={"row"} spacing={3} sx={{ flexWrap: "wrap" }}>
          {info.slice(-3).map((dev, i) => {
            return <AboutCard key={dev.name} info={dev} />;
          })}
        </Stack>
      </Stack>
    </Box>
  );
}
