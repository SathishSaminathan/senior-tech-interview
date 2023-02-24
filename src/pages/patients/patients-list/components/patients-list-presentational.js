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
} from "@mui/material";
import { Icon } from "@iconify/react";
import PatientViewModal from "./patient-view-modal";

const TABLE_HEAD = [
	{ id: "firstName", label: "Name", alignRight: false },
	{ id: "gender", label: "Gender", alignRight: false },
	{ id: "dateOfBirth", label: "DOB", alignRight: false },
	{ id: "addressLine1", label: "Address", alignRight: false },
	{ id: "postalCode", label: "Postal", alignRight: false },
];

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
												setSelectedPatient(row?.patientId);
												togglePatientViewModal();
											}}
										>
											<Box
												component={Icon}
												icon={"eva:eye-outline"}
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
