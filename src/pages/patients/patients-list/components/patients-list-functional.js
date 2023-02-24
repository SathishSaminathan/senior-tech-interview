import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../../actions-reducers/patients.actions";
import PatientsListPresentational from "./patients-list-presentational";

const PatientsListFunctional = () => {
	const [patientViewModal, setPatientViewModal] = useState(false);
	const [selectedPatient, setSelectedPatient] = useState(null)
	const togglePatientViewModal = () => setPatientViewModal(!patientViewModal);
	const patients = useSelector((state) => state?.patientsRedux?.patients || []);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPatients());
	}, [dispatch]);
	
	useEffect(() => {
		!patientViewModal && setSelectedPatient(null);
	}, [patientViewModal]);

	return <PatientsListPresentational {...{ patients, patientViewModal, togglePatientViewModal, selectedPatient, setSelectedPatient }} />;
};

export default PatientsListFunctional;
