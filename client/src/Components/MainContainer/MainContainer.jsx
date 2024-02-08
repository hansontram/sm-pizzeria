import { Box, Typography } from "@mui/material";

export default function MainContainer({ title, children }) {
  return (
    <Box>
      <Typography variant="h1" component="div">
        {title}
      </Typography>
      {children}
    </Box>
  );
}
