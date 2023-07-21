import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import '../Styles/profile.css';
import { API_URL } from '../../config';
import axios from 'axios';

interface Profile {
  id: number;
  count_publications: number;
  count_friends: number;
  nick_name: string;
  biography: string;
  dogs: string[];
  img_profile: string[];
  cover_image: boolean;
  type: string;
}

const ProfileContainer: React.FC = () => {
  const [profileData, setProfileData] = useState<Profile[]>([]);
  const token = localStorage.getItem('authToken');
  console.log(token);

  useEffect(() => {
    if (token) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      axios.get({API_URL}+'/user/profile', config)
        .then((response) => {
          if (response.data.ok) {
            setProfileData(response.data.data);
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
        <Grid container>
        {profileData.map((profile) => (
              <div key={profile.id}>

                <Typography>{profile.nick_name}</Typography>
              </div>
        ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProfileContainer;
