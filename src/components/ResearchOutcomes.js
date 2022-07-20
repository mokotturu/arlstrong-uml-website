import framework from "../img/framework.png";
import relationalNetworks from "../img/relational-networks.png";
import rsrnDemo from "../videos/RSRN_Demo.mp4";

const ResearchOutcomes = () => {
	return (
		<section className="flex justify-center flex-1">
			<div className="flex flex-col">
				<div className="py-20 responsive-width flex flex-col items-center">
					<h1 className="heading mb-16 w-full">Reward-Sharing Relational Networks in Multi-Agent Reinforcement Learning as a Framework for Emergent Behavior</h1>
					<img className="w-1/2 rounded-md" src={framework} alt="Framework" />
					<p className="my-12">The proposed framework adds a reward sharing block to a typical MARL flow diagram which takes a vector of individual rewards and a user-defined relational network as inputs and gives a vector of shared rewards to the policy optimizer.</p>
					<img className="w-3/4 rounded-md" src={relationalNetworks} alt="Relational Networks" />
					<p className="my-12">Each of these relational networks is used as an RSRN in the 3-agent MARL system, and the resulting emergent behaviors are examined in Section 5. An agent's actions maymbe governed by the rewards obtained by more than one agent (including itself). An arrow from an agent to itself indicates its actions would maximize the rewards it obtains for itself. An arrow directed from a first agent to a second represents that the first agent's actions are governed by the rewards obtained by the second agent, i.e. an agent it 'cares' about.</p>
					<video controls className="rounded-md">
						<source src={rsrnDemo} type="video/mp4"></source>
						Sorry, your browser doesn't support embedded videos.
					</video>
					<p className="text-center text-sm my-4">3 agents try to cover 3 landmarks while agent 3 (yellow) is systematically slowed down by limiting its possible actions.</p>
				</div>
				<p className="mt-8 mb-16">Please refer to the Publications page for more outcomes on trust in human-robot interaction.</p>
			</div>
		</section>
	)
}

export default ResearchOutcomes;
