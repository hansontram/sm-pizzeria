import {Typography,Container } from "@mui/material";

export default function MainContainer({ title, children }) {
  return (
    <Container>
      <Typography variant="h2" component="div" sx={{my:5}}>
        {title}
      </Typography>
      {children}
    </Container>
  );
}
