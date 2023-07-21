import React, {Suspense} from 'react';
import Drawer from '../Layouts/DrawerLayout';
import { Grid } from '@mui/material';
const ProfileContainerLazy = React.lazy(() => import('./ProfileContainer'));

const Profile: React.FC = () => {
  return (
    <div>
        <Grid container>
            <Grid item xs={3}>
                <Drawer />
            </Grid>
            <Grid item xs={9}>
                <Grid item xs={12}>
                    <Suspense fallback={<div>Cargando</div>}>
                        <ProfileContainerLazy />
                    </Suspense>          
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
};

export default Profile;
