import { API_STATUS } from 'globals/api-constants';

export const createAction = (module) => ({
	REQUEST: `${module}_REQUEST`,
	LOADING: `${module}_LOADING`,
	SUCCESS: `${module}_SUCCESS`,
	ERROR: `${module}_ERROR`,
	RESET: `${module}_RESET`,
});

export const checkStatus = (value = '', statusValue = API_STATUS.SUCCESS) => value === statusValue;
