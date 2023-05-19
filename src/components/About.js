import ParticlesBg from "./ParticlesBg";
import heroimg from "../img/hero.jpg";
import hoverImg from "../img/hover-img.png";
import hoverImgText from "../img/hover-img-text.png";
import timeline from '../img/timeline.png';
import phase1 from '../img/phase-1.png';
import phase2 from '../img/phase-2.png';
import phase30 from '../img/phase-30.png';
import phase31 from '../img/phase-31.png';

const About = () => {
	return (
		<section>
			<ParticlesBg />
			<section className="h-screen bg-transprent flex justify-center relative z-10">
				<div className="responsive-width flex flex-col items-center justify-center gap-20">
					<h1 className="heading lg:text-5xl text-center">Trust-NEARCHAT: Trust Network Emergence Amongst Resource-Constrained multi Human-Agent Teams</h1>
					<a href="#us" className="big-button">Explore</a>
				</div>
			</section>
			<section id="us" className="flex justify-center">
				<img src={heroimg} className="relative z-10 rounded-lg w-[85%] lg:w-[60em] xl:w-[75em] 2xl:w-[65em] object-cover" alt="ARL STRONG team members" />
			</section>
			<section id="main-content" className="flex justify-center relative z-10">
				<div className="py-20 responsive-width child:w-full">
					<h1 className="heading my-40 text-center">Teams succeed because of the network of relationships they possess, and the emergent behaviors this network facilitates.</h1>
					<div className="group relative overflow-hidden">
						<div className="flex justify-center items-center">
							<img className="rounded-lg hover-hover:brightness-50 hover-hover:group-hover:brightness-100 transition-all ease-in-out duration-300" src={hoverImg} alt="Hover" />
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
			<section className="flex justify-center flex-1">
				<div className="py-20 responsive-width child:w-full flex flex-col gap-10">
					<div>
						<h1 className="heading mb-4">Project Goal: Expediting the emergence of trust networks</h1>
						<h2 className="font-bold text-slate-grey text-3xl mb-8">in resource constrained multi-human multi-agent teams</h2>
					</div>
					<p className="responsive-width">
						Trust is a foundational pillar for fast and effective coordination betweem individuals and timescales of tactical, operational, and strategic engagement are shrinking. The goal is to expedite the emergence of strong trust networks in resource-constrained multi-human, multi-agent teams (MHATs).
					</p>
					<div className="relative responsive-width lg:h-[30rem] h-[10rem] overflow-hidden child:absolute child:bottom-0">
						<img className="" src={timeline} alt='Timeline' />
						<img className="" src={phase1} alt='Phase 1' />
						<img className="animate-shiftLeft2" src={phase2} alt='Phase 2' />
						<img className="animate-shiftLeft1" src={phase30} alt='Phase 3.0' />
						<img className="opacity-50" src={phase31} alt='Phase 3.1' />
					</div>
				</div>
			</section>
		</section>
	)
}

export default About;
