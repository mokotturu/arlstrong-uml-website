const publications = [
	{
		"heading": "Publications Set 1",
		"set": [
			{
				"citation": "ZR Khavas, R Perkins, SR Ahmadzadeh, P Robinette - arXiv preprint arXiv:2110.04418, 2021",
				"url": "#",
			},
			{
				"citation": "ZR Khavas, R Perkins, SR Ahmadzadeh, P Robinette - arXiv preprint arXiv:2110.04418, 2021",
				"url": "#",
			},
		]
	},
	{
		"heading": "Publications Set 2",
		"set": [
			{
				"citation": "ZR Khavas, R Perkins, SR Ahmadzadeh, P Robinette - arXiv preprint arXiv:2110.04418, 2021",
				"url": "#",
			},
			{
				"citation": "ZR Khavas, R Perkins, SR Ahmadzadeh, P Robinette - arXiv preprint arXiv:2110.04418, 2021",
				"url": "#",
			},
		]
	},
]

export default function Publications() {
	return (
		<section className="flex justify-center items-center">
			<div className="py-20 responsive-width child:w-full">
				{publications.map((set, id) => (
					<section
						className="mb-16 last:mb-0"
						key={`publication-set-${id}`}
					>
						<h1 className="heading text-eerie-black-900">{set.heading}</h1>
						<ol className="list-decimal list-inside ml-4">
							{set.set.map((item, i) => (
								<li
									key={`publication-${i}`}
									className="mb-2 last:mb-0 text-slate-grey"
								>
									<span className="ml-2">{item.citation}</span>
								</li>
							))}
						</ol>
					</section>
				))}
			</div>
		</section>
	)
}
