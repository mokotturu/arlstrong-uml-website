import humanAgentTeamImg from "../images/human-agent-team.png";

export default function Details() {
	return (
		<section className="flex justify-center flex-1">
			<div className="py-20 responsive-width">
				<h1 className="heading">Tasks</h1>
				<p className="text-eerie-black-800 mb-8">
					We solve three tasks in the proposed work to achieve the research objective:
				</p>
				<ol className="list-decimal list-outside mb-8">
					<li className="ml-10 mb-2"><span className="relative left-4">Task 1: Microscopic-scale task learning in a team environment that are governed by an individual's resource constraints</span></li>
					<li className="ml-10 mb-2"><span className="relative left-4">Task 2: Modeling interaction between entities (humans or agents) that depend on dynamic models of trust and are based on quality of shared information</span></li>
					<li className="ml-10"><span className="relative left-4">Task 3: Experimentally validate the relationship between microscopic-scale indivbidual resource constraint profile and emergence of trust clusters via design of experiments approach</span></li>
				</ol>
				<p className="text-eerie-black-800 mb-8">
					In the proposed work, we use the notion of 'complexity profile' to identify the level of complexity that an entity (or team) can continue to learn at or manage, under varying levels of resource constraints. We implement novel multi-agent reinforcement learning strategies to achieve proficiency in taskwork at fast timescales (i.e., learning to complete the search and rescue task), while leveraging dynamical models of trust based on quality of shared information to produce emergent trust clusters at slower time scales (i.e., building team cohesion and confidence in team memebers abilities). Online search and rescue simulations with human participants will be used to experimentally validate the impact of complexity profiles on the emergence of trust clusters and team performance metrics using a design of experiments approach.
				</p>
				<section className="flex flex-col justify-center items-center">
					<img src={humanAgentTeamImg} alt="Human Agent Team" className="w-3/5" />
					<p className="w-3/4">Fig 1. Teams evolve at multiple time scales. Complexity profiles (top right) of individual entities govern the ability to learn complex tasks at fast time scales. Sharing of information (i.e. search and rescue trajectories) between entities depends on dynamic models of trust (trust profiles) and is based on quality of shared information. Resulting emergent trust clusters and teamwork appear at slower timescales.</p>
				</section>
			</div>
		</section>
	)
}
