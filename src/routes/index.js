import React from 'react'


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
				<Route element={<PageLayout />}>
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
					{/* <Route path="/loading" element={<Master />} /> */}
					<Route exact path="*" element={<NoAccess />} />
				</Route>
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
				<Route exact path="/branches" element={<OrganizationList />} />
			</Switch>
		</div>
	);
};

export default Routes