import Publication from "./Publication";

const publications = [
	{
		"heading": "Published or Accepted",
		"items": [
			{
				"title": "Reward-Sharing Relational Networks in Multi-Agent Reinforcement Learning as a Framework for Emergent Behavior",
				"authors": "Hossein Haeri, Reza Ahmadzadeh, Kshitij Jerath",
				"abstract": "In this work, we integrate 'social' interactions into the MARL setup through a user-defined relational network and examine the effects of agent-agent relations on the rise of emergent behaviors. Leveraging insights from sociology and neuroscience, our proposed framework models agent relationships using the notion of Reward-Sharing Relational Networks (RSRN), where network edge weights act as a measure of how much one agent is invested in the success of (or 'cares about') another. We construct relational rewards as a function of the RSRN interaction weights to collectively train the multi-agent system via a multi-agent reinforcement learning algorithm. The performance of the system is tested for a 3-agent scenario with different relational network structures (e.g., self-interested, communitarian, and authoritarian networks). Our results indicate that reward-sharing relational networks can significantly influence learned behaviors. We posit that RSRN can act as a framework where different relational networks produce distinct emergent behaviors, often analogous to the intuited sociological understanding of such networks.",
			},
			{
				"title": "Moral-Trust Violation vs Performance-Trust Violation by a Robot: Which Hurts More?",
				"authors": "Zahra Rezaei Khavas, Russell Perkins, Reza Ahmadzadeh, Paul Robinette",
			},
			{
				"title": "Trust Calibration and Trust Respect: A Method for Building Team Cohesion in Human Robot Teams",
				"authors": "Russell Perkins, Zahra Rezaei Khavas, Paul Robinette",
			},
		]
	},
	{
		"heading": "Submitted",
		"items": [
			{
				"title": "Multi-Agent Coverage Path Planning with Neighborhood and Loop-Awareness",
				"authors": "Alok Malik, Kshitij Jerath, Reza Ahmadzadeh",
			},
			{
				"title": "Employing Physiological Measurements for Trust Assessment in Human-Robot Interaction: Real-world challenges",
				"authors": "Zahra Rezaei Khavas, Reza Ahmadzadeh, Paul Robinette",
			},
			{
				"title": "Would Human Retaliation Strategy Vary Among Human and Robotic Teammates?",
				"authors": "Zahra Rezaei Khavas, Reza Ahmadzadeh, Paul Robinette",
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
