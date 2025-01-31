import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Link,
  Stack 
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function AboutCard({ info }) {
  return (
    <Card elevation={6} sx={{ minWidth: 345, maxWidth: 345, margin: 2 }}>
      <Stack spacing={1 } sx={{ p: 2,pt: 2 }}>
        <Typography variant="three" sx={{ fontWeight: "600"}}>{info.name}</Typography>
        <Typography variant="two" color="green">
          {info.role}
        </Typography>
      </Stack>
      <CardMedia
        component="img"
        height="330"
        image={info.img}
        alt="green iguana"
      />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Link
          href={info.githubLink}
          underline="none"
          target="_blank"
          rel="noreferrer"
          sx={{ color: "black", ":hover": { textDecoration: "underline" } }}
        >
          <Typography
            gutterBottom
            variant="one"
            component="div"
            sx={{
              display: "inline-flex",
              p: 0.8,
              pl: 1,
              pr: 1,
              borderRadius: 5,
              alignItems: "center",
              gap: 0.5,
              bgcolor: "#EAEAEA",
            }}
          >
            <GitHubIcon color="black" />
            {info.github}
          </Typography>
        </Link>
        <Typography variant="two" color="text.secondary" sx={{ pl: 1 }}>
          {info.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
