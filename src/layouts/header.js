import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import { alpha } from "@mui/material/styles";

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

export function bgBlur(props) {
	const color = props?.color || "#000000";
	const blur = props?.blur || 6;
	const opacity = props?.opacity || 0.8;
	const imgUrl = props?.imgUrl;

	if (imgUrl) {
		return {
			position: "relative",
			backgroundImage: `url(${imgUrl})`,
			"&:before": {
				position: "absolute",
				top: 0,
				left: 0,
				zIndex: 9,
				content: '""',
				width: "100%",
				height: "100%",
				backdropFilter: `blur(${blur}px)`,
				WebkitBackdropFilter: `blur(${blur}px)`,
				backgroundColor: alpha(color, opacity),
			},
		};
	}

	return {
		backdropFilter: `blur(${blur}px)`,
		WebkitBackdropFilter: `blur(${blur}px)`,
		backgroundColor: alpha(color, opacity),
	};
}

const StyledRoot = styled(AppBar)(({ theme }) => ({
	...bgBlur({ color: theme.palette.background.default }),
	boxShadow: "none",
	[theme.breakpoints.up("lg")]: {
		width: `calc(100% - ${NAV_WIDTH + 1}px)`,
	},
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	minHeight: HEADER_MOBILE,
	[theme.breakpoints.up("lg")]: {
		minHeight: HEADER_DESKTOP,
		padding: theme.spacing(0, 5),
	},
}));

export default function Header({ onOpenNav }) {
	return (
		<StyledRoot>
			<StyledToolbar>
				<IconButton
					onClick={onOpenNav}
					sx={{
						mr: 1,
						color: "text.primary",
						display: { lg: "none" },
					}}
				>
					<Box
						component={Icon}
						icon={"eva:menu-2-fill"}
						sx={{ width: 20, height: 20 }}
					/>
				</IconButton>
				<Box sx={{ flexGrow: 1 }} />
			</StyledToolbar>
		</StyledRoot>
	);
}
