import { Link } from "react-router";

export default function Home() {
	return (
		<div className="relative overflow-hidden">
			{/* Decorative background element */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full bg-brand-primary/5 blur-[120px] rounded-full" />

			<main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
				{/* Hero Section */}
				<section className="text-center">
					<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-brand-gradient">
						Welcome to React Router RSC
					</h1>
					<p className="mt-6 text-lg sm:text-xl text-foreground-muted max-w-2xl mx-auto">
						Experience the future of web development with React Server Components (RSC) powered by
						Vite and React Router. Lightning fast, type-safe, and incredibly seamless.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<Link
							to="/about"
							className="bg-brand-gradient text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-brand-primary/25"
						>
							Get Started
						</Link>
						<Link
							to="/about"
							className="bg-surface border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-surface-elevated transition-colors"
						>
							Learn More
						</Link>
					</div>
				</section>

				{/* Feature Grid Section */}
				<section className="mt-20 lg:mt-32">
					<h2 className="text-2xl font-semibold text-foreground text-center mb-12">
						Built for Modern Web
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{/* Feature 1 */}
						<div className="glass rounded-xl p-6 hover:border-brand-primary/30 transition-colors duration-300">
							<div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
									/>
								</svg>
							</div>
							<h3 className="mt-4 text-lg font-semibold text-foreground">
								React Server Components
							</h3>
							<p className="mt-2 text-foreground-muted text-sm leading-relaxed">
								Fresh, server-rendered UI with zero client JS for the parts that don't need it.
								Faster initial loads and better performance.
							</p>
						</div>

						{/* Feature 2 */}
						<div className="glass rounded-xl p-6 hover:border-brand-primary/30 transition-colors duration-300">
							<div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
									/>
								</svg>
							</div>
							<h3 className="mt-4 text-lg font-semibold text-foreground">Vite Powered</h3>
							<p className="mt-2 text-foreground-muted text-sm leading-relaxed">
								Experience lightning-fast HMR and optimized production builds with the
								industry-standard build tool.
							</p>
						</div>

						{/* Feature 3 */}
						<div className="glass rounded-xl p-6 hover:border-brand-primary/30 transition-colors duration-300">
							<div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="mt-4 text-lg font-semibold text-foreground">Type-Safe Routing</h3>
							<p className="mt-2 text-foreground-muted text-sm leading-relaxed">
								End-to-end type safety with React Router 7, ensuring your data loading and
								navigation are always correct.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
