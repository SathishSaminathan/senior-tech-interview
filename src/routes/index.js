import React from 'react'
import { Route, Routes as Switch } from 'react-router-dom';
import Login from '../pages/login';
import PatientsList from '../pages/patients/patients-list';

const Routes = () => {
	return (
		<div
			className="app_container"
			style={
				{
					// overflowY: 'auto',
					// overflowX: 'hidden',
					// minHeight: '100vh',
				}
			}>
			<Switch>
				{/* <Route element={<PageLayout />}>
					{ROUTES.map(({ route, Component }, index) => {
						return (
							<Route
								key={index}
								exact
								path={route}
								element={
									<ProtectedRoute>
										<Component />
									</ProtectedRoute>
								}
							/>
						);
					})}
					<Route exact path="*" element={<NoAccess />} />
				</Route> */}
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/" element={<PatientsList />} />
			</Switch>
		</div>
	);
};

export default Routes