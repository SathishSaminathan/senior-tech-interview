import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { PAGE_CONSTANTS } from "../../../constants/app-constants";

const theme = createTheme();

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginPresentational = () => {
	const formik = useFormik({
		initialValues: {
		  email: 'foobar@example.com',
		  password: 'foobar',
		},
		validationSchema: validationSchema,
		onSubmit: (values) => handleSubmit(values),
	  });
	
    const handleSubmit = (values) => {
		alert(JSON.stringify(values, null, 2));
		// const data = new FormData(event.currentTarget);
    	// console.log("🚀 ~ file: login-presentational.js:18 ~ handleSubmit ~ event:")
	};

	return (
		<ThemeProvider theme={theme}>
			<Grid container component="main" sx={{ height: "100vh" }}>
				<Grid
					item
					sm={4}
					md={7}
					sx={{
						backgroundImage: "url(https://source.unsplash.com/random)",
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
						<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component="h1" variant="h5">
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
		</ThemeProvider>
	);
};

export default LoginPresentational