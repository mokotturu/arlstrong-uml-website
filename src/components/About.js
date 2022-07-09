import ParticlesBg from "./ParticlesBg";
import heroimg from "../img/hero.jpg";
import hoverImg from "../img/hover-img.png";
import hoverImgText from "../img/hover-img-text.png";

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
					<h1 className="heading my-40 text-center">Teams succeed because of the network of relationships they possess, and the emergent behaviors this network facilitates.</h1>
					<div className="group relative overflow-hidden">
						<div className="flex justify-center items-center">
							<img className="rounded-xl hover-hover:brightness-50 hover-hover:group-hover:brightness-100 transition-all ease-in-out duration-300" src={hoverImg} alt="Hover" />
						</div>
						<div className="w-full h-full absolute -translate-y-full flex justify-center items-center">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 stroke-neutral-50 hover-hover:group-hover:opacity-0 hover-none:hidden transition-all ease-in-out duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</div>
						<img className="transition-all ease-in-out duration-300 absolute hover-hover:opacity-0 hover-hover:group-hover:opacity-100 hover-hover:-translate-y-2/3 hover-hover:group-hover:-translate-y-[97%] hover-none:-translate-y-[97%] hover-none: opacity-100 transform-gpu" src={hoverImgText} alt="Hover text" />
					</div>
				</div>
			</section>
		</section>
	)
}

export default About;
