import React from 'react';
import FeedContainer from './FeedContainer';
import Navbar from '../Layouts/NavbarLayout';
import Drawer from '../Layouts/DrawerLayout';
import { Grid } from '@mui/material';

const Feed: React.FC = () => {
  return (
    <div>
        <Grid container>
            <Grid item xs={3}>
                <Drawer />
            </Grid>
            <Grid item xs={9}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12}>
                    <FeedContainer />       
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
};

export default Feed;
