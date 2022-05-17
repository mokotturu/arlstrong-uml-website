// import heroimg from "../images/hero_copy.jpg";

export default function Hero() {
	return (
		<section className={`hero--container`}>
			{/* <div className="h-screen bg-no-repeat bg-cover bg-center brightness-50" style={{ backgroundImage: `url(${heroimg})`}}></div> */}
			<div className="h-screen bg-no-repeat bg-cover bg-center brightness-50" style={{ backgroundImage: `url('https://via.placeholder.com/1920x1000.webp?text=Placeholder+Image')`}}></div>
		</section>
	);
}
