import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import umlLogo from "../images/uml_logo.svg";
import arlStrongLogo from "../images/arl_strong_logo.svg";

import About from "./About";
import Members from "./Members";
import Footer from './Footer';
import Publications from './Publications';

const navigation = [
	{ name: 'Members', href: '/members' },
	{ name: 'Publications', href: '/publications' },
	{ name: 'Contact', href: '/contact' },
]

export default function Navbar() {
	return (
		<Router>
			<section className="flex-[1_0_auto]">
				<section className="sticky z-10 top-0 w-full bg-slate-900 flex justify-center h-16">
					<nav className="text-slate-50 font-medium min-w-[100%] lg:min-w-[60em] xl:min-w-[70em] 2xl:min-w-[80em] flex justify-between items-center">
						<NavLink to="/" className="text-2xl flex items-center">
							<img src={umlLogo} alt="UMass Lowell" className="h-12 pr-4" />
							<img src={arlStrongLogo} alt="UMass Lowell" className="h-12 pr-4" />
							<p>ARL STRONG - UML</p>
						</NavLink>
						<div className="right">
							<div className="flex gap-8 child:inline child:rounded-md child:p-2 child:text-slate-50 child-hover:text-white child-hover:bg-slate-700 child-hover:cursor-pointer child:duration-150 child:ease-in-out">
								{navigation.map(item => (
									<NavLink
										to={item.href}
										key={item.name}
										className={({ isActive }) => isActive ? "bg-slate-800" : undefined }
									>
										{item.name}
									</NavLink>
								))}
							</div>
						</div>
					</nav>
				</section>

				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/members" element={<Members />} />
					<Route path="/publications" element={<Publications />} />
					<Route path="/" element={<About />} />
				</Routes>
			</section>
			<Footer />
		</Router>
	);
}
