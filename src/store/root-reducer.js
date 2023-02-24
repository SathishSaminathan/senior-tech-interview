import { combineReducers } from 'redux';
import patientsReducer from 'pages/patients/actions-reducers/patients.reducer';

const rootReducer = combineReducers({
	patientsRedux: patientsReducer,
});

export default rootReducer;
