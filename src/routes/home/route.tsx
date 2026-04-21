import { Link } from "react-router";

function FeatureCard({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
}) {
	return (
		<div className="glass rounded-xl p-6 hover:border-brand-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-1">
			<div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary">
				{icon}
			</div>
			<h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
			<p className="mt-2 text-foreground-muted text-sm leading-relaxed">{description}</p>
		</div>
	);
}

function CodeBlock({ code, title }: { code: string; title?: string }) {
	return (
		<div className="glass-strong rounded-lg overflow-hidden">
			{title && (
				<div className="px-4 py-2 bg-surface border-b border-border flex items-center gap-2">
					<div className="flex gap-1.5">
						<div className="w-3 h-3 rounded-full bg-red-500/80" />
						<div className="w-3 h-3 rounded-full bg-yellow-500/80" />
						<div className="w-3 h-3 rounded-full bg-green-500/80" />
					</div>
					<span className="ml-2 text-xs text-foreground-muted font-mono">{title}</span>
				</div>
			)}
			<div className="p-4 overflow-x-auto">
				<pre className="font-mono text-sm text-foreground-muted">
					<code>{code}</code>
				</pre>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="relative overflow-hidden">
			{/* Decorative background elements */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full bg-brand-primary/5 blur-[120px] rounded-full" />
			<div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-secondary/10 blur-[100px] rounded-full" />

			<main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
				{/* Hero Section */}
				<section className="text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-6">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
							<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
						</span>
						Hono + React Router RSC
					</div>
					<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-brand-gradient">
						The Perfect Stack
					</h1>
					<p className="mt-6 text-lg sm:text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
						Build modern web applications with <strong>Hono</strong> on the server,{" "}
						<strong>React Router 7</strong> for routing, and{" "}
						<strong>React Server Components</strong> for zero-JavaScript rendering. Fast,
						lightweight, and type-safe.
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<Link
							to="/about"
							className="bg-brand-gradient text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-brand-primary/25"
						>
							Learn More
						</Link>
						<Link
							to="https://hono.dev"
							target="_blank"
							rel="noreferrer"
							className="bg-surface border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-surface-elevated transition-colors"
						>
							Hono Docs
						</Link>
					</div>
				</section>

				{/* Stack Overview */}
				<section className="mt-16 lg:mt-24">
					<div className="glass rounded-2xl p-6 lg:p-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
							<div className="relative">
								<div className="w-16 h-16 mx-auto rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-8 h-8 text-brand-primary"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-foreground">Hono</h3>
								<p className="mt-2 text-sm text-foreground-muted">
									Ultra-fast web framework for the edge. Lightweight, type-safe, and
									middleware-ready.
								</p>
							</div>

							<div className="relative">
								<div className="w-16 h-16 mx-auto rounded-2xl bg-brand-secondary/10 flex items-center justify-center mb-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-8 h-8 text-brand-secondary"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-foreground">React Router</h3>
								<p className="mt-2 text-sm text-foreground-muted">
									The definitive routing solution for React. Data loading, mutations, and more.
								</p>
							</div>

							<div className="relative">
								<div className="w-16 h-16 mx-auto rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-8 h-8 text-brand-accent"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 01m-3 3a3 3 0 01m-3 3a3 3 0 01m-3 3h18M5.25 5.25h13.5"
										/>
									</svg>
								</div>
								<h3 className="text-xl font-semibold text-foreground">RSC</h3>
								<p className="mt-2 text-sm text-foreground-muted">
									React Server Components render on the server. No client JS for static content.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Why This Stack */}
				<section className="mt-20 lg:mt-32">
					<div className="text-center mb-12">
						<h2 className="text-2xl lg:text-3xl font-semibold text-foreground">Why This Stack?</h2>
						<p className="mt-3 text-foreground-muted max-w-xl mx-auto">
							The best parts of modern web development, combined.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<FeatureCard
							title="Server-First Architecture"
							description="Hono handles HTTP requests and server-side logic with minimal overhead. Renders React Server Components directly without extra server frameworks."
							icon={
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
										d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 01m-3 3a3 3 0 01m-3 3a3 3 0 01m-3 3h18M5.25 5.25h13.5"
									/>
								</svg>
							}
						/>

						<FeatureCard
							title="Zero JavaScript by Default"
							description="React Server Components render entirely on the server. Static content ships as HTML only — no hydration needed for content that doesn't need it."
							icon={
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
							}
						/>

						<FeatureCard
							title="Type-Safe End to End"
							description="Hono's type-safe middleware and React Router's typed loaders work together. Catch errors at build time, not runtime."
							icon={
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
							}
						/>

						<FeatureCard
							title="Progressive Enhancement"
							description="Add interactivity where you need it with Client Components. The rest stays on the server. It's the best of both worlds."
							icon={
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
										d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
									/>
								</svg>
							}
						/>
					</div>
				</section>

				{/* Code Examples */}
				<section className="mt-20 lg:mt-32">
					<h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
						See It in Action
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<CodeBlock
							title="server.ts"
							code={`import { Hono } from 'hono';
import { reactRouter } from '@react-router/node';

const app = new Hono();

// Hono middleware
app.use('/api/*', async (c, next) => {
  // Auth, logging, etc.
  await next();
});

// React Router handler
app.use('*', reactRouter({
  mode: 'production',
  // RSC configuration
}));

export default app;`}
						/>

						<CodeBlock
							title="routes/page.tsx (Server Component)"
							code={`// This runs on the server — zero client JS
export default async function Page() {
  const posts = await db.query(
    'SELECT * FROM posts LIMIT 10'
  );

  return (
    <main>
      <h1>Latest Posts</h1>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}`}
						/>
					</div>
				</section>
			</main>
		</div>
	);
}
