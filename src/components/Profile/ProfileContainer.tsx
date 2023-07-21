import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Avatar, CardMedia } from '@mui/material';
import '../Styles/profile.css';
import { API_URL, URL } from '../../config';
import axios from 'axios';

interface Dogs {
  id: number;
  img_profile: string;
  name: string;
  breed: string;
  gender: string;
  dogAge: string | null;
}
interface Profile {
  id: number;
  email: string;
  img_profile: string;
  cover_image: string;
  nick_name: string;
  count_publications: number,
  count_friends: number,
  biography: string;
}


const urlImage =  (str: string)  => {
  const stringParse = JSON.parse(str);

  if(stringParse && stringParse.length > 0){
      const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
      const isURLValid = urlPattern.test(stringParse[0]);
      return isURLValid ? stringParse[0] : URL + stringParse[0];
  }

  return null;
};

const ProfileContainer: React.FC = () => {
  const [profileData, setProfileData] = useState<Profile | null>(null); 
  const [dogsData, setDogsData] =  useState<Dogs[]>([]); 

  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (token) {
      const config = {
        headers: {
          'x-token': token
        },
      };
      axios.get(API_URL+'/user/profile', config)
        .then((response) => {
          if (response.data.ok) {
            setProfileData(response.data.data);
            setDogsData(response.data.data.dogs);
          }
        })
        .catch((error) => {
          console.error('Error fetching profile data:', error);
        });
    }
  }, [token]);
  return (
    <div className='content-profile'>
      <Container>
          {profileData ? (
            <Grid container>
                  <Grid item xs={2}>
                        <Avatar alt="Background" src={urlImage(profileData.img_profile)} className='avatar-background' />
                        <CardMedia alt="Overlay" component="img" src={urlImage(profileData.img_profile)}  className='avatar-overlay' />
                  </Grid>
                  <Grid item xs={10}>
                    <div className='biography'>
                        <Typography variant="h6" gutterBottom>{profileData.nick_name}</Typography>
                        
                        <Typography variant="body1" gutterBottom>Publicaciones <span className='bold'>{profileData.count_publications}</span>   Amigos <span className='bold'>{profileData.count_friends}</span> </Typography>  
                        <Typography variant="body1" gutterBottom> {profileData.biography}</Typography>  

                    </div>
                  </Grid>
            </Grid>
          ) : (
            <div>Loading...</div>
          )}
      </Container>
    </div>
  );
};

export default ProfileContainer;
