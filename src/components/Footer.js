import umlLogo from "../images/uml_logo.svg";
import arlStrongLogo from "../images/arl_strong_logo.svg";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="w-full px-12 py-12 flex flex-col justify-center items-center gap-8 bg-eerie-black-900 text-white">
			<div className="flex flex-row justify-center items-center child:h-16">
				<img src={umlLogo} alt="UMass Lowell Logo" />
				<img src={arlStrongLogo} alt="ARL STRONG Logo" />
			</div>
			<p className="text-center">&copy; {year} ARL STRONG - Univeristy of Massachusetts Lowell</p>
		</footer>
	)
}
