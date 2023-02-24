import React, { useEffect, useState } from "react";
import {
	Box,
	Typography,
	Modal,
	Fade,
	Backdrop,
	Grid
} from "@mui/material";
import axios from "axios";
import { API_URL } from "globals/api-url";
import { PAGE_CONSTANTS } from "constants/app-constants";
import LottieComponent from "components/lottie-component";
import LottieFile from "assets/lottie-files";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
	borderRadius: 3,
	p: 4,
};

const dataMapping = {
	firstName: "First Name",
	lastName: "Last Nameen",
	gender: "Gender",
	dateOfBirth: "DOB",
	addressLine1: "Address Line 1",
	addressLine2: "Address Line 2",
	city: "City",
	state: "State",
	postalCode: "Postal Code",
};

const PatientViewModal = ({
	patientViewModal,
	togglePatientViewModal,
	selectedPatient,
}) => {
	const [patientDetails, setPatientDetails] = useState({
		loading: true,
		data: null,
	});

	const getPatientDetails = async (patientId) => {
		setPatientDetails({
			loading: true,
			data: null,
		});
		try {
			const { data = {} } = await axios.get(
				`${API_URL.GET_PATIENT}/${patientId}`
			);
			setPatientDetails({
				loading: false,
				data,
			});
		} catch (err) {
			setPatientDetails({
				loading: false,
				data: null,
			});
		}
	};

	useEffect(() => {
		selectedPatient && getPatientDetails(selectedPatient);
	}, [selectedPatient]);

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			open={patientViewModal}
			onClose={togglePatientViewModal}
			closeAfterTransition
			slots={{ backdrop: Backdrop }}
			slotProps={{
				backdrop: {
					timeout: 500,
				},
			}}
		>
			<Fade in={patientViewModal}>
				<Box sx={style}>
					{patientDetails?.loading ? (
						<Grid container component="main">
							<Grid
								item
								sm={12}
								md={12}
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									height: 320,
									width: 320
								}}>
								<LottieComponent width="50%" height="50%" file={LottieFile.HeartLoading} />
							</Grid>
						</Grid>
					) : (
						<>
							<Typography
								id="transition-modal-title"
								variant="h6"
								component="h2"
							>
								{PAGE_CONSTANTS.PATIENT_DETAIL_PAGE.PATIENT_DETAIL}
							</Typography>
							{Object.keys(patientDetails?.data || {})?.map(
								(key) =>
									dataMapping?.[key] && (
										<Grid container key={key} spacing={2} sx={{ pt: 2 }}>
											<Grid item xs={5} sm={5} md={5}>
												<Typography variant="subtitle2" noWrap>
													{dataMapping?.[key] || ""}:
												</Typography>
											</Grid>
											<Grid item xs={1} sm={1} md={1}>
												:
											</Grid>
											<Grid item xs={6} sm={6} md={6}>
												<Typography variant="subtitle2" noWrap>
													{patientDetails?.data?.[key] || ""}
												</Typography>
											</Grid>
										</Grid>
									)
							)}
						</>
					)}
				</Box>
			</Fade>
		</Modal>
	);
};

export default PatientViewModal