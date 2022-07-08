import MemberCard from "./MemberCard"

import kshitij from "../img/kshitij_jerath.jpg";
import paul from "../img/paul_robinette.jpg";
import reza from "../img/reza_ahmadzadeh.jpeg";

import jasmin from "../img/jasmin_cloutier.JPG";
import javier from "../img/javier_garcia.jpg";
import jennifer from "../img/jennifer_kubota.JPG";
import jonroy from "../img/jonroy_canady.jpg";
import nina from "../img/nina_lauharatanahirun.jpg";

import monish from "../img/monishreddy_kotturu.png";
import saba from "../img/zahra_rezaei_khavas.png";

const members = [
	{
		'category': 'Principal Investigators',
		'list': [
			{
				'img': kshitij,
				'name': 'Kshitij Jerath, Ph.D.',
				'role': 'Principal Investigator',
				'details': 'Assistant Professor, Department of Mechanical Engineering',
			},
			{
				'img': paul,
				'name': 'Paul Robinette, Ph.D.',
				'role': 'Principal Investigator',
				'details': 'Assistant Professor, Department of Electrical and Computer Engineering',
			},
			{
				'img': reza,
				'name': 'Reza Ahmadzadeh, Ph.D.',
				'role': 'Principal Investigator',
				'details': 'Assistant Professor, Department of Computer Science',
			},
		]
	},
	{
		'category': 'Collaborators',
		'list': [
			{
				'img': jasmin,
				'name': 'Jasmin Cloutier',
				'role': 'Collaborator',
				'details': 'Social neuroscience, Social status',
			},
			{
				'img': javier,
				'name': 'Javier Garcia',
				'role': 'Collaborator',
				'details': 'Neuroscience',
			},
			{
				'img': jennifer,
				'name': 'Jennifer Kubota',
				'role': 'Collaborator',
				'details': 'Social neuroscience, Social decision-making',
			},
			{
				'img': jonroy,
				'name': 'Jonroy Canady',
				'role': 'Collaborator',
				'details': 'Human-autonomy teaming',
			},
			{
				'img': nina,
				'name': 'Nina Lauharatanahirun',
				'role': 'Collaborator',
				'details': 'Decision neuroscience, Computational modeling',
			},
		]
	},
	{
		'category': 'Research Assistants',
		'list': [
			{
				'img': 'https://via.placeholder.com/150',
				'name': 'Alden Daniels',
				'role': 'Graduate Research Assistant',
			},
			{
				'img': 'https://via.placeholder.com/150',
				'name': 'Alden Giedraitis',
				'role': 'Undergraduate Research Assistant',
			},
			{
				'img': 'https://via.placeholder.com/150',
				'name': 'Alok Malik',
				'role': 'Graduate Research Assistant',
			},
			{
				'img': 'https://via.placeholder.com/150',
				'name': 'Fernando Mazzoni',
				'role': 'Graduate Research Assistant',
			},
			{
				'img': 'https://via.placeholder.com/150',
				'name': 'Maitry Trivedi',
				'role': 'Graduate Research Assistant',
			},
			{
				'img': 'https://via.placeholder.com/150',
				'name': 'Mohamed Martini',
				'role': 'Graduate Research Assistant',
			},
			{
				'img': monish,
				'name': 'Monish Reddy Kotturu',
				'role': 'Undergraduate Research Assistant',
			},
			{
				'img': 'https://via.placeholder.com/150',
				'name': 'Russ Perkins',
				'role': 'Graduate Research Assistant',
			},
			{
				'img': saba,
				'name': 'Zahra Rezaei Khavas',
				'role': 'Graduate Research Assistant',
			},
		]
	},
	{
		'category': 'Alumni',
		'list': [
			{
				'img': 'https://via.placeholder.com/150',
				'name': 'Ashwin Nair',
				'role': 'Graduate Research Assistant',
			},
		]
	},
]

const Members = () => {
	return (
		<section className="flex justify-center">
			<div className="py-20 responsive-width child:w-full flex flex-col gap-20">
				{
					members.map(category => (
						<section key={category.category}>
							<h1 className="heading">{category.category}</h1>
							<section className="w-full flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:auto-rows-[1fr] lg:gap-20">
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

export default Members;
