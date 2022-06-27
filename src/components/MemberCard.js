const MemberCard = ({img, name, role, details}) => {
	return (
		<section className="bg-gradient-to-r from-[#F4F5F6] via-white to-white drop-shadow-lg rounded-lg flex flex-col text-center lg:text-left lg:flex-row items-center gap-4 p-6 hover:scale-105 transition-all duration-300 ease-in-out">
			<img src={img} alt={`${name}`} className="rounded-full w-28 h-28 object-cover" />
			<section>
				<p className="text-lg font-bold text-eerie-black-900">{name}</p>
				<p className="text-breen-900 mb-4">{role}</p>
				<p className="text-slate-grey">{details}</p>
			</section>
		</section>
	)
}

export default MemberCard;
