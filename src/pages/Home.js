import React from 'react';
import { 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Container 
} from '@mui/material';
import { 
  Image, 
  Description, 
  Mic, 
  Dashboard 
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FeatureCard = ({ title, description, icon, path }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(145deg, #1a1f2c 0%, #0d1117 100%)',
          borderRadius: 4,
          border: '1px solid rgba(255,255,255,0.1)',
          '&:hover': {
            border: '1px solid rgba(255,255,255,0.2)',
          }
        }}
      >
        <CardContent sx={{ flexGrow: 1, color: 'white' }}>
          <Box sx={{ mb: 2, color: '#4CAF50' }}>
            {icon}
          </Box>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255,255,255,0.7)' }}>
            {description}
          </Typography>
          <Button 
            variant="contained" 
            onClick={() => navigate(path)}
            sx={{
              background: 'linear-gradient(45deg, #4CAF50 30%, #45a049 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #45a049 30%, #4CAF50 90%)',
              }
            }}
          >
            Get Started
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Home = () => {
  const features = [
    {
      title: 'Image Generation',
      description: 'Create stunning images using advanced AI models. Transform your ideas into visual reality.',
      icon: <Image fontSize="large" />,
      path: '/image-ai'
    },
    {
      title: 'Document Processing',
      description: 'Extract, analyze, and process information from documents with AI-powered tools.',
      icon: <Description fontSize="large" />,
      path: '/document-ai'
    },
    {
      title: 'Voice Assistant',
      description: 'Interact with your automation systems using natural voice commands.',
      icon: <Mic fontSize="large" />,
      path: '/voice-assistant'
    },
    {
      title: 'Automation Dashboard',
      description: 'Monitor and manage all your AI automation tasks from a central dashboard.',
      icon: <Dashboard fontSize="large" />,
      path: '/automation'
    }
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ 
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 1
            }}
          >
            Welcome to AI Automation Hub
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
              mb: 6
            }}
          >
            Empower your workflow with advanced AI automation tools
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={6} key={feature.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 