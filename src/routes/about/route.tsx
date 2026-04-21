function ImprintNumber({ number, color }: { number: number; color: string }) {
	return (
		<div
			className={`flex-shrink-0 w-12 h-12 border-4 border-black flex items-center justify-center font-display font-bold text-xl bg-[var(--color-bauhaus-${color})] shadow-[4px_4px_0px_0px_#111]`}
		>
			{number}
		</div>
	);
}

function ArchitectureCard({
	title,
	description,
	tag,
	color,
}: {
	title: string;
	description: string;
	tag?: string;
	color: string;
}) {
	return (
		<div className="bauhaus-card p-8 bg-white relative group">
			<div className={`absolute top-0 left-0 w-2 h-full bg-[var(--color-bauhaus-${color})]`} />
			<div className="flex items-center justify-between mb-4">
				<h3 className="font-heading font-bold text-2xl uppercase tracking-tight">{title}</h3>
				{tag && (
					<span className="px-3 py-1 text-xs font-heading font-bold uppercase tracking-widest bg-black text-white">
						{tag}
					</span>
				)}
			</div>
			<p className="text-gray-700 leading-relaxed font-body">{description}</p>
		</div>
	);
}

export default function About() {
	return (
		<div className="relative overflow-hidden min-h-screen selection:bg-[var(--color-bauhaus-yellow)] selection:text-black">
			{/* Decorative geometric background elements */}
			<div className="fixed top-40 left-10 w-48 h-48 border-8 border-black pointer-events-none opacity-5 z-0" />
			<div className="fixed bottom-40 right-10 w-64 h-64 bg-[var(--color-bauhaus-red)] rounded-full pointer-events-none opacity-5 z-0" />

			<div className="relative z-10">
				{/* Hero */}
				<section className="pt-24 pb-16 px-6 bg-[var(--color-bg-cream)] border-b-4 border-black">
					<div className="max-w-4xl mx-auto text-center">
						<div className="inline-flex gap-4 mb-8">
							<div className="w-6 h-6 bg-[var(--color-bauhaus-red)] rounded-full border-2 border-black" />
							<div className="w-6 h-6 bg-[var(--color-bauhaus-blue)] border-2 border-black" />
							<div className="w-6 h-6 bg-[var(--color-bauhaus-yellow)] border-2 border-black" />
						</div>
						<h1 className="font-display font-bold text-5xl sm:text-6xl uppercase tracking-tighter mb-8">
							The <span className="text-[var(--color-bauhaus-blue)]">Foundation</span>
						</h1>
						<p className="text-xl text-gray-800 font-body max-w-2xl mx-auto leading-relaxed border-t-4 border-black pt-8">
							A production-ready architecture built on functional principles. We've stripped away
							the excess to provide a stack that performs with geometric precision.
						</p>
					</div>
				</section>

				{/* The Three Pillars Detail */}
				<section className="py-24 px-6 bg-white border-b-4 border-black">
					<div className="max-w-5xl mx-auto">
						<h2 className="font-display font-bold text-3xl uppercase tracking-tight text-center mb-16">
							Structural Integrity
						</h2>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<ArchitectureCard
								title="Hono"
								tag="Server"
								color="blue"
								description="The minimalist backbone. An ultra-fast, lightweight web framework that handles routing and middleware with zero bloat."
							/>
							<ArchitectureCard
								title="RR7"
								tag="Routing"
								color="yellow"
								description="The navigational system. Definitive routing, data loading, and mutations integrated into the core architecture."
							/>
							<ArchitectureCard
								title="RSC"
								tag="Render"
								color="red"
								description="The efficient output. Components render on the server, shipping pure HTML and eliminating unnecessary client-side weight."
							/>
						</div>
					</div>
				</section>

				{/* How It Works */}
				<section className="py-24 px-6 bg-[var(--color-bg-cream)] border-b-4 border-black">
					<div className="max-w-4xl mx-auto">
						<div className="bauhaus-card bg-white p-8 md:p-16">
							<h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-12 border-b-8 border-[var(--color-bauhaus-red)] pb-4 inline-block">
								Operational Flow
							</h2>

							<div className="space-y-12 relative">
								{/* Connecting line */}
								<div className="absolute left-6 top-6 bottom-6 w-1 bg-black hidden md:block" />

								<div className="flex gap-8 items-start relative z-10">
									<ImprintNumber number={1} color="red" />
									<div>
										<h3 className="font-heading font-bold text-xl uppercase tracking-tight mb-2">
											Ingestion
										</h3>
										<p className="text-gray-700 font-body">
											Hono receives the incoming HTTP request and runs foundational middleware —
											security, logging, and state.
										</p>
									</div>
								</div>

								<div className="flex gap-8 items-start relative z-10">
									<ImprintNumber number={2} color="blue" />
									<div>
										<h3 className="font-heading font-bold text-xl uppercase tracking-tight mb-2">
											Routing
										</h3>
										<p className="text-gray-700 font-body">
											React Router resolves the intent, executes loaders, and maps the request to
											the correct functional component.
										</p>
									</div>
								</div>

								<div className="flex gap-8 items-start relative z-10">
									<ImprintNumber number={3} color="yellow" />
									<div>
										<h3 className="font-heading font-bold text-xl uppercase tracking-tight mb-2">
											Construction
										</h3>
										<p className="text-gray-700 font-body">
											React Server Components execute directly, fetching data and rendering the
											initial view without shipping client JS.
										</p>
									</div>
								</div>

								<div className="flex gap-8 items-start relative z-10">
									<ImprintNumber number={4} color="black" />
									<div className="text-white">
										<div className="bg-black p-6 shadow-[8px_8px_0px_0px_var(--color-bauhaus-blue)]">
											<h3 className="font-heading font-bold text-xl uppercase tracking-tight mb-2">
												Interaction
											</h3>
											<p className="text-gray-400 font-body text-sm">
												Client components hydrate only where function dictates, adding interactivity
												as an enhancement, not a requirement.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Characteristics */}
				<section className="py-24 px-6 bg-white border-b-4 border-black">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{ title: "TypeScript", icon: "◈", color: "blue" },
								{ title: "File-Based", icon: "⚡", color: "yellow" },
								{ title: "Vite Power", icon: "✦", color: "red" },
								{ title: "Zero Config", icon: "◉", color: "black" },
							].map((item) => (
								<div key={item.title} className="bauhaus-card p-8 text-center group bg-white">
									<div
										className={`text-5xl mb-6 transition-transform group-hover:scale-125 duration-300 inline-block text-[var(--color-bauhaus-${item.color === "black" ? "red" : item.color})]`}
									>
										{item.icon}
									</div>
									<h3 className="font-heading font-bold uppercase tracking-widest text-sm">
										{item.title}
									</h3>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Getting Started */}
				<section className="py-24 px-6 bg-[var(--color-bauhaus-blue)]">
					<div className="max-w-4xl mx-auto">
						<div className="bauhaus-card bg-white p-8 md:p-12 relative overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-bauhaus-yellow)] -translate-y-1/2 translate-x-1/2 rotate-45 border-4 border-black" />

							<h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-8">
								Commence
							</h2>

							<div className="bg-black p-8 shadow-[8px_8px_0px_0px_var(--color-bauhaus-red)] mb-8">
								<pre className="font-mono text-white leading-relaxed">
									<code>{`npm install
npm run dev`}</code>
								</pre>
							</div>

							<p className="text-gray-800 font-body font-bold text-center">
								Access the system at <code className="bg-gray-100 px-2 py-1">localhost:5173</code>
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
