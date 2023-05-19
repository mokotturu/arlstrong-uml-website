import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from "./About";
import Members from "./Members";
import Publications from './Publications';
import ResearchOutcomes from './ResearchOutcomes';
import Contact from './Contact';

import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const routes = [
	{ show: true, name: 'Home', path: '/', Component: <About /> },
	{ show: true, name: 'Members', path: '/members', Component: <Members /> },
	{ show: true, name: 'Publications', path: '/publications', Component: <Publications /> },
	{ show: true, name: 'Research Outcomes', path: '/research-outcomes', Component: <ResearchOutcomes /> },
	{ show: true, name: 'Contact', path: '/contact', Component: <Contact /> },
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
