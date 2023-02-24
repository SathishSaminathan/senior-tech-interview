import { GET_PATIENTS } from "./patients.types";

const INITIAL_STATE = {
	patients: [],
};

const patientsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_PATIENTS:
			return {
				...state,
				patients: action.patients,
			};
		default:
			return state;
	}
};

export default patientsReducer;
