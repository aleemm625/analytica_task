import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          InnoHub Solutions
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Solutions</Button>
        <Button color="inherit">Insights</Button>
        <Button color="inherit">Contact</Button>
        <Button variant="outlined" color="inherit">Join Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
