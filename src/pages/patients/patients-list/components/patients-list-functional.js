import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../../actions-reducers/patients.actions";
import PatientsListPresentational from "./patients-list-presentational";

const PatientsListFunctional = () => {
	const patients = useSelector((state) => state?.patientsRedux?.patients || [])
	const dispatch = useDispatch()
	console.log("🚀 ~ file: patients-list-functional.js:8 ~ PatientsListFunctional ~ patients:", patients)
	
	useEffect(() => {
		dispatch(getPatients())
	}, [dispatch])
	
	return <PatientsListPresentational />;
};

export default PatientsListFunctional;
