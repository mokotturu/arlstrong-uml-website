export default function MemberCard({img, name, role, details}) {
	return (
		<section className="bg-slate-50 drop-shadow-xl rounded-lg flex flex-col text-center lg:text-left lg:flex-row items-center gap-4 p-6">
			<img src={img} alt={`${name}`} className="rounded-full w-24 h-24" />
			<section>
				<p className="text-lg font-bold text-slate-800">{name}</p>
				<p className="text-blue-600 mb-2">{role}</p>
				<p className="text-slate-500">{details}</p>
			</section>
		</section>
	)
}
