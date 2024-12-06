import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(/path-to-your-image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Transform Your Ideas into Reality with InnoHub
      </Typography>
      <Typography variant="h5" gutterBottom>
        Your Partner in Innovation and Growth
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </Box>
  );
};

export default Hero;
