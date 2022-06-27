import { Link } from 'react-router-dom';

import ParticlesBg from "./ParticlesBg";
import heroimg from "../img/hero.jpg"

const About = () => {
	return (
		<section>
			<ParticlesBg />
			<section className="h-screen bg-transprent flex justify-center relative z-10">
				<div className="responsive-width flex flex-col items-center justify-center gap-8">
					<h1 className="heading text-5xl text-center">Strengthening Teamwork for Robust Operations in Novel Groups</h1>
					<a href="#us" className="button">Explore</a>
				</div>
			</section>
			<section id="us" className="flex justify-center">
				<img src={heroimg} className="relative z-10 rounded-xl responsive-width object-cover" alt="ARL STRONG team members" />
			</section>
			<section id="main-content" className="flex justify-center relative z-10">
				<div className="py-20 responsive-width child:w-full">
					<section>
						<h1 className="heading">Research Objective</h1>
						<p className="text-eerie-black-800 mb-8">
							The research objective of the proposed work is to demonstrate how varying resource constraints on individual learning entities (i.e. microscopic level model parameters of agents or humans) impacts the macroscopic level emergence of trust clusters in teams, and eventually team performance and cohesion. The proposed framework builds on the theories of Commons [1], Graves [2], and Jerath [3][4], to create a functionally-identical modeling, reinforcement learning, and adaptation framework for both humans and agents, that incorporates dynamic models of trust.
						</p>
						<p className="text-eerie-black-800">
							Read more about our project summary in the <Link to="/details" className="link">details</Link> section.
						</p>
					</section>
				</div>
			</section>
		</section>
	)
}

export default About;
