import React, { useState } from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import LoginPresentational from './login-presentational'

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
			email: "foobar@example.com",
			password: "foobar",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => handleLogin(values),
	});

	const handleLogin = (values) => {
        setLoading(true);
		// alert(JSON.stringify(values, null, 2));
        const clear = setTimeout(() => {
            setLoading(false)
            clearTimeout(clear);
        }, 1500);
		// const data = new FormData(event.currentTarget);
		// console.log("🚀 ~ file: login-presentational.js:18 ~ handleSubmit ~ event:")
	};

    return (
        <LoginPresentational {...{ formik, loading, handleLogin }}/>
    )
}

export default LoginFunctional