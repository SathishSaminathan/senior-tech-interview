import axios from "axios";
import { API_URL } from "globals/api-url";
import { GET_PATIENTS } from "./patients.types";

export const getPatients = () => async (dispatch) => {
	const { data } = await axios.get(API_URL.GET_PATIENTS);
	await dispatch({
		type: GET_PATIENTS,
		patients: data,
	});
};
