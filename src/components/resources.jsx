import { Box, Typography, Paper, Stack, Link, Tooltip } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const resources = [
  {
    name: "React",
    link: "https://reactjs.org/",
    img: "/svg/react.svg",
    description:
      "React is the JavaScript library we use to build our user interface. It allows us to create reusable components, making development faster and more maintainable. We use React's component-based architecture to make the application interactive and responsive to user actions, providing a fluid user experience.",
  },
  {
    name: "Material UI",
    link: "https://mui.com/",
    img: "/svg/mui.svg",
    description:
      "Material UI is a React UI library providing pre-built components based on Google's Material Design principles. Using Material UI allows us to create a consistent and accessible user interface rapidly. It ensures a familiar look and feel that is both modern and easy to use, making our application intuitive.",
  },
  {
    name: "Figma",
    link: "https://www.figma.com/",
    img: "/svg/figma.svg",
    description:
      "Figma is our primary design tool for planning the visual and interactive aspects of our application. We used Figma to collaboratively design the user interface and user experience, ensuring a consistent style across the entire application. It is where all visual mockups and interactive prototypes were conceived, and it played a major role in translating design ideas into a functional application.",
  },
  {
    name: "Prisma",
    link: "https://www.prisma.io/",
    img: "/svg/prisma.svg",
    description:
      "Prisma is an Object-Relational Mapper (ORM) that we use to simplify interactions between our application and the database. Prisma provides type safety, auto-generated schemas, and an intuitive way to query data without writing raw SQL. It makes our database operations more efficient and reduces development time.",
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    img: "/svg/typescript.svg",
    description:
      " TypeScript is a superset of JavaScript that adds static typing to enhance the development process. By using TypeScript, we can catch potential errors early and ensure our application is more robust, easier to maintain, and scales efficiently. It provides added safety and structure to our JavaScript codebase.",
  },
  {
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    img: "/svg/html.svg",
    description:
      "HTML is the foundation upon which the structure of our web pages is built. It provides the basic framework for organizing the content of your event management app, including text, images, forms, and other elements. We use HTML to create a semantic and accessible structure for all of our application's views.",
  },
  {
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    img: "/svg/css.svg",
    description:
      "CSS is the language we use to style the visual appearance of our application. It controls everything from layouts and colors to typography and animations. We prioritize a clean, intuitive design, using CSS to ensure the app is not only functional but also visually appealing and consistent across different devices.",
  },
  {
    name: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: "/svg/js.svg",
    description:
      " JavaScript is the primary programming language powering the interactive and dynamic elements of our web-based event management application. We leverage its flexibility to handle user interactions, manipulate data in real-time, and create a smooth, engaging user experience. It works hand-in-hand with React to bring our application to life in your browser.",
  },
  {
    name: "SQL",
    link: "https://www.postgresql.org/",
    img: "/svg/sql.svg",
    description:
      "SQL is the language we use to interact with our database. It allows us to retrieve, update, and manage the data that powers our event management app. We rely on SQL to store all information related to events, users, bookings, and other critical data, with a focus on data integrity and performance.",
  },
  {
    name: "Node.js",
    link: "https://nodejs.org/en/",
    img: "/svg/nodejs.svg",
    description:
      "Node.js is the JavaScript runtime we use to build and run our server-side application. It allows us to use JavaScript on the backend, which provides consistency with our front-end codebase and enhances efficiency of development. Node.js is used for data processing and handling client requests, providing the backbone for our API.",
  },
  {
    name: "Express",
    link: "https://expressjs.com/",
    img: "/svg/express.svg",
    description:
      "Express.js is a lightweight web application framework for Node.js that we use to structure and organize our backend. It simplifies the creation of APIs, manages routing, and handles server-side logic efficiently. It is instrumental in managing the communication between the front-end and database.",
  },
  {
    name: "Postman",
    link: "https://www.postman.com/",
    img: "/svg/postman.svg",
    description:
      "Postman is a tool we use for testing and documenting our APIs. It allows us to send requests to our server, inspect responses, and debug any issues that may arise. Postman is an important part of our testing workflow ensuring reliability and correctness of our event management application's backend.",
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    img: "/svg/git.svg",
    description:
      "Git is a version control system that we use to track changes in our codebase. It allows us to collaborate effectively, manage branches, and revert to previous versions, ensuring the integrity of our development process. Git plays a critical role in our continuous integration and deployment strategy.",
  },
  {
    name: "Github",
    link: "https://github.com",
    img: "/svg/github.svg",
    description:
      "GitHub is a platform we use for hosting our Git repositories. It provides collaborative tools and workflows for code review, issue tracking, and deployment. It serves as our central hub for code management, facilitating both team collaboration and open source contributions.",
  },
];
export default function Resources() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography variant="six" component="h1" sx={{ textAlign: "start", mb:2}}>Resources</Typography>
      {resources.map((resource, i) => {
        return (
          <Paper
            elevation={8}
            key={resource.name}
            sx={{ p: 4, m: 1, width: "80%" }}
          >
            <Stack direction={"row"}>
              <img src={resource.img} alt="" height={"150"} />
              <Stack spacing={2} sx={{ p: 2, flexGrow: 1 }}>
                <Typography variant="two" sx={{ fontWeight: "bold" }}>
                  {resource.name}
                  <br />
                </Typography>
                <Typography variant="one">{resource.description}</Typography>
                <Link href={resource.link} target="_blank" rel="noreferrer">
                  <Tooltip title="Open in new tab">
                    <OpenInNewIcon />
                  </Tooltip>
                </Link>
              </Stack>
            </Stack>
          </Paper>
        );
      })}
    </Box>
  );
}
