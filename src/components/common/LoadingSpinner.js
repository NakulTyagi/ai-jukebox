import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingSpinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'white'
      }}
    >
      <CircularProgress 
        size={60}
        thickness={4}
        sx={{
          color: '#4CAF50',
          mb: 2
        }}
      />
      <Typography variant="h6">
        Loading...
      </Typography>
    </Box>
  );
};

export default LoadingSpinner; 