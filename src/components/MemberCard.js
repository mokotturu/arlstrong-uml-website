import { useRef, useState } from "react";

const MemberCard = ({img, name, role, description}) => {
	const [opened, setOpened] = useState(false);
	const descriptionRef = useRef();

	return (
		<section className={`bg-gradient-to-r from-[#F4F5F6] via-white to-white drop-shadow-lg rounded-lg flex flex-col items-center text-center p-6 hover:cursor-pointer col-span-2 lg:flex-col lg:text-left row-auto`} onClick={() => setOpened(!opened)}>
			<div className="flex flex-col lg:flex-row w-full gap-4 items-center">
				<img src={img} alt={`${name}`} className="rounded-full w-28 h-28 object-cover" />
				<section className="flex flex-col w-full">
					<p className="text-lg font-bold text-eerie-black-900">{name}</p>
					<p className="text-breen-900">{role}</p>
				</section>
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
				<p className="mt-8" dangerouslySetInnerHTML={description.__html !== '' ? description : { __html: 'No description provided' }} />
			</div>
		</section>
	)
}

export default MemberCard;
