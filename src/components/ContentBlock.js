export default function ContentBlock({heading, text}) {
	return (
		<section>
			{heading !== '' && <h1 className="heading text-eerie-black-900">{heading}</h1>}
			<div>
				{text.map((item, i) => (
					<p
						key={i}
						className="text-eerie-black-800 mb-8 last:mb-0"
					>
						{item}
					</p>
				))}
			</div>
		</section>
	)
}
