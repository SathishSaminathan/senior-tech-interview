import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { APP_VARIABLES } from "constants/app-constants";
import LoginPresentational from "./login-presentational";

const validationSchema = yup.object({
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	password: yup
		.string("Enter your password")
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
});

const LoginFunctional = () => {
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			email: "sathish.saminathan@flyerssoft.com",
			password: "Test@1234",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => handleLogin(values),
	});
	const navigate = useNavigate();

	const handleLogin = (values) => {
		setLoading(true);
		const clear = setTimeout(() => {
			setLoading(false);
			clearTimeout(clear);
			localStorage.setItem(APP_VARIABLES.ACCESS_TOKEN, "DUMMY_TEXT_FOR_TOKEN");
			navigate("/");
		}, 1500);
	};

	return <LoginPresentational {...{ formik, loading, handleLogin }} />;
};

export default LoginFunctional;
