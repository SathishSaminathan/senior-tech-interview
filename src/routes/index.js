import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom';
import DashboardLayout from 'layouts/dashboard-layout';
import NoMatch from 'components/no-match';
import Login from 'pages/login';
import PatientsList from 'pages/patients/patients-list';
import ProtectedRoute from './protected-route';

const Routes = () => (
	<Switch>
		<Route element={<DashboardLayout />}>
			<Route
				exact
				path={'/'}
				element={
					<ProtectedRoute>
						<PatientsList />
					</ProtectedRoute>
				}
			/>
			<Route exact path="*" element={<NoMatch />} />
		</Route>
		<Route exact path="/login" element={<Login />} />
	</Switch>
);

export default Routes