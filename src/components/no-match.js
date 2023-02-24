import React from 'react';
import { Grid, Typography } from '@mui/material';
import LottieFile from 'assets/lottie-files';
import LottieComponent from './lottie-component';

const NoMatch = () => (
	<Grid container component="main" sx={{ height: "100vh" }}>
		<Grid
			item
			sm={12}
			md={12}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<LottieComponent width="30%" file={LottieFile.UnderConstruction} />
		</Grid>
		<Grid
			item
			sm={12}
			md={12}
		>
			<Typography component="h1" variant="h4" style={{ textAlign: 'center', fontSize: '3rem' }}>Page is Under construction</Typography>
		</Grid>
	</Grid>
);

export default NoMatch;
