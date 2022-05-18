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
			<div className="py-20 w-[100%] lg:w-[60em] xl:w-[70em] 2xl:w-[80em] child:w-full">
				{publications.map((set, id) => (
					<section
						className="mb-16"
						key={`publication-set-${id}`}
					>
						<h1 className="text-4xl text-slate-800 mb-8">{set.heading}</h1>
						<ol className="list-decimal list-inside ml-4">
							{set.set.map((item, i) => (
								<li
								key={`publication-${i}`}
								>
									<span className="ml-2">{item.citation}</span>
								</li>
							))}
						</ol>
					</section>
				))}
			</div>
		</section>
	);
}
