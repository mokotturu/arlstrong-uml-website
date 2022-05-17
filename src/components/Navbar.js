import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import About from "./About";
import Members from "./Members";

import umlLogo from "../images/uml_logo.svg";
import arlStrongLogo from "../images/arl_strong_logo.svg";
import Footer from './Footer';

const navigation = [
	{ name: 'Members', href: '/members', current: false },
	{ name: 'Publications', href: '/publications', current: false },
	{ name: 'Contact', href: '/contact', current: false },
]

export default function Navbar() {
	return (
		<Router>
			<section className="flex-[1_0_auto]">
				<section className="sticky z-10 top-0 w-full bg-slate-900 flex justify-center h-16">
					<nav className="text-slate-50 font-medium min-w-[100%] lg:min-w-[60em] xl:min-w-[70em] 2xl:min-w-[80em] flex justify-between items-center">
						<Link to="/" className="text-2xl flex items-center">
							<img src={umlLogo} alt="UMass Lowell" className="h-12 pr-4" />
							<img src={arlStrongLogo} alt="UMass Lowell" className="h-12 pr-4" />
							<p>ARL STRONG - UML</p>
						</Link>
						<div className="right">
							<div className="flex gap-8 child:inline child:rounded-md child:p-2 child:text-slate-50 child-hover:text-white child-hover:bg-slate-700 child-hover:cursor-pointer child:duration-150 child:ease-in-out">
								{navigation.map(item => (
									<Link
									to={item.href}
									key={item.name}
									className={item.current ? "bg-slate-800" : ""}
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</nav>
				</section>

				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/members" element={<Members />} />
					<Route path="/" element={<About />} />
					<Route path="/" element={<About />} />
				</Routes>
			</section>
			<Footer />
		</Router>
	);
}
