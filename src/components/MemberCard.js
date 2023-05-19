import { useRef, useState } from "react";

const MemberCard = ({ img, name, role, link, description }) => {
	const [opened, setOpened] = useState(false);
	const descriptionRef = useRef();

	return (
		<section className={`bg-white drop-shadow-lg rounded-lg flex flex-col items-center text-center p-6 col-span-2 lg:flex-col lg:text-left row-auto`}>
			<div className="flex flex-col lg:flex-row w-full gap-4 items-center">
				<img src={img} alt={`${name}`} className="rounded-full w-28 h-28 object-cover" />
				<section className="flex flex-col w-full">
					{link === ''
						?
						<p className="text-base font-bold text-eerie-black-900">
							{name}
						</p>
						:
						<a className="text-base font-bold text-eerie-black-900 flex items-center gap-2 justify-center lg:justify-start hover:underline" href={link} target="_blank" rel="noreferrer noopener">
							{name}
							<svg xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 fill-eerie-black-900 noFadeInUp" viewBox="0 0 20 20"
								fill="currentColor">
								<path class="noFadeInUp" fill-rule="evenodd"
									d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
									clip-rule="evenodd" />
							</svg>
						</a>
					}

					<p className="text-base text-breen-900">{role}</p>
				</section>
				<button
					onClick={() => setOpened(!opened)}
					className="p-3 rounded-lg bg-white hover:bg-breen-100 transition-all duration-300"
				>
					<svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-all duration-300 ${opened ? '' : '-rotate-180'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
						<path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
					</svg>
				</button>
			</div>
			<div
				className={`w-full text-left text-slate-grey transition-[height] ease-in-out duration-300 overflow-hidden`}
				ref={descriptionRef}
				style={
					opened ? {
						height: descriptionRef.current.scrollHeight + 'px'
					} : {
						height: '0px'
					}
				}
			>
				<p className="text-base mt-8" dangerouslySetInnerHTML={description.__html !== '' ? description : { __html: 'No description provided' }} />
			</div>
		</section>
	)
}

export default MemberCard;
