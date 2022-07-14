import MemberCard from "./MemberCard"

import kshitij from "../img/kshitij_jerath.jpg";
import paul from "../img/paul_robinette.jpg";
import reza from "../img/reza_ahmadzadeh.jpeg";

import jasmin from "../img/jasmin_cloutier.JPG";
import javier from "../img/javier_garcia.jpg";
import jennifer from "../img/jennifer_kubota.JPG";
import jonroy from "../img/jonroy_canady.jpg";
import nina from "../img/nina_lauharatanahirun.jpg";

import alden_d from "../img/alden_daniels.png";
import alok from "../img/alok_malik.jpeg";
import hamid from "../img/hamid_osooli.jpg";
import maitry from "../img/maitry_trivedi.jpeg";
import monish from "../img/monishreddy_kotturu.png";
import saba from "../img/zahra_rezaei_khavas.png";

import nodp from "../img/nodp.svg";

const members = [
	{
		'category': 'Principal Investigators',
		'list': [
			{
				'img': kshitij,
				'name': 'Kshitij Jerath, Ph.D.',
				'role': 'Principal Investigator',
				'description': {
					__html: 'Assistant Professor, Department of Mechanical Engineering'
				},
			},
			{
				'img': paul,
				'name': 'Paul Robinette, Ph.D.',
				'role': 'Principal Investigator',
				'description': {
					__html: 'Assistant Professor, Department of Electrical and Computer Engineering'
				},
			},
			{
				'img': reza,
				'name': 'Reza Ahmadzadeh, Ph.D.',
				'role': 'Principal Investigator',
				'description': {
					__html: 'Assistant Professor, Department of Computer Science'
				},
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
				'description': {
					__html: 'Social neuroscience, Social status'
				},
			},
			{
				'img': javier,
				'name': 'Javier Garcia',
				'role': 'Collaborator',
				'description': {
					__html: 'Neuroscience'
				},
			},
			{
				'img': jennifer,
				'name': 'Jennifer Kubota',
				'role': 'Collaborator',
				'description': {
					__html: 'Social neuroscience, Social decision-making'
				},
			},
			{
				'img': jonroy,
				'name': 'Jonroy Canady',
				'role': 'Collaborator',
				'description': {
					__html: 'Human-autonomy teaming'
				},
			},
			{
				'img': nina,
				'name': 'Nina Lauharatanahirun',
				'role': 'Collaborator',
				'description': {
					__html: 'Decision neuroscience, Computational modeling'
				},
			},
		]
	},
	{
		'category': 'Research Assistants',
		'list': [
			{
				'img': alden_d,
				'name': 'Alden Daniels',
				'role': 'Graduate Research Assistant',
				'description': {
					__html: 'A Computer Science MS/PhD student who  formerly worked as a software engineer, back in school seeking to expand his skill set apply his programming experience to research in AI and networked systems. Working with the STRONG team to help integrate searching and complexity algorithms into existing HRI simulations, and help implement said simulations using the Unreal Engine.'
				},
			},
			{
				'img': alok,
				'name': 'Alok Malik',
				'role': 'Graduate Research Assistant',
				'description': {
					__html: 'I\'m a Master\'s in Computer Science student at University of Massachusetts Lowell(UML). I work with Dr. Reza Ahmadzadeh, who is my master\'s thesis advisor. Prior to coming at UML I worked as ML engineer in India where I worked primarily on NLP and CV with deep learning and also co-authored a book on unsupervised Machine Learning. My research at UML mainly focuses on multi-agent systems and coverage path planning for search and rescue missions. More details on my research and projects are available on my personal website: <a class="link" href="https://alokmalik.com" target="_blank" rel="noopener noreferrer">alokmalik.com</a>.'
				},
			},
			{
				'img': hamid,
				'name': 'Hamid Osooli',
				'role': 'Graduate Research Assistant',
				'description': {
					__html: 'I\'m a PhD student with the Computer Science Department at University of Massachusetts Lowell working with Dr. Reza Ahmadzadeh at Pearl. Prior to joining Pearl lab I was a MSc student in Flight Dynamics and Control under the supervision of Prof. Jafar Roshanian, and completed my B.Sc. studies at Mechanical Engineering Department in University of Kashan under the supervision of Dr. Mohsen Irani Rahaghi. My research mainly focuses on Robotics and Reinforcement learning for collaboration in human-agent groups. For a better insight into my background you can access my CV via <a class="link" href="https://hamidosooli.github.io/assets/pdf/Hamid_Osooli_CV.pdf" target="_blank" rel="noopener noreferrer">this link</a>.'
				},
			},
			{
				'img': maitry,
				'name': 'Maitry Trivedi',
				'role': 'Graduate Research Assistant',
				'description': {
					__html: 'I am a PhD in Computer Science student working under the guidance of Prof. Paul Robinette. My research interests are Human-Robot interaction, Human-Robot trust, Reinforcement Learning. Currently, I am working on a evaluating the effect of performance-trust violating vs moral-trust violation for search and rescue mission. Here is the paper which was accepted in ICRA 2022 workshop on <a class="link" href="https://arxiv.org/abs/2206.15430" target="_blank" rel="noopener noreferrer">"Shared Autonomy in Physical Human-Robot Interaction: Adaptability and Trust"</a>.'
				},
			},
			{
				'img': monish,
				'name': 'Monish Reddy Kotturu',
				'role': 'Undergraduate Research Assistant',
				'description': {
					__html: 'I am a rising third-year undergraduate at the University of Massachusetts Lowell majoring in computer science in the data science option and minoring in mathematics. As a part of the STRONG team, I implemented the 2D games for the Simple Trust and Performance-Moral Trust games and collected game data for analysis. Additionally, I am working on the multi-agent multi-armed bandit problem under Professor Reza Ahmadzadeh in the <a class="link" href="https://www.pearl-robotics.com/" target="_blank" rel="noopener noreferrer">PeARL lab</a> to draw results that might be in STRONG\'s interests.'
				},
			},
			{
				'img': saba,
				'name': 'Zahra Rezaei Khavas',
				'role': 'Graduate Research Assistant',
				'description': {
					__html: 'I am a third-year Ph.D. student in the University of Massachusetts Lowell\'s electrical and computer engineering department. I do my Ph.D. studies under the supervision of Prof. Paul Robinette. My Ph.D. research focuses on human-robot trust, and my background is in biomedical engineering (bio-electrics) and bio-signal processing. In particular, I am interested in modeling human-robot trust using multimodal physiological measurements. In addition to this primary line of research, I am interested in evaluating human behavior toward immoral robots and assessing the differences in human reactions in response to immoral behavior by humans and robots. Visit my <a class="link" href="https://scholar.google.com/citations?hl=en&user=5YObBOQAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a> page to see my published papers.'
				},
			},
		]
	},
	{
		'category': 'Alumni',
		'list': [
			{
				'img': nodp,
				'name': 'Alden Giedraitis',
				'role': 'Undergraduate Research Assistant',
				'description': {
					__html: ''
				},
			},
			{
				'img': nodp,
				'name': 'Ashwin Nair',
				'role': 'Graduate Research Assistant',
				'description': {
					__html: ''
				},
			},
			{
				'img': nodp,
				'name': 'Fernando Mazzoni',
				'role': 'Graduate Research Assistant',
				'description': {
					__html: ''
				},
			},
			{
				'img': nodp,
				'name': 'Mohamed Martini',
				'role': 'Graduate Research Assistant',
				'description': {
					__html: ''
				},
			},
			{
				'img': nodp,
				'name': 'Russ Perkins',
				'role': 'Graduate Research Assistant',
				'description': {
					__html: ''
				},
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
							<section className="w-full flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-20">
								{category.list.map(person => (
									<div key={person.name}>
										<MemberCard
											img={person.img}
											name={person.name}
											role={person.role}
											description={person.description}
										/>
									</div>
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
