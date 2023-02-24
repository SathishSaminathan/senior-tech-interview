import Axios from 'axios';
import { APP_VARIABLES } from 'constants/app-constants';
import ApiError from './api-error';
import ERRORS from './errorConstants';
import { API_BASE_URL } from './api-url';

const setupInterceptors = (store) => {
	Axios.defaults.baseURL = API_BASE_URL;
	Axios.defaults.headers.post['Content-Type'] = 'application/json';
	Axios.defaults.validateStatus = () => true;
	Axios.interceptors.request.use(
		(config) => {
			// const token = localStorage.getItem(APP_VARIABLES.ACCESS_TOKEN);
			return config;
		},
		(error) => Promise.reject(error)
	);
	Axios.interceptors.response.use(
		(response) => {
			// Process response body
			if (response.status && parseInt(response.status, 0) > 205) {
				const resMessage = response?.data?.response_message || 'Something went wrong';
				console.log("🚀 ~ file: interceptors.js:23 ~ setupInterceptors ~ resMessage:", resMessage)

				switch (response.status) {
					case 500:
						throw new ApiError(ERRORS.SERVER_ERROR);
					case 401:
						localStorage.removeItem(APP_VARIABLES.ACCESS_TOKEN);
						throw new ApiError(ERRORS.UNAUTHORISED_ERROR, response.data.error.message);
					case 403:
						localStorage.removeItem(APP_VARIABLES.ACCESS_TOKEN);
						throw new ApiError(
							ERRORS.FORBIDDEN_ERROR,
							response && response.data && response.data.Message ? response.data.Message : 'Network Error'
						);
					case 406:
						throw new ApiError(ERRORS.UNAUTHORISED_ERROR, response.data.error.message);
					case 400:
						throw new ApiError(ERRORS.UNAUTHORISED_ERROR, response?.data?.response_message);
					case 404:
						throw new ApiError(ERRORS.CLIENT_ERROR);
					default:
						throw new ApiError(ERRORS.CLIENT_ERROR);
				}
			} else {
				return response;
			}
		},
		(error) => {
			Promise.reject(error);
		}
	);
};

export default setupInterceptors;
