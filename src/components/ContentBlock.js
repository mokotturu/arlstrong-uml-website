export default function ContentBlock({heading, text}) {
	return (
		<section>
			{heading !== '' && <h1 className="heading">{heading}</h1>}
			<div>
				{text.map((item, i) => (
					<p
						key={i}
						className="text-eerie-black-800 dark:text-white mb-8 last:mb-0"
					>
						{item}
					</p>
				))}
			</div>
		</section>
	)
}
