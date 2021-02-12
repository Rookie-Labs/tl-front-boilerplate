import { Box, IconButton, Link, Typography } from '@material-ui/core';
import { Brightness4 } from '@material-ui/icons';
import React from 'react';

const Navbar = () => {
  return (
    <Box
      width="100%"
      p="1rem"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="primary.main"
    >
      <Box p="1rem">
        <Link href="http://localhost:3000" color="secondary">
          <Typography variant="body1">React Web App Boilerplate</Typography>
        </Link>
      </Box>
      <IconButton className="nav__toggle">
        <Brightness4 />
      </IconButton>
    </Box>
  );
};

export default Navbar;
