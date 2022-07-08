import Publication from "./Publication";

const publications = [
	{
		"heading": "Publications",
		"items": [
			{
				"pathName": "https://ala2021.vub.ac.be/papers/ALA2021_paper_16.pdf",
				"title": "Reward-Sharing Relational Networks in Multi-Agent Reinforcement Learning as a Framework for Emergent Behavior",
				"authors": "Hossein Haeri, Reza Ahmadzadeh, Kshitij Jerath",
				"abstract": "In this work, we integrate 'social' interactions into the MARL setup through a user-defined relational network and examine the effects of agent-agent relations on the rise of emergent behaviors. Leveraging insights from sociology and neuroscience, our proposed framework models agent relationships using the notion of Reward-Sharing Relational Networks (RSRN), where network edge weights act as a measure of how much one agent is invested in the success of (or 'cares about') another. We construct relational rewards as a function of the RSRN interaction weights to collectively train the multi-agent system via a multi-agent reinforcement learning algorithm. The performance of the system is tested for a 3-agent scenario with different relational network structures (e.g., self-interested, communitarian, and authoritarian networks). Our results indicate that reward-sharing relational networks can significantly influence learned behaviors. We posit that RSRN can act as a framework where different relational networks produce distinct emergent behaviors, often analogous to the intuited sociological understanding of such networks.",
			},
			{
				"pathName": "https://arxiv.org/abs/2110.04418",
				"title": "Moral-Trust Violation vs Performance-Trust Violation by a Robot: Which Hurts More?",
				"authors": "Zahra Rezaei Khavas, Russell Perkins, Reza Ahmadzadeh, Paul Robinette",
				"abstract": "In recent years a modern conceptualization of trust in human-robot interaction (HRI) was introduced by Ullman et al.(Ullman and Malle 2018). This new conceptualization of trust suggested that trust between humans and robots is multidimensional, incorporating both performance aspects (i.e., similar to the trust in human-automation interaction) and moral aspects (i.e., similar to the trust in human-human interaction). But how does a robot violating each of these different aspects of trust affect human trust in a robot? How does trust in robots change when a robot commits a moral-trust violation compared to a performance-trust violation? And whether physiological signals have the potential to be used for assessing gain/loss of each of these two trust aspects in a human. We aim to design an experiment to study the effects of performance-trust violation and moral-trust violation separately in a search and rescue task. We want to see whether two failures of a robot with equal magnitudes would affect human trust differently if one failure is due to a performance-trust violation and the other is a moral-trust violation.",
			},
			{
				"pathName": "https://arxiv.org/abs/2110.06809",
				"title": "Trust Calibration and Trust Respect: A Method for Building Team Cohesion in Human Robot Teams",
				"authors": "Russell Perkins, Zahra Rezaei Khavas, Paul Robinette",
				"abstract": "Recent advances in the areas of human-robot interaction (HRI) and robot autonomy are changing the world. Today robots are used in a variety of applications. People and robots work together in human autonomous teams (HATs) to accomplish tasks that, separately, cannot be easily accomplished. Trust between robots and humans in HATs is vital to task completion and effective team cohesion. For optimal performance and safety of human operators in HRI, human trust should be adjusted to the actual performance and reliability of the robotic system. The cost of poor trust calibration in HRI, is at a minimum, low performance, and at higher levels it causes human injury or critical task failures. While the role of trust calibration is vital to team cohesion it is also important for a robot to be able to assess whether or not a human is exhibiting signs of mistrust due to some other factor such as anger, distraction or frustration. In these situations the robot chooses not to calibrate trust, instead the robot chooses to respect trust. The decision to respect trust is determined by the robots knowledge of whether or not a human should trust the robot based on its actions(successes and failures) and its feedback to the human. We show that the feedback in the form of trust calibration cues(TCCs) can effectively change the trust level in humans. This information is potentially useful in aiding a robot it its decision to respect trust.",
			},
		]
	},
]

const Publications = () => {
	return (
		<section className="flex justify-center flex-1">
			<div className="py-20 responsive-width child:w-full">
				{publications.map((set, id) => (
					<section
						className="mb-32 last:mb-0"
						key={`publication-set-${id}`}
					>
						<h1 className="heading">{set.heading}</h1>
						<div className="flex flex-col gap-8">
							{set.items.map((item, i) => (
								<Publication
									key={`publication-${i}`}
									pathName={item.pathName}
									title={item.title}
									authors={item.authors}
									abstract={item.abstract}
								/>
							))}
						</div>
					</section>
				))}
			</div>
		</section>
	)
}

export default Publications;
