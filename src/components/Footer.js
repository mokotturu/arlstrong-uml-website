export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="w-full px-12 py-12 flex flex-col justify-center items-center gap-8 bg-white dark:bg-eerie-black-900 border-t text-eerie-black-900 dark:text-white transition-all duration-150">
			<p className="text-center">&copy; {year} ARL STRONG - University of Massachusetts Lowell</p>
		</footer>
	)
}
