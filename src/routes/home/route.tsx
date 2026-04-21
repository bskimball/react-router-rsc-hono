import { Link } from "react-router";

// Geometric Icon Component
function GeoIcon({
	type,
	color,
}: {
	type: "circle" | "square" | "triangle" | "semi";
	color: string;
}) {
	const colors: Record<string, string> = {
		red: "bg-[var(--color-bauhaus-red)]",
		blue: "bg-[var(--color-bauhaus-blue)]",
		yellow: "bg-[var(--color-bauhaus-yellow)]",
		black: "bg-[var(--color-bauhaus-black)]",
	};

	const bg = colors[color] || colors.black;

	switch (type) {
		case "circle":
			return <div className={`w-16 h-16 rounded-full ${bg} border-4 border-black`} />;
		case "square":
			return <div className={`w-16 h-16 ${bg} border-4 border-black`} />;
		case "triangle":
			return (
				<div className="relative w-16 h-16 flex items-center justify-center">
					<div
						className={`w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[56px] ${color === "red" ? "border-b-[var(--color-bauhaus-red)]" : color === "blue" ? "border-b-[var(--color-bauhaus-blue)]" : "border-b-[var(--color-bauhaus-yellow)]"}`}
					/>
					<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 64 64">
						<polygon
							points="32,4 64,60 0,60"
							fill="none"
							stroke="var(--color-bauhaus-black)"
							strokeWidth="6"
							strokeLinejoin="miter"
						/>
					</svg>
				</div>
			);
		case "semi":
			return <div className={`w-16 h-8 rounded-t-full ${bg} border-4 border-b-0 border-black`} />;
		default:
			return <div className={`w-16 h-16 ${bg} border-4 border-black`} />;
	}
}

// Feature card with Bauhaus styling
function BauCard({
	title,
	description,
	shapeType,
	shapeColor,
}: {
	title: string;
	description: string;
	shapeType: "circle" | "square" | "triangle" | "semi";
	shapeColor: string;
}) {
	return (
		<div className="bauhaus-card p-8 flex flex-col h-full bg-white relative overflow-hidden group">
			{/* Decorative background grid pattern */}
			<div
				className="absolute inset-0 opacity-10 pointer-events-none z-0"
				style={{
					backgroundImage:
						"linear-gradient(var(--color-bauhaus-black) 2px, transparent 2px), linear-gradient(90deg, var(--color-bauhaus-black) 2px, transparent 2px)",
					backgroundSize: "20px 20px",
				}}
			/>

			<div className="mb-8 z-10 relative">
				<GeoIcon type={shapeType} color={shapeColor} />
			</div>

			<h3 className="font-heading font-bold text-2xl text-black mb-4 z-10 uppercase tracking-tight">
				{title}
			</h3>
			<p className="text-gray-700 text-base leading-relaxed font-body z-10 flex-grow">
				{description}
			</p>

			{/* Decorative bold bottom border that expands on hover */}
			<div
				className={`absolute bottom-0 left-0 h-2 w-full transition-all duration-300 group-hover:h-4 bg-[var(--color-bauhaus-${shapeColor})]`}
			/>
		</div>
	);
}

// Code block
function CodeBlock({
	code,
	title,
	color = "blue",
}: {
	code: string;
	title?: string;
	color?: string;
}) {
	return (
		<div className="bauhaus-code rounded-none overflow-hidden relative">
			{title && (
				<div
					className={`px-4 py-3 bg-white border-b-4 border-black flex items-center justify-between`}
				>
					<div className="flex items-center gap-3">
						<div className="flex gap-2">
							<div className="w-4 h-4 rounded-full bg-[var(--color-bauhaus-red)] border-2 border-black" />
							<div className="w-4 h-4 rounded-full bg-[var(--color-bauhaus-yellow)] border-2 border-black" />
							<div className="w-4 h-4 rounded-full bg-[var(--color-bauhaus-blue)] border-2 border-black" />
						</div>
						<div className="w-1 h-6 bg-black mx-2" />
						<span className="text-sm font-heading font-bold uppercase tracking-widest">
							{title}
						</span>
					</div>
				</div>
			)}
			<div className="p-6 overflow-x-auto bg-[#fafafa]">
				<pre className="font-mono text-sm text-black leading-relaxed">
					<code>{code}</code>
				</pre>
			</div>
			<div
				className={`absolute left-0 top-0 bottom-0 w-3 bg-[var(--color-bauhaus-${color})] border-r-4 border-black z-10`}
			/>
		</div>
	);
}

// Stats Block
function StatBlock({ value, label, color }: { value: string; label: string; color: string }) {
	return (
		<div className={`border-4 border-black bg-white p-6 relative overflow-hidden group`}>
			<div
				className={`absolute top-0 right-0 w-16 h-16 bg-[var(--color-bauhaus-${color})] border-l-4 border-b-4 border-black rounded-bl-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`}
			/>
			<div className="font-display font-bold text-5xl mb-2 relative z-10">{value}</div>
			<div className="font-heading text-sm uppercase font-bold tracking-widest text-gray-600 relative z-10">
				{label}
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<div className="relative overflow-hidden min-h-screen selection:bg-[var(--color-bauhaus-yellow)] selection:text-black">
			{/* Decorative geometric background elements */}
			<div className="fixed top-20 right-10 w-64 h-64 border-8 border-black rounded-full pointer-events-none opacity-10 z-0" />
			<div className="fixed -bottom-20 -left-20 w-96 h-96 bg-[var(--color-bauhaus-blue)] rounded-full pointer-events-none opacity-5 z-0" />

			<div className="relative z-10">
				{/* Hero Section */}
				<section className="pt-24 pb-20 px-6 border-b-4 border-black bg-[var(--color-bg-cream)]">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							<div className="order-2 lg:order-1">
								<div className="inline-block bg-[var(--color-bauhaus-yellow)] border-4 border-black px-4 py-2 font-heading font-bold uppercase tracking-widest text-sm mb-8 shadow-[4px_4px_0px_0px_#111]">
									Form Follows Function
								</div>

								<h1 className="font-display font-bold text-6xl sm:text-7xl lg:text-8xl leading-none uppercase tracking-tighter mb-8">
									The <br />
									<span className="text-white text-shadow-solid">Modern</span> <br />
									Stack
								</h1>

								<style>{`
									.text-shadow-solid {
										text-shadow: 
											-2px -2px 0 #111,  
											2px -2px 0 #111,
											-2px 2px 0 #111,
											2px 2px 0 #111,
											6px 6px 0 var(--color-bauhaus-red);
									}
								`}</style>

								<p className="text-xl text-gray-800 font-body mb-10 max-w-lg border-l-8 border-[var(--color-bauhaus-blue)] pl-6">
									Build highly functional web applications with <strong>Hono</strong> on the server,{" "}
									<strong>React Router 7</strong> for routing, and{" "}
									<strong>React Server Components</strong> for zero-JavaScript rendering.
								</p>

								<div className="flex flex-wrap gap-6">
									<Link to="/about" className="bauhaus-button bauhaus-button-primary text-lg">
										Start Building
									</Link>
									<a
										href="https://hono.dev"
										target="_blank"
										rel="noreferrer"
										className="bauhaus-button bg-white text-black text-lg"
									>
										Docs
									</a>
								</div>
							</div>

							{/* Hero Composition */}
							<div className="order-1 lg:order-2 relative h-[500px] w-full hidden md:block">
								<div className="absolute top-10 right-10 w-64 h-64 bg-[var(--color-bauhaus-yellow)] border-8 border-black rounded-full shadow-[12px_12px_0px_0px_#111] animate-[spin_30s_linear_infinite]" />

								<div className="absolute bottom-20 left-10 w-72 h-72 bg-[var(--color-bauhaus-red)] border-8 border-black shadow-[12px_12px_0px_0px_#111]" />

								<div className="absolute top-40 left-32 w-0 h-0 border-l-[120px] border-l-transparent border-r-[120px] border-r-transparent border-b-[200px] border-b-[var(--color-bauhaus-blue)] filter drop-shadow-[12px_12px_0px_#111]" />

								<div className="absolute bottom-40 right-20 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#111] font-mono text-sm font-bold rotate-6">
									{"<RSC />"} + Hono
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Stats Strip */}
				<section className="border-b-4 border-black bg-[var(--color-bg-cream)]">
					<div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto divide-y-4 md:divide-y-0 md:divide-x-4 divide-black border-l-4 border-r-4 border-black my-0">
						<StatBlock value="0kb" label="Client JS for static" color="yellow" />
						<StatBlock value="100%" label="Type-safe E2E" color="blue" />
						<StatBlock value="Edge" label="Ready worldwide" color="red" />
					</div>
				</section>

				{/* Features - The Three Pillars */}
				<section className="py-24 px-6 bg-[var(--color-bg-cream)] border-b-4 border-black relative overflow-hidden">
					{/* Background diagonal stripes */}
					<div
						className="absolute inset-0 opacity-5 pointer-events-none"
						style={{
							backgroundImage:
								"repeating-linear-gradient(45deg, #111, #111 10px, transparent 10px, transparent 40px)",
						}}
					/>

					<div className="max-w-7xl mx-auto relative z-10">
						<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
							<div>
								<div className="w-16 h-4 bg-[var(--color-bauhaus-red)] mb-4 border-2 border-black" />
								<h2 className="font-display font-bold text-5xl uppercase tracking-tight">
									Core <br />
									Principles
								</h2>
							</div>
							<p className="font-body text-lg text-gray-700 max-w-md border-l-4 border-black pl-4 font-bold">
								A stripped-down, highly functional stack that eliminates unnecessary complexity in
								favor of raw performance.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<BauCard
								title="Hono"
								description="Ultra-fast web framework for the edge. Lightweight, type-safe middleware architecture that serves as the perfect minimalist foundation."
								shapeType="circle"
								shapeColor="blue"
							/>
							<BauCard
								title="React Router"
								description="The definitive routing solution. Functional data loading and mutations integrated directly into the component tree."
								shapeType="square"
								shapeColor="yellow"
							/>
							<BauCard
								title="Server Comps"
								description="Zero client JavaScript by default. Render on the server, ship pure HTML, hydrate only where function demands it."
								shapeType="triangle"
								shapeColor="red"
							/>
						</div>
					</div>
				</section>

				{/* Code Examples */}
				<section className="py-24 px-6 bg-white border-b-4 border-black">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<div className="inline-flex justify-center items-center gap-4 mb-6">
								<div className="w-8 h-8 bg-[var(--color-bauhaus-red)] rounded-full border-2 border-black" />
								<div className="w-8 h-8 bg-[var(--color-bauhaus-yellow)] border-2 border-black" />
								<div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-[var(--color-bauhaus-blue)]" />
							</div>
							<h2 className="font-display font-bold text-5xl uppercase tracking-tight mb-4">
								Functional Syntax
							</h2>
							<div className="w-24 h-2 bg-black mx-auto" />
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<div className="relative">
								<div className="absolute -left-4 -top-4 w-full h-full bg-[var(--color-bauhaus-blue)] border-4 border-black" />
								<div className="relative h-full">
									<CodeBlock
										title="server.ts"
										color="blue"
										code={`import { Hono } from 'hono';
import { reactRouter } from '@react-router/node';

const app = new Hono();

// Form follows function: clean middleware
app.use('/api/*', async (c, next) => {
  await next();
});

// React Router handles the structure
app.use('*', reactRouter({
  mode: 'production',
  // Minimal JS payload
}));

export default app;`}
									/>
								</div>
							</div>

							<div className="relative mt-8 lg:mt-0">
								<div className="absolute -right-4 -bottom-4 w-full h-full bg-[var(--color-bauhaus-yellow)] border-4 border-black" />
								<div className="relative h-full">
									<CodeBlock
										title="routes/home.tsx"
										color="yellow"
										code={`// Pure Server Component
export default async function Home() {
  // Direct data access, no API needed
  const items = await db.query(
    'SELECT * FROM inventory LIMIT 10'
  );

  return (
    <main className="bauhaus-grid">
      <h1>Catalog</h1>
      {items.map(item => (
        <ItemCard key={item.id} {...item} />
      ))}
    </main>
  );
}`}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-32 px-6 bg-[var(--color-bauhaus-red)] border-b-4 border-black relative overflow-hidden">
					{/* Abstract shapes */}
					<div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-[32px] border-white opacity-20 pointer-events-none" />
					<div className="absolute -left-10 bottom-10 w-48 h-48 bg-[var(--color-bauhaus-yellow)] border-8 border-black shadow-[16px_16px_0px_0px_#111] rotate-12 pointer-events-none" />
					<div className="absolute right-1/4 bottom-0 w-0 h-0 border-l-[100px] border-l-transparent border-r-[100px] border-r-transparent border-b-[180px] border-b-[var(--color-bauhaus-blue)] filter drop-shadow-[16px_16px_0px_#111] pointer-events-none" />

					<div className="max-w-4xl mx-auto text-center relative z-10 bg-white border-4 border-black p-12 md:p-20 shadow-[16px_16px_0px_0px_#111]">
						<h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tighter mb-6">
							Construct
							<br />
							Your System
						</h2>
						<p className="text-xl text-black font-body mb-10 max-w-lg mx-auto font-medium">
							Embrace constraints. Eliminate bloat. Build software that performs beautifully.
						</p>

						<a
							href="https://github.com"
							target="_blank"
							rel="noreferrer"
							className="bauhaus-button bauhaus-button-primary bg-black text-white hover:bg-[var(--color-bauhaus-yellow)] hover:text-black text-xl py-4 px-10 inline-flex gap-4"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
							Source Code
						</a>
					</div>
				</section>
			</div>
		</div>
	);
}
