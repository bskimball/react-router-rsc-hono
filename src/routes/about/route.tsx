export default function About() {
	return (
		<div className="relative overflow-hidden">
			{/* Decorative background */}
			<div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-brand-secondary/5 blur-[120px] rounded-full" />

			<main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
				{/* Header */}
				<section className="text-center mb-16">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-brand-gradient">
						About This Template
					</h1>
					<p className="mt-4 text-lg text-foreground-muted max-w-2xl mx-auto">
						A production-ready starter for building modern web applications with Hono, React Router,
						and React Server Components.
					</p>
				</section>

				{/* Architecture Overview */}
				<section className="mb-16">
					<div className="glass rounded-2xl p-8 lg:p-12">
						<h2 className="text-2xl font-semibold text-foreground mb-6">Architecture</h2>
						<div className="space-y-6 text-foreground-muted leading-relaxed">
							<p>
								This template combines three powerful technologies to create a modern, efficient web
								application stack:
							</p>

							<ul className="space-y-4 ml-4">
								<li className="flex items-start gap-3">
									<span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
									<span>
										<strong className="text-foreground">Hono</strong> — An ultra-fast, lightweight
										web framework that handles all server-side routing, middleware, and HTTP
										concerns with minimal overhead.
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
									<span>
										<strong className="text-foreground">React Router 7</strong> — The definitive
										routing solution for React applications, providing data loading, mutations,
										navigation state management, and more.
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 flex-shrink-0" />
									<span>
										<strong className="text-foreground">React Server Components (RSC)</strong>— A
										React feature that allows components to render exclusively on the server,
										enabling direct data access, reduced bundle sizes, and improved performance.
									</span>
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Key Features Grid */}
				<section className="mb-16">
					<h2 className="text-2xl font-semibold text-foreground mb-8">Key Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="glass rounded-xl p-6">
							<h3 className="text-lg font-semibold text-foreground mb-2">TypeScript Native</h3>
							<p className="text-foreground-muted text-sm">
								Built with TypeScript from the ground up. Every API, route, and component is fully
								typed, providing excellent IDE support and catching errors at build time.
							</p>
						</div>

						<div className="glass rounded-xl p-6">
							<h3 className="text-lg font-semibold text-foreground mb-2">File-Based Routing</h3>
							<p className="text-foreground-muted text-sm">
								Routes are automatically generated from files in the{" "}
								<code className="bg-surface px-1.5 py-0.5 rounded text-brand-primary">
									src/routes
								</code>{" "}
								directory. Create a new file, and your route is live instantly.
							</p>
						</div>

						<div className="glass rounded-xl p-6">
							<h3 className="text-lg font-semibold text-foreground mb-2">Vite Powered</h3>
							<p className="text-foreground-muted text-sm">
								Lightning-fast HMR with Vite. Changes appear instantly during development, with
								optimized production builds powered by Rolldown.
							</p>
						</div>

						<div className="glass rounded-xl p-6">
							<h3 className="text-lg font-semibold text-foreground mb-2">No Configuration</h3>
							<p className="text-foreground-muted text-sm">
								Everything works out of the box. No webpack configs, no babel setup. Just install
								dependencies and start building.
							</p>
						</div>
					</div>
				</section>

				{/* How It Works */}
				<section className="mb-16">
					<div className="glass rounded-2xl p-8 lg:p-12">
						<h2 className="text-2xl font-semibold text-foreground mb-6">How It Works</h2>

						<div className="space-y-8">
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center font-semibold text-sm">
									1
								</div>
								<div>
									<h3 className="font-semibold text-foreground">Request Handling</h3>
									<p className="text-foreground-muted text-sm mt-1">
										Hono receives the incoming HTTP request and runs any middleware (auth, logging,
										CORS, etc.).
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center font-semibold text-sm">
									2
								</div>
								<div>
									<h3 className="font-semibold text-foreground">Route Resolution</h3>
									<p className="text-foreground-muted text-sm mt-1">
										React Router matches the URL to a route and determines what needs to render.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center font-semibold text-sm">
									3
								</div>
								<div>
									<h3 className="font-semibold text-foreground">Server Rendering</h3>
									<p className="text-foreground-muted text-sm mt-1">
										React Server Components execute on the server, fetching data and rendering to
										HTML or the RSC payload format.
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center font-semibold text-sm">
									4
								</div>
								<div>
									<h3 className="font-semibold text-foreground">Client Hydration</h3>
									<p className="text-foreground-muted text-sm mt-1">
										Client Components are hydrated where needed, adding interactivity to the
										server-rendered page.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Getting Started */}
				<section>
					<div className="glass rounded-2xl p-8 lg:p-12">
						<h2 className="text-2xl font-semibold text-foreground mb-6">Getting Started</h2>

						<div className="space-y-4">
							<div className="glass-strong rounded-lg p-4 font-mono text-sm">
								<p className="text-foreground-muted">
									<span className="text-brand-primary">$</span> npm install
								</p>
								<p className="text-foreground-muted mt-2">
									<span className="text-brand-primary">$</span> npm run dev
								</p>
							</div>

							<p className="text-foreground-muted">
								Your application will be available at{" "}
								<code className="bg-surface px-1.5 py-0.5 rounded text-brand-primary">
									http://localhost:5173
								</code>
								. Edit files in{" "}
								<code className="bg-surface px-1.5 py-0.5 rounded text-brand-primary">
									src/routes
								</code>{" "}
								to see changes instantly.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
