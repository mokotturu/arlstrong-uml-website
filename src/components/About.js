import ContentBlock from "./ContentBlock";
import ParticlesBg from "./ParticlesBg";
import heroimg from "../images/hero.jpg"

function About() {
	return (
		<section>
			<ParticlesBg />
			<section className="h-screen bg-transprent flex justify-center items-center relative z-10">
				<div className="responsive-width flex flex-col items-center justify-center gap-8">
					<h1 className="heading text-5xl text-center">Strengthening Teamwork for Robust Operations in Novel Groups</h1>
					<a href="#main-content" className="button">Explore</a>
				</div>
			</section>
			<section className="flex justify-center items-center">
				<img src={heroimg} className="relative z-10 rounded-xl responsive-width object-cover" alt="ARL STRONG team members" />
			</section>
			<section id="main-content" className="flex justify-center items-center relative z-10">
				<div className="py-20 responsive-width child:w-full">
					<ContentBlock
						heading="This is a heading."
						text={[
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium ac orci vitae tincidunt. Vivamus placerat justo quis augue volutpat, at semper lacus auctor. Pellentesque id vehicula tortor, nec dictum nibh. In in suscipit metus. Vivamus non suscipit risus, sed facilisis ex. Nulla volutpat leo ac cursus auctor. Etiam consequat nisl fringilla, finibus sapien sed, lacinia massa. Maecenas lacinia leo id rutrum pellentesque. Donec feugiat justo sapien, eu varius enim cursus in. Cras nec quam orci. Ut gravida risus facilisis rutrum varius. Sed aliquam nibh sit amet est ultrices, et sagittis augue feugiat. Aliquam et arcu mollis, varius orci et, varius dolor.",
							"Vestibulum sed dolor ac velit interdum lobortis id quis nisi. Integer iaculis lectus quam. Etiam facilisis nunc et tortor semper scelerisque. In tincidunt eros sit amet arcu aliquet commodo. Duis tristique aliquam libero, vitae sodales leo faucibus id. Fusce ac elit vitae nisi porta facilisis quis quis metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a finibus odio. Nam sit amet laoreet enim. Donec faucibus eros tempor tortor porttitor, ac suscipit nisl congue. Praesent arcu neque, venenatis a luctus vulputate, pellentesque id ex. Etiam blandit blandit tempor. Duis vitae gravida diam. Sed gravida posuere libero, eu efficitur dolor sodales et.",
						]}
					/>
				</div>
			</section>
		</section>
	)
}

export default About;
