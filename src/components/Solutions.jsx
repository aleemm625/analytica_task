import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const solutions = [
  { title: 'Custom Software Development', description: 'Tailored solutions for your needs.' },
  { title: 'AI & Machine Learning', description: 'Harness the power of AI.' },
  { title: 'Cloud Integration', description: 'Seamless cloud services.' },
  { title: 'IoT Solutions', description: 'Smart device connectivity.' },
];

const Solutions = () => {
  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {solutions.map((solution, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {solution.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {solution.description}
              </Typography>
              <Button variant="text">Learn More</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Solutions;
