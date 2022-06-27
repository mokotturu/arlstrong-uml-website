import { useState } from 'react';
import '../css/mobilenav.css';
import 'animate.css';

import { NavLink } from 'react-router-dom';

import umlLogo from "../img/uml_logo.svg";
import arlStrongLogo from "../img/arl_logo.svg";

const navigation = [
	{ name: 'Details', href: '/details' },
	{ name: 'Members', href: '/members' },
	{ name: 'Publications', href: '/publications' },
	{ name: 'Research Outcomes', href: '/showcase' },
];

const Navbar = () => {
	const [isToggled, setActive] = useState(false);

	return (
		<section>
			{/* desktop navbar */}
			<nav className="z-30 top-0 bg-white hidden lg:flex lg:justify-center h-20">
				<div className="text-eerie-black-900 font-medium flex justify-between items-center lg:min-w-[60em] xl:min-w-[75em] 2xl:min-w-[85em]">
					<NavLink to="/" className="text-2xl flex items-center">
						<img src={umlLogo} alt="UMass Lowell" className="h-12 pr-4" />
						<img src={arlStrongLogo} alt="UMass Lowell" className="h-12 pr-4" />
					</NavLink>
					<div className="right">
						<div className="flex gap-8 child:inline child:rounded-md child:p-2 child:text-eerie-black-900  child-hover:bg-breen-100 child-hover:cursor-pointer child:duration-150 child:ease-in-out">
							{navigation.map(item => (
								<NavLink
									to={item.href}
									key={item.name}
									className={({ isActive }) => isActive ? "bg-breen-200" : undefined}
								>
									{item.name}
								</NavLink>
							))}
						</div>
					</div>
				</div>
			</nav>

			{/* mobile navbar */}
			<nav className={`lg:hidden z-40 w-full overflow-hidden`}>
				<div className="flex flex-col">
					<div className="w-full top-0 z-30 bg-white flex justify-center items-center h-16">
						<div className="responsive-width flex justify-between items-center">
							<NavLink
								to="/"
								className="text-xl flex items-center"
								onClick={() => { if (isToggled) setActive(!isToggled) }}
							>
								<img src={umlLogo} alt="UMass Lowell" className="h-10 pr-4" />
								<img src={arlStrongLogo} alt="UMass Lowell" className="h-10 pr-4" />
							</NavLink>
							<button
								className={`hamburger hamburger--arrowturn ${isToggled ? 'is-active' : undefined}`}
								onClick={() => setActive(!isToggled)}
								type="button"
								aria-label="Menu"
								aria-controls="navigation"
							>
								<span className="hamburger-box">
									<span className="hamburger-inner"></span>
								</span>
							</button>
						</div>
					</div>
					<div className={`animate__animated absolute top-16 z-20 child:z-20 w-full flex flex-col gap-4 py-4 bg-white child:text-eerie-black-900 shadow-[0rem_99999rem_0rem_99997rem_rgba(0,0,0,0.5)] ${isToggled ? 'animate__fadeInDown' : 'animate__fadeOutUp'}`}>
						{navigation.map(item => (
							<NavLink
								to={item.href}
								key={item.name}
								className={({ isActive }) => `rounded-md px-4 py-2 mx-4 ${isActive ? "bg-breen-100" : ''}` }
								onClick={() => { if (isToggled) setActive(!isToggled) }}
							>
								{item.name}
							</NavLink>
						))}
					</div>
				</div>
			</nav>
		</section>
	)
}

export default Navbar;
