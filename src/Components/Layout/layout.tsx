import * as React from 'react';
import NavBar from '../NawBar/NavBar';
import {Outlet } from 'react-router-dom';


const Layout = () => {
	return (
		<>
		<NavBar />
		<Outlet />
		</>
		
	)
}

export default Layout;