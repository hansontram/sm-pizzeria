import { Box, Typography,Container } from "@mui/material";

export default function MainContainer({ title, children }) {
  return (
    <Container>
      <Typography variant="h1" component="div">
        {title}
      </Typography>
      {children}
    </Container>
  );
}
