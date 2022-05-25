import MemberCard from "./MemberCard"

const members = [
	{
		'category': 'Principal Investigators',
		'list': [
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
	},
	{
		'category': 'Research Assistants',
		'list': [
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
	}
]

export default function Members() {
	return (
		<section className="flex justify-center items-center">
			<div className="py-20 responsive-width child:w-full flex flex-col gap-16">
				{
					members.map(category => (
						<section key={category.category}>
							<h1 className="heading">{category.category}</h1>
							<section className="w-full flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
								{category.list.map(person => (
									<MemberCard
										key={person.name}
										img={person.img}
										name={person.name}
										role={person.role}
										details={person.details}
									/>
								))}
							</section>
						</section>
					))
				}
			</div>
		</section>
	)
}
