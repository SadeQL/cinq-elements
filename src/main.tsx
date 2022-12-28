import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import { BaziPage } from './pages/bazi';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'home',
				element: <HomePage />,
			},
			{ path: 'bazi', element: <BaziPage /> },
		],
	},
]);

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<RouterProvider router={router} />
	</React.StrictMode>
);
