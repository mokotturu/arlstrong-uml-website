import timeline from '../img/timeline.png';
import phase1 from '../img/phase-1.png';
import phase2 from '../img/phase-2.png';
import phase30 from '../img/phase-30.png';
import phase31 from '../img/phase-31.png';

const Details = () => {
	return (
		<section className="flex justify-center flex-1">
			<div className="py-20 responsive-width child:w-full flex flex-col gap-10">
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
	)
}

export default Details;
