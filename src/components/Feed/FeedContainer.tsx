import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/feed.css';
import { Card, Avatar, CardContent, Typography, CardMedia, Grid } from '@mui/material';

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formatter = new Intl.DateTimeFormat('es-ES', options);
  return formatter.format(date);
};


interface User {
  id: number;
  name: string;
  lastName: string;
  img_profile: string;
  nick_name: string | null;
  cover_image: string | null;
}

interface Post {
  id: number;
  createdAt: string;
  mult: string[];
  description: string;
  isLiked: boolean;
  likesCount: number;
  commentsCount: number;
  user: User;
  edited: boolean;
  type: string;
}

const postType = (type: String) => {
  const word = type === 'blog' ? 'Blogs' : 'Publicaciones';
  return word; 
};

const FeedContainer: React.FC = () => {
  const [feedData, setFeedData] = useState<Post[]>([]);
  
  useEffect(() => {
    axios.get('https://api-perrfecto.alaxatechtesting.lat/api/feed/all')
      .then((response) => {
        if (response.data.ok) {
          setFeedData(response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching feed data:', error);
      });
  }, []);

  return (
    <div>
        {feedData.map((post) => (
              <CardContent key={post.id +'_'+ post.type}>
                  <Card >
                    <CardContent>
                      <Grid container>
                        <Grid item xs={1}>
                          <Avatar alt="Profile" src={post.user.img_profile} />
                        </Grid>
                        <Grid item xs={11}>
                          <Typography variant="h6" gutterBottom>
                            {post.user.name}
                          </Typography>
                          <Typography  component="div" sx={{fontSize:'0.7rem'}} variant="subtitle1" gutterBottom>
                          <React.Fragment>
                          {formatDate(new Date(post.createdAt))}  <span style={{ margin: '0 8px', fontSize: '1.2rem' }}>·</span> <span style={{ fontSize: '1.2rem', color:'#64dd17' }}>{postType(post.type)}</span>

                          </React.Fragment>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Typography variant="body1">
                        {post.description}
                      </Typography>
                      <CardMedia
                        component="img"
                        height="200"
                        image={post.mult[0]}
                        alt="Post Image"
                      />
                    </CardContent>
                  </Card>
              </CardContent>
        ))}
    </div>
  );
};

export default FeedContainer;
