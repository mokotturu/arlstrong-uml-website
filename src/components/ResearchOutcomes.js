const ResearchOutcomes = () => {
	return (
		<section className="flex justify-center flex-1">
			<div className="flex flex-col items-center">
				<div className="py-20 responsive-width child:w-full">
					<h1 className="heading">Presentations</h1>
					<div className="flex flex-col w-full gap-8 child:w-full">
						<iframe title="Alok's Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vSXm9MzJHmFsLZfE4Sz99PlGYOhGt7-eDTjvY1nm1n7NJe0sIQh7HfY7oFG0PGl_Ako94pbVxEZp-KF/embed?start=false&loop=true&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" className="bg-neutral-100 rounded-md"></iframe>
						<iframe title="Saba's Presentation" src="https://docs.google.com/presentation/d/e/2PACX-1vSR04IVGFSs-Aa86DNaJ5mtQroB-xmaZHelzdEyAuTKipZPGQBHM61fPA8YAprK0NrogU51-uGl3rbT/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true" className="bg-neutral-100 rounded-md"></iframe>
						<p>View Hamid's full presentation about his work <a className="link" href="https://studentuml-my.sharepoint.com/:p:/g/personal/monishreddy_kotturu_student_uml_edu/EfmybxbBrsBHl95wO0vmzSQBYtP7LXj_VsWUFFpj39BpNw" target="_blank" rel="noopener noreferrer">here</a>.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ResearchOutcomes;
