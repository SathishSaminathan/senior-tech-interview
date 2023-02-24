import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/lab/LoadingButton";
import { Box, Link, Drawer, Typography, Avatar } from "@mui/material";
import { StyledScrollbar } from "layouts/scrollbar";
import NavSection from "./nav-section";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APP_VARIABLES } from "constants/app-constants";

const NAV_WIDTH = 280;

const MENUS = [
	{
		title: "Patients",
		path: "/",
	},
	{
		title: "Master",
		path: "/master",
	},
];

const account = {
	displayName: "Sathish Saminathan",
	email: "sathish.saminathan@flyerssoft.com",
	photoURL: "/assets/images/avatars/avatar_default.jpg",
};

const StyledAccount = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(2, 2.5),
	borderRadius: Number(theme.shape.borderRadius) * 1.5,
	backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

const Nav = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogout = () => {
		setLoading(true);
		const clear = setTimeout(() => {
			setLoading(false);
			clearTimeout(clear);
			localStorage.removeItem(APP_VARIABLES.ACCESS_TOKEN);
			navigate("/login");
		}, 1500);
	};

	const renderContent = (
		<StyledScrollbar
			sx={{
				height: 1,
			}}
		>
			<Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
				{/* <Logo /> */}
			</Box>
			<Box sx={{ mb: 5, mx: 2.5 }}>
				<Link underline="none">
					<StyledAccount>
						<Avatar src={account.photoURL} alt="photoURL" />
						<Box sx={{ ml: 2 }}>
							<Typography variant="subtitle2" sx={{ color: "text.primary" }}>
								{account.displayName}
							</Typography>
							<Typography variant="body2" sx={{ color: "text.secondary" }}>
								{account.role}
							</Typography>
						</Box>
					</StyledAccount>
				</Link>
			</Box>
			<NavSection data={MENUS} />
			<Box sx={{ flexGrow: 1 }} />
			<Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 3 }}>
				<Button
					loading={loading}
					style={{ width: "100% " }}
					onClick={handleLogout}
					variant="contained"
				>
					Logout
				</Button>
			</Box>
		</StyledScrollbar>
	);

	return (
		<Box
			component="nav"
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAV_WIDTH },
			}}
		>
			<Drawer
				open
				variant="permanent"
				PaperProps={{
					sx: {
						width: NAV_WIDTH,
						bgcolor: "background.default",
						borderRightStyle: "dashed",
					},
				}}
			>
				{renderContent}
			</Drawer>
		</Box>
	);
};

export default Nav;
