const Contact = () => {
	return (
		<section className="flex justify-center flex-1">
			<div className="responsive-width py-20 child:w-full flex flex-col gap-10">
				<h1 className="heading">Get in touch with us!</h1>
				<form name="contact-form" className="grid grid-cols-4 gap-4 items-center" method="post" data-netlify="true" action="/">
					<input type="hidden" name="form-name" value="contact-form" />
					<label htmlFor="name">Name</label>
					<input
						className="text-input w-full col-span-3"
						id="name"
						type="text"
						name="name"
						placeholder="Name"
					/>
					<label htmlFor="email">Email Address</label>
					<input
						className="text-input w-full col-span-3"
						id="email"
						type="email"
						name="email"
						placeholder="Email Address"
					/>
					<label htmlFor="message">Your Message</label>
					<textarea
						className="text-input w-full col-span-3 min-h-[2.625rem]"
						id="message"
						type="text"
						name="message"
						placeholder="Message"
						rows={5}
					></textarea>
					<button className="button w-32 col-span-full justify-self-center" type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
