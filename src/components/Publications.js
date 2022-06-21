const publications = [
	{
		"heading": "Submitted",
		"set": [
			{
				"title": "Moral-Trust Violation vs Performance-Trust Violation by a Robot: Which Hurts More?",
				"authors": "Zahra Rezaei Khavas, Russel Perkins, S. Reza Ahmadzadeh, Paul Robinette"
			},
			{
				"title": "ZR Khavas, R Perkins, SR Ahmadzadeh, P Robinette - arXiv preprint arXiv:2110.04418, 2021",
			},
		]
	},
	{
		"heading": "Published or Accepted",
		"set": [
			{
				"title": "ZR Khavas, R Perkins, SR Ahmadzadeh, P Robinette - arXiv preprint arXiv:2110.04418, 2021",
			},
			{
				"title": "ZR Khavas, R Perkins, SR Ahmadzadeh, P Robinette - arXiv preprint arXiv:2110.04418, 2021",
			},
		]
	},
]

export default function Publications() {
	return (
		<section className="flex justify-center flex-1">
			<div className="py-20 responsive-width child:w-full">
				{publications.map((set, id) => (
					<section
						className="mb-32 last:mb-0"
						key={`publication-set-${id}`}
					>
						<h1 className="heading">{set.heading}</h1>
						<ol className="list-decimal list-outside ml-10">
							{set.set.map((item, i) => (
								<li
									key={`publication-${i}`}
									className="mb-2 last:mb-0 text-eerie-black-900"
								>
									<span className="relative left-4">{item.title}</span>
								</li>
							))}
						</ol>
					</section>
				))}
			</div>
		</section>
	)
}
