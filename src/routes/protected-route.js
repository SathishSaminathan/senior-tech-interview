import React from "react";
import { Navigate } from "react-router-dom";
import { APP_VARIABLES } from "constants/app-constants";

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
	// const authCode = localStorage.getItem(APP_VARIABLES.ACCESS_TOKEN);

	// if (!authCode) {
	// 	return <Navigate to={`${redirectPath}`} replace />;
	// }

	return children;
};

export default ProtectedRoute;
