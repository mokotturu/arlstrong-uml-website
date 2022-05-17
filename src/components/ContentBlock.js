export default function ContentBlock({heading, text}) {
	return (
		<section className="flex flex-col items-center">
			<div className="flex flex-col items-center gap-12">
				{heading !== '' && <h1 className="text-4xl text-slate-800">{heading}</h1>}
				{text.map((item, i) => (
					<p
						key={i}
						className="text-slate-600"
					>
						{item}
					</p>
				))}
			</div>
		</section>
	);
}
