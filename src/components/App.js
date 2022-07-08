import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from "./About";
import Details from "./Details";
import Members from "./Members";
import Publications from './Publications';
import ResearchOutcomes from './ResearchOutcomes';

import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const routes = [
	{ show: false, name: 'About', path: '/', Component: <About /> },
	{ show: true, name: 'Details', path: '/details', Component: <Details /> },
	{ show: true, name: 'Members', path: '/members', Component: <Members /> },
	{ show: true, name: 'Publications', path: '/publications', Component: <Publications /> },
	{ show: true, name: 'Research Outcomes', path: '/research-outcomes', Component: <ResearchOutcomes /> },
];

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Navbar routes={routes} />

			<Routes>
				{routes.map(({ name, path, Component }) => (
					<Route key={name} path={path} element={Component} />
				))}
			</Routes>

			<Footer />
		</Router>
	)
}

export default App;
