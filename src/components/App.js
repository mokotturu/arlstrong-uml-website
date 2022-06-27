import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from "./About";
import Details from "./Details";
import Members from "./Members";
import Publications from './Publications';
import Showcase from './Showcase';

import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Navbar />

			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/details" element={<Details />} />
				<Route path="/members" element={<Members />} />
				<Route path="/publications" element={<Publications />} />
				<Route path="/showcase" element={<Showcase />} />
			</Routes>

			<Footer />
		</Router>
	)
}

export default App;
