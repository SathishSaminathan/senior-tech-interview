import Button from '@mui/lab/LoadingButton';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PAGE_CONSTANTS } from "../../../constants/app-constants";

const LoginPresentational = ({ formik, loading }) => (
	<Grid container component="main" sx={{ height: "100vh" }}>
		<Grid
			item
			sm={4}
			md={7}
			sx={{
				backgroundImage: "url(https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		/>
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
			<Box
				sx={{
					my: 8,
					mx: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<img
					alt="logo"
					style={{ width: "60%" }}
					src="https://www.rxlightning.com/static/media/rx-logo.c7ccb7ae.png"
				/>
				<Typography component="h1" variant="h4">
					{PAGE_CONSTANTS.LOGIN.SIGN_IN}
				</Typography>
				<Box
					component="form"
					noValidate
					sx={{ mt: 1 }}
					onSubmit={formik.handleSubmit}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={formik.values.password}
						onChange={formik.handleChange}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label={PAGE_CONSTANTS.LOGIN.REMEMBER_ME}
					/>
					<Button
						loading={loading}
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						{PAGE_CONSTANTS.LOGIN.SIGN_IN}
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								{PAGE_CONSTANTS.LOGIN.FORGOT_PASSWORD}
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{PAGE_CONSTANTS.LOGIN.DONT_HAVE_ACCOUNT}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Grid>
	</Grid>
);

export default LoginPresentational;
