import MemberCard from "./MemberCard"

const principalInvestigators = [
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Kshitij Jerath, Ph.D.',
		'role': 'Principal Investigator',
		'details': 'Assistant Professor, Department of Mechanical Engineering',
	},
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Paul Robinette, Ph.D.',
		'role': 'Principal Investigator',
		'details': 'Assistant Professor, Department of Electrical and Computer Engineering',
	},
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Reza Ahmadzadeh, Ph.D.',
		'role': 'Principal Investigator',
		'details': 'Assistant Professor, Department of Computer Science',
	},
]

const researchAssistants = [
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Alden Daniels',
		'role': 'Graduate Research Assistant'
	},
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Alden Giedraitis',
		'role': 'Undergraduate Research Assistant'
	},
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Alok Malik',
		'role': 'Graduate Research Assistant'
	},
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Fernando Mazzoni',
		'role': 'Graduate Research Assistant'
	},
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Mohamed Martini',
		'role': 'Graduate Research Assistant'
	},
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Monish Reddy Kotturu',
		'role': 'Undergraduate Research Assistant'
	},
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Russ Perkins',
		'role': 'Graduate Research Assistant'
	},
	{
		'img': 'https://via.placeholder.com/150',
		'name': 'Saba Rezaei',
		'role': 'Graduate Research Assistant'
	},
]

export default function Members() {
	return (
		<section className="flex justify-center items-center">
			<div className="py-20 w-[100%] lg:w-[60em] xl:w-[70em] 2xl:w-[80em] child:w-full">
				<h1 className="text-4xl text-slate-800 mb-8">Principal Investigators</h1>
				<section className="grid grid-cols-2 gap-16">
					{principalInvestigators.map(pi => (
						<MemberCard
							key={pi.name}
							img={pi.img}
							name={pi.name}
							role={pi.role}
							details={pi.details}
						/>
					))}
				</section>
				<h1 className="text-4xl text-slate-800 mt-16 mb-8">Research Assistants</h1>
				<section className="grid grid-cols-2 gap-16">
					{researchAssistants.map(ra => (
						<MemberCard
							key={ra.name}
							img={ra.img}
							name={ra.name}
							role={ra.role}
							details={ra.details}
						/>
					))}
				</section>
			</div>
		</section>
	);
}
