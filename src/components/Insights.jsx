import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress } from '@mui/material';

const Insights = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  return (
    <Grid container spacing={4} sx={{ padding: 4 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {article.body.substring(0, 100)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default Insights;
