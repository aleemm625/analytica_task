import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
      <Typography variant="body2" sx={{ color: 'black' }}>© 2024 InnoHub Solutions. All rights reserved.</Typography>
      <Box>
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <Twitter />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
