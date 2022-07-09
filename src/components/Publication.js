import { useRef, useState } from "react";

const Publication = ({ pathName, title, authors, abstract }) => {
	const [isOpen, setOpen] = useState(false);
	const abstractRef = useRef();

	return (
		<section className="bg-white p-6 rounded-lg drop-shadow-lg">
			<div className="flex flex-col sm:flex-row justify-between">
				<div>
					<h2 className="text-xl mb-2">{title}</h2>
					<p className="text-slate-grey">{authors}</p>
				</div>
				<div className="h-100 flex justify-center items-center gap-2 mt-4 sm:mt-0">
					<a
						href={pathName}
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 rounded-lg bg-white hover:bg-breen-100 transition-all duration-300"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
						</svg>
					</a>
					<button
						onClick={() => setOpen(!isOpen)}
						className="p-3 rounded-lg bg-white hover:bg-breen-100 transition-all duration-300"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-all duration-300 ${isOpen ? '-rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
							<path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
						</svg>
					</button>
				</div>
			</div>
			<div
				className="transition-[height] ease-in-out duration-300 overflow-hidden"
				style={
					isOpen ? {
						height: abstractRef.current.scrollHeight + 'px'
					} : {
						height: '0px'
					}
				}
				ref={abstractRef}
			>
				<div className="mt-6 pt-6 border-t-2">
					<h2 className="text-xl mb-4">Abstract</h2>
					<p className="text-[100%]">{abstract}</p>
				</div>
			</div>
		</section>
	)
}

export default Publication;
