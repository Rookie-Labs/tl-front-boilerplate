import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

const Main = () => {
  return (
    <Container maxWidth="lg">
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        {/* Image */}
        <Box>
          <Typography variant="h1">🚀 TL 🤝 SG 🚀</Typography>
        </Box>
        {/* Statement */}
        <Box />
        {/* Support Statement */}
        <Box />
      </Box>
    </Container>
  );
};

export default Main;
