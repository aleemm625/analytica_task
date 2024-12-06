import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#D3D3D3' }, // Light grey
              '&:hover fieldset': { borderColor: '#B0B0B0' }, // Slightly darker grey on hover
              '&.Mui-focused fieldset': { borderColor: '#A9A9A9' }, // Focused grey
            },
            input: { color: '#333' }, // Darker text for better contrast
            label: { color: '#666' }, // Grey label
          }}
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          required
          type="email"
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#D3D3D3' },
              '&:hover fieldset': { borderColor: '#B0B0B0' },
              '&.Mui-focused fieldset': { borderColor: '#A9A9A9' },
            },
            input: { color: '#333' },
            label: { color: '#666' },
          }}
        />
        <TextField
          label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          fullWidth
          required
          multiline
          rows={4}
          margin="normal"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#D3D3D3' },
              '&:hover fieldset': { borderColor: '#B0B0B0' },
              '&.Mui-focused fieldset': { borderColor: '#A9A9A9' },
            },
            input: { color: '#333' },
            label: { color: '#666' },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
      {submitted && (
        <Typography
          variant="body1"
          color="success.main"
          sx={{ marginTop: 2 }}
        >
          Thank you for contacting us!
        </Typography>
      )}
    </Box>
  );
};

export default Contact;
