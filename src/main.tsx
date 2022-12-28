import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import { BaziPage } from './pages/bazi';
import { ReadingsPage } from './pages/readings';
import { BookingPage } from './pages/booking';
import { AboutPage } from './pages/about';
import { TermsAndConditionsPage } from './pages/terms';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'home',
				element: <HomePage />,
			},
			{
				path: 'bazi',
				element: <BaziPage />,
			},
			{
				path: 'readings',
				element: <ReadingsPage />,
			},
			{
				path: 'booking',
				element: <BookingPage />,
			},
			{
				path: 'about',
				element: <AboutPage />,
			},
			{
				path: 'terms-and-conditions',
				element: <TermsAndConditionsPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<RouterProvider router={router} />
	</React.StrictMode>
);
