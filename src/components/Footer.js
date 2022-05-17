import umlLogo from "../images/uml_logo.svg";
import arlStrongLogo from "../images/arl_strong_logo.svg";

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="w-full px-12 py-8 flex flex-col justify-center items-center gap-8 bg-slate-900 text-slate-200">
			<div className="flex flex-row justify-center items-center">
				<img src={umlLogo} alt="UMass Lowell Logo" />
				<img src={arlStrongLogo} alt="ARL STRONG Logo" />
			</div>
			<p>&copy; {year} ARL STRONG - Univeristy of Massachusetts Lowell</p>
		</footer>
	);
}
