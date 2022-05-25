import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import '../css/mobilenav.css';
import 'animate.css'

import umlLogo from "../images/uml_logo.svg";
import arlStrongLogo from "../images/arl_strong_logo.svg";

import About from "./About";
import Members from "./Members";
import Footer from './Footer';
import Publications from './Publications';
import Showcase from './Showcase';

const navigation = [
	{ name: 'Members', href: '/members' },
	{ name: 'Publications', href: '/publications' },
	{ name: 'Showcase', href: '/showcase' },
];

export default function Navbar() {
	const [isToggled, setActive] = useState(false);

	const handleToggle = () => {
		setActive(!isToggled);
	}

	const handleNavElemClick = () => {
		if (isToggled) setActive(!isToggled)
	}

	return (
		<Router>
			<section className="flex-[1_0_auto]">
				{/* desktop navbar */}
				<nav className="sticky z-30 top-0 bg-slate-800 hidden lg:flex lg:justify-center h-16">
					<div className="text-slate-50 font-medium flex justify-between items-center lg:min-w-[65em] xl:min-w-[75em] 2xl:min-w-[85em]">
						<NavLink to="/" className="text-2xl flex items-center">
							<img src={umlLogo} alt="UMass Lowell" className="h-12 pr-4" />
							<img src={arlStrongLogo} alt="UMass Lowell" className="h-12 pr-4" />
							<p className="hidden lg:block xl:block 2xl:block font-bold">ARL STRONG</p>
						</NavLink>
						<div className="right">
							<div className="flex gap-8 child:inline child:rounded-md child:p-2 child:text-slate-50 child-hover:text-white child-hover:bg-slate-700 child-hover:cursor-pointer child:duration-150 child:ease-in-out">
								{navigation.map(item => (
									<NavLink
										to={item.href}
										key={item.name}
										className={({ isActive }) => isActive ? "bg-slate-900" : undefined }
									>
										{item.name}
									</NavLink>
								))}
							</div>
						</div>
					</div>
				</nav>

				{/* mobile navbar */}
				<nav className={`lg:hidden z-30 w-full overflow-hidden`}>
					<div className="flex flex-col">
						<div className="w-full top-0 z-20 bg-slate-800 flex justify-between items-center h-16 px-4">
							<NavLink to="/" className="text-xl flex items-center" onClick={handleNavElemClick}>
								<img src={umlLogo} alt="UMass Lowell" className="h-10 pr-4" />
								<img src={arlStrongLogo} alt="UMass Lowell" className="h-10 pr-4" />
								<p className="hidden lg:block xl:block 2xl:block ">ARL STRONG - UML</p>
							</NavLink>
							<button
								className={`hamburger hamburger--arrowturn ${isToggled ? 'is-active' : ''}`}
								onClick={handleToggle}
								type="button"
								aria-label="Menu"
								aria-controls="navigation"
							>
								<span className="hamburger-box">
									<span className="hamburger-inner"></span>
								</span>
							</button>
						</div>
						<div className={`animate__animated absolute top-16 z-10 child:z-10 w-full flex flex-col gap-4 py-4 bg-slate-800 child:text-slate-50 ${isToggled ? 'animate__slideInDown' : 'animate__slideOutUp'}`}>
							{navigation.map(item => (
								<NavLink
									to={item.href}
									key={item.name}
									className={({ isActive }) => `rounded-md px-4 py-2 mx-4 ${isActive ? "bg-slate-900" : ''}` }
									onClick={handleNavElemClick}
								>
									{item.name}
								</NavLink>
							))}
						</div>
					</div>
				</nav>

				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/members" element={<Members />} />
					<Route path="/publications" element={<Publications />} />
					<Route path="/showcase" element={<Showcase />} />
				</Routes>
			</section>
			<Footer />
		</Router>
	)
}
