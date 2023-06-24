import MemberCard from "./MemberCard"

import kshitij from "../img/kshitij_jerath.jpg";
import paul from "../img/paul_robinette.jpg";
import reza from "../img/reza_ahmadzadeh.jpeg";
import joao from "../img/joao_rosa.png";

import jasmin from "../img/jasmin_cloutier.JPG";
import javier from "../img/javier_garcia.jpg";
import jennifer from "../img/jennifer_kubota.JPG";
import jonroy from "../img/jonroy_canady.jpg";
import nina from "../img/nina_lauharatanahirun.jpg";

import akshay from "../img/akshay_kolli.png";
import alden_d from "../img/alden_daniels.png";
import alok from "../img/alok_malik.jpeg";
import hamid from "../img/hamid_osooli.png";
import kalvin from "../img/kalvin_mccallum.jpg";
import maitry from "../img/maitry_trivedi.jpeg";
import monish from "../img/monishreddy_kotturu.png";
import saba from "../img/zahra_rezaei_khavas.png";
import yasin from "../img/yasin_findik.jpg";

import nodp from "../img/nodp.svg";

const members = [
	{
		'category': 'Principal Investigators',
		'list': [
			{
				'img': kshitij,
				'name': 'Kshitij Jerath, Ph.D.',
				'role': 'Principal Investigator',
				'link': '',
				'description': {
					__html: 'Assistant Professor, Department of Mechanical Engineering'
				},
			},
			{
				'img': paul,
				'name': 'Paul Robinette, Ph.D.',
				'role': 'Principal Investigator',
				'link': '',
				'description': {
					__html: 'Assistant Professor, Department of Electrical and Computer Engineering'
				},
			},
			{
				'img': reza,
				'name': 'Reza Ahmadzadeh, Ph.D.',
				'role': 'Principal Investigator',
				'link': '',
				'description': {
					__html: 'Assistant Professor, Department of Computer Science'
				},
			},
		]
	},
	{
		'category': 'Collaborators and Visiting Scholars',
		'list': [
			{
				'img': jasmin,
				'name': 'Jasmin Cloutier, Ph.D.',
				'role': 'Collaborator',
				'link': '',
				'description': {
					__html: 'Social neuroscience, Social status'
				},
			},
			{
				'img': javier,
				'name': 'Javier Garcia, Ph.D.',
				'role': 'Collaborator',
				'link': '',
				'description': {
					__html: 'Neuroscience'
				},
			},
			{
				'img': jennifer,
				'name': 'Jennifer Kubota, Ph.D.',
				'role': 'Collaborator',
				'link': '',
				'description': {
					__html: 'Social neuroscience, Social decision-making'
				},
			},
			{
				'img': joao,
				'name': 'João Luís G. Rosa, Ph.D.',
				'role': 'Visiting Scholar',
				'link': 'https://www.intechopen.com/profiles/151889',
				'description': {
					__html: 'João Luís G. Rosa is an associate professor at the Department of Computer Science at the University of São Paulo (USP), in São Carlos, Brazil. He is with the Bio-inspired Computing Laboratory (BioCom). His research interests include brain-computer interfaces, biologically plausible neural networks, and artificial intelligence. Regarding his academic experience, he has taught graduate-level courses in computer science: Brain-Computer Interfaces, Artificial Intelligence, Neural Networks, and Theory of Computation. Since 2009, he has been a reviewer for the ACM Computing Reviews. He is also a reviewer for several periodicals and conferences. He has published three technical books (two in Portuguese and one in English), book chapters, and papers in journals and conference proceedings. He presented three two-hour tutorials at IJCNN Conferences. He has been an IEEE senior member since 2015. He is currently a Fulbright Scholar (Scholar in Residence) based at UMass-Lowell, where he has taught two undergraduate and graduate courses (Artificial Intelligence and Brain-Computer Interfaces).'
				},
			},
			{
				'img': jonroy,
				'name': 'Jonroy Canady',
				'role': 'Collaborator',
				'link': '',
				'description': {
					__html: 'Human-autonomy teaming'
				},
			},
			{
				'img': nina,
				'name': 'Nina Lauharatanahirun, Ph.D.',
				'role': 'Collaborator',
				'link': '',
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
				'img': akshay,
				'name': 'Akshay Kolli',
				'role': 'Graduate Research Assistant',
				'link': 'https://www.linkedin.com/in/akshay-kolli-a5795317a/',
				'description': {
					__html: 'I\'m a masters student in the Computer Science department at the University of Massachusetts, Lowell. My research is focused on the evolution of graphs and propagation of change in graphs.'
				},
			},
			{
				'img': alden_d,
				'name': 'Alden Daniels',
				'role': 'Graduate Research Assistant',
				'link': 'https://www.linkedin.com/in/alden-daniels-0534b153/',
				'description': {
					__html: 'A Computer Science MS/PhD student who  formerly worked as a software engineer, back in school seeking to expand his skill set apply his programming experience to research in AI and networked systems. Working with the STRONG team to help integrate searching and complexity algorithms into existing HRI simulations, and help implement said simulations using the Unreal Engine.'
				},
			},
			{
				'img': hamid,
				'name': 'Hamid Osooli',
				'role': 'Graduate Research Assistant',
				'link': 'https://www.linkedin.com/in/hamid-osooli-a53b9954/',
				'description': {
					__html: 'I\'m a PhD student with the Computer Science Department at University of Massachusetts Lowell working with Dr. Reza Ahmadzadeh at Pearl. Prior to joining Pearl lab I was a MSc student in Flight Dynamics and Control under the supervision of Prof. Jafar Roshanian, and completed my B.Sc. studies at Mechanical Engineering Department in University of Kashan under the supervision of Dr. Mohsen Irani Rahaghi. My research mainly focuses on Robotics and Reinforcement learning for collaboration in human-agent groups. For a better insight into my background you can access my CV via <a class="link" href="https://hamidosooli.github.io/assets/pdf/Hamid_Osooli_CV.pdf" target="_blank" rel="noopener noreferrer">this link</a>.'
				},
			},
			{
				'img': nodp,
				'name': 'Hossein Haeri',
				'role': 'Graduate Research Assistant',
				'link': '',
				'description': {
					__html: ''
				},
			},
			{
				'img': kalvin,
				'name': 'Kalvin McCallum',
				'role': 'Graduate Research Assistant',
				'link': 'https://www.linkedin.com/in/kalvinmccallum/',
				'description': {
					__html: 'My name is Kalvin McCallum and I am originally from South Africa. I recently graduated Suma Cum Lauda in a BS Computer Engineering at UMass Lowell and I am currently pursuing my Masters in Computer Engineering at UMass Lowell. My research interests include robotics, brain-computer interfaces, and human-robot interaction.'
				},
			},
			{
				'img': monish,
				'name': 'Monish Reddy Kotturu',
				'role': 'Graduate Research Assistant',
				'link': 'https://www.linkedin.com/in/monish-reddy-kotturu/',
				'description': {
					__html: 'I am a rising Master\'s student at the University of Massachusetts Lowell and I just graduated Magna Cum Laude at UML with a Bachelor of Science in Computer Science. As a part of the STRONG team, I implemented the 2D games for the trust games and collected game data for analysis. Additionally, I am working on multi-agent reinforcement learning (more specifically, multi-agent multi-armed bandits) under Professor Reza Ahmadzadeh in the <a class="link" href="https://www.pearl-robotics.com/" target="_blank" rel="noopener noreferrer">PeARL lab</a> to improve multi-agent team performance.'
				},
			},
			{
				'img': saba,
				'name': 'Zahra Rezaei Khavas',
				'role': 'Graduate Research Assistant',
				'link': 'https://scholar.google.com/citations?user=y-mYQiQAAAAJ',
				'description': {
					__html: 'I am a fourth-year Ph.D. student in the Department of Electrical and Computer Engineering at the University of Massachusetts Lowell under the supervision of Prof. Paul Robinette. My research focuses on human-robot trust. I hold a Master\'s degree in Biomedical Engineering, specializing in bio-electrics, with a research focus on bio-signal processing. My primary research interest lies in modeling human-robot trust using multimodal physiological measurements. I am particularly fascinated by understanding how humans perceive and interact with robots in trust-related scenarios. Additionally, I am interested in investigating human reactions and behavior toward immoral robots, comparing them to human reactions to the immoral behavior of humans. I am passionate about exploring the dynamics of human-robot interaction and trust, and I am dedicated to advancing our understanding in this area. If you have any questions or would like to collaborate on related research, please feel free to reach out (zahra_rezaeikhavas@student.uml.edu). You can visit my Google Scholar page to explore my contributions to the field.'
				},
			},
			{
				'img': yasin,
				'name': 'Yasin Findik',
				'role': 'Graduate Research Assistant',
				'link': '',
				'description': {
					__html: ''
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
				'link': '',
				'description': {
					__html: ''
				},
			},
			{
				'img': alok,
				'name': 'Alok Malik',
				'role': 'Graduate Research Assistant',
				'link': '',
				'description': {
					__html: 'I\'m a Master\'s in Computer Science student at University of Massachusetts Lowell (UML). I work with Dr. Reza Ahmadzadeh, who is my master\'s thesis advisor. Prior to coming at UML I worked as ML engineer in India where I worked primarily on NLP and CV with deep learning and also co-authored a book on unsupervised Machine Learning. My research at UML mainly focuses on multi-agent systems and coverage path planning for search and rescue missions. More details on my research and projects are available on my personal website: <a class="link" href="https://alokmalik.com" target="_blank" rel="noopener noreferrer">alokmalik.com</a>.'
				},
			},
			{
				'img': nodp,
				'name': 'Ashwin Nair',
				'role': 'Graduate Research Assistant',
				'link': '',
				'description': {
					__html: ''
				},
			},
			{
				'img': nodp,
				'name': 'Fernando Mazzoni',
				'role': 'Graduate Research Assistant',
				'link': '',
				'description': {
					__html: ''
				},
			},
			{
				'img': maitry,
				'name': 'Maitry Trivedi',
				'role': 'Graduate Research Assistant',
				'link': '',
				'description': {
					__html: 'I am a PhD in Computer Science student working under the guidance of Prof. Paul Robinette. My research interests are Human-Robot interaction, Human-Robot trust, Reinforcement Learning. Currently, I am working on a evaluating the effect of performance-trust violating vs moral-trust violation for search and rescue mission. Here is the paper which was accepted in ICRA 2022 workshop on <a class="link" href="https://arxiv.org/abs/2206.15430" target="_blank" rel="noopener noreferrer">"Shared Autonomy in Physical Human-Robot Interaction: Adaptability and Trust"</a>.'
				},
			},
			{
				'img': nodp,
				'name': 'Mohamed Martini',
				'role': 'Graduate Research Assistant',
				'link': '',
				'description': {
					__html: ''
				},
			},
			{
				'img': nodp,
				'name': 'Russ Perkins',
				'role': 'Graduate Research Assistant',
				'link': '',
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
							<h1 className="heading mb-16">{category.category}</h1>
							<section className="w-full flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-8">
								{category.list.map(person => (
									<div key={person.name}>
										<MemberCard
											img={person.img}
											name={person.name}
											role={person.role}
											link={person.link}
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
