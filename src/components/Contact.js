const Contact = () => {
	return (
		<section className="flex justify-center flex-1">
			<div className="responsive-width py-20 child:w-full flex flex-col gap-10">
				<h1 className="heading">Get in touch with us!</h1>
				<form className="flex flex-col items-center" method="POST" data-netlify="true">
					<input className="text-input mb-4 w-full" type="text" name="name" placeholder="Name"></input>
					<input className="text-input mb-4 w-full" type="email" name="email" placeholder="Email Address"></input>
					<textarea className="text-input mb-4 w-full min-h-[2.625rem]" type="text" name="message" placeholder="Message" rows={5}></textarea>
					<input className="button w-32" type="submit" value="Submit"></input>
				</form>
			</div>
		</section>
	);
}

export default Contact;
