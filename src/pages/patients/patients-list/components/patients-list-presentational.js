import React from "react";
import {
	Box,
	Table,
	Stack,
	Avatar,
	TableRow,
	TableBody,
	TableCell,
	Typography,
	TableContainer,
	IconButton,
	TableHead,
	Modal,
	Fade,
	Backdrop,
} from "@mui/material";
import { Icon } from "@iconify/react";

const TABLE_HEAD = [
	{ id: "firstName", label: "Name", alignRight: false },
	{ id: "gender", label: "Gender", alignRight: false },
	{ id: "dateOfBirth", label: "DOB", alignRight: false },
	{ id: "addressLine1", label: "Address", alignRight: false },
	{ id: "postalCode", label: "Postal", alignRight: false },
];

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	boxShadow: 24,
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
					<Typography id="transition-modal-title" variant="h6" component="h2">
						Patient Detail
					</Typography>
					{Object.keys(selectedPatient || {})?.map(
						(key) =>
							dataMapping?.[key] && (
								<Stack direction="row" spacing={2} sx={{ pt: 2 }}>
									<Typography variant="subtitle2" noWrap>
										{dataMapping?.[key]}:
									</Typography>
									<Typography variant="subtitle2" noWrap>
										{selectedPatient[key]}
									</Typography>
								</Stack>
							)
					)}
				</Box>
			</Fade>
		</Modal>
	);
};

const PatientsListPresentational = ({
	patients,
	patientViewModal,
	togglePatientViewModal,
	selectedPatient,
	setSelectedPatient,
}) => {
	return (
		<>
			<TableContainer sx={{ minWidth: 800 }}>
				<Table>
					<TableHead>
						<TableRow>
							{TABLE_HEAD.map((headCell) => (
								<TableCell
									key={headCell.id}
									align={headCell.alignRight ? "right" : "left"}
								>
									{headCell.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{patients.map((row) => {
							const {
								id,
								firstName,
								lastName,
								gender,
								dateOfBirth,
								addressLine1,
								addressLine2,
								postalCode,
								avatarUrl,
							} = row;
							return (
								<TableRow hover key={id} tabIndex={-1} role="checkbox">
									<TableCell component="th" scope="row">
										<Stack direction="row" alignItems="center" spacing={2}>
											<Avatar alt={firstName} src={avatarUrl} />
											<Typography variant="subtitle2" noWrap>
												{`${firstName} ${lastName}`}
											</Typography>
										</Stack>
									</TableCell>
									<TableCell align="left">{gender}</TableCell>
									<TableCell align="left">{dateOfBirth}</TableCell>
									<TableCell align="left">{`${addressLine1} ${addressLine2}`}</TableCell>
									<TableCell align="left">{postalCode}</TableCell>
									<TableCell align="right">
										<IconButton
											size="large"
											color="inherit"
											onClick={() => {
												setSelectedPatient(row);
												togglePatientViewModal();
											}}
										>
											<Box
												component={Icon}
												icon={"eva:menu-2-fill"}
												sx={{ width: 20, height: 20 }}
											/>
										</IconButton>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<PatientViewModal
				{...{ patientViewModal, togglePatientViewModal, selectedPatient }}
			/>
		</>
	);
};

export default PatientsListPresentational;
