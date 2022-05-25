import heroimg from "../images/hero.jpg";

export default function Hero() {
	return (
		<section className={`hero--container`}>
			{/* <div className="h-screen bg-no-repeat bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${heroimg})`}}></div> */}
			{/* <div className="h-screen bg-no-repeat bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${heroimg})`}}></div> */}
			<img src={heroimg} className="w-full object-cover lg:h-screen" alt="ARL STRONG team members" />
		</section>
	)
}
