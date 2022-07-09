import { useEffect, useState } from "react"

const ScrollToTop = () => {
	const [showGoToTop, setShowGoToTop] = useState(false);

	const handleVisibleBtn = () => {
		setShowGoToTop(window.pageYOffset > 50);
	}

	const handleScrollUp = () => {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

	useEffect(() => {
		window.addEventListener('scroll', handleVisibleBtn);
	}, []);

	return (
		<button type="button" onClick={handleScrollUp} className={`animate__animated bg-breen-800 p-4 rounded-full fixed z-50 right-4 bottom-4 shadow-breen-300 hover:shadow-[0px_22px_70px_4px] hover:shadow-breen-400 hover:bg-breen-700 transition-all duration-300 hover:cursor-pointer ${showGoToTop ? 'animate__fadeIn' : 'hidden' }`}>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
				<path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
			</svg>
		</button>
	)
}

export default ScrollToTop;
