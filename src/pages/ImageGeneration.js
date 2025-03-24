import React, { useState } from 'react';
import {
  Box,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardActions,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Container,
  Alert,
  IconButton,
  Button,
  Snackbar,
} from '@mui/material';
import {
  Download as DownloadIcon,
  ContentCopy as ContentCopyIcon,
} from '@mui/icons-material';

const ImageGeneration = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('512x512');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [images, setImages] = useState([]);
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  const handleGenerate = async () => {
    if (!prompt) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      if (!apiKey) {
        setError('API key not configured');
        return;
      }

      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt,
          n: 4,
          size,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Failed to generate images');
      }

      setImages(data.data.map(img => ({
        url: img.url,
        timestamp: new Date().toISOString(),
      })));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (imageUrl, index) => {
    try {
      setSnackbar({ open: true, message: 'Starting download...' });
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = imageUrl;  // Direct URL to the image
      link.target = '_blank'; // Open in new tab
      
      // Generate a filename
      const filename = `ai-generated-${Date.now()}-${index + 1}.png`;
      link.download = filename;
      
      // Append to document, click, and cleanup
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSnackbar({ open: true, message: 'Download started!' });
    } catch (error) {
      console.error('Download error:', error);
      setSnackbar({ open: true, message: 'Failed to download image. Try right-click and Save Image As...' });
    }
  };

  // Alternative download method if the above doesn't work
  const handleDownloadAlternative = (imageUrl, index) => {
    // Open image in new tab
    window.open(imageUrl, '_blank');
    setSnackbar({ 
      open: true, 
      message: 'Image opened in new tab. Right-click and select "Save Image As..." to download.' 
    });
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: '' });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: 'white', mb: 4 }}
        >
          AI Image Generation
        </Typography>

        <Card sx={{ 
          p: 3, 
          mb: 4, 
          background: 'linear-gradient(145deg, #1a1f2c 0%, #0d1117 100%)',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <TextField
              fullWidth
              label="Enter your prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255,255,255,0.23)',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(255,255,255,0.7)',
                },
              }}
            />
            
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Size</InputLabel>
              <Select
                value={size}
                label="Size"
                onChange={(e) => setSize(e.target.value)}
                sx={{ color: 'white' }}
              >
                <MenuItem value="256x256">256x256</MenuItem>
                <MenuItem value="512x512">512x512</MenuItem>
                <MenuItem value="1024x1024">1024x1024</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="contained"
              onClick={handleGenerate}
              disabled={loading}
              sx={{
                background: 'linear-gradient(45deg, #4CAF50 30%, #45a049 90%)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #45a049 30%, #4CAF50 90%)',
                }
              }}
            >
              {loading ? 'Generating...' : 'Generate Images'}
            </Button>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Card>

        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Card sx={{ 
                background: 'linear-gradient(145deg, #1a1f2c 0%, #0d1117 100%)',
                border: '1px solid rgba(255,255,255,0.1)',
                position: 'relative',
              }}>
                <CardMedia
                  component="img"
                  image={image.url}
                  alt={`Generated image ${index + 1}`}
                  sx={{ 
                    height: 300, 
                    objectFit: 'contain',
                    backgroundColor: '#0d1117',
                    cursor: 'pointer' // Add pointer cursor
                  }}
                  onClick={() => handleDownloadAlternative(image.url, index)} // Add click handler
                />
                <CardActions sx={{ 
                  justifyContent: 'space-between', 
                  padding: 2,
                  borderTop: '1px solid rgba(255,255,255,0.1)'
                }}>
                  <Typography 
                    variant="caption" 
                    sx={{ color: 'rgba(255,255,255,0.7)' }}
                  >
                    Click image to open in new tab
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                      onClick={() => handleDownload(image.url, index)}
                      sx={{ 
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        }
                      }}
                      title="Download Image"
                    >
                      <DownloadIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleCopyPrompt}
                      sx={{ 
                        color: 'white',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        }
                      }}
                      title="Copy Prompt"
                    >
                      <ContentCopyIcon />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000} // Increased duration for better readability
        onClose={handleCloseSnackbar}
        message={snackbar.message}
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: '#1a1f2c',
            border: '1px solid rgba(255,255,255,0.1)',
          }
        }}
      />
    </Container>
  );
};

export default ImageGeneration; 