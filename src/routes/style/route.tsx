// Color swatch component
function ColorSwatch({
	name,
	hex,
	variable,
	className,
}: {
	name: string;
	hex: string;
	variable: string;
	className?: string;
}) {
	return (
		<div className="bauhaus-card bg-white p-4">
			<div
				className={`h-24 border-4 border-black mb-4 ${className || ""}`}
				style={{ backgroundColor: hex }}
			/>
			<div className="space-y-1">
				<div className="font-heading font-bold uppercase text-xs tracking-widest">{name}</div>
				<div className="font-mono text-[10px] text-gray-500">{hex}</div>
				<div className="font-mono text-[10px] font-bold text-black">{variable}</div>
			</div>
		</div>
	);
}

// Typography specimen
function TypeSpecimen({
	name,
	font,
	sample,
	usage,
}: {
	name: string;
	font: string;
	sample: string;
	usage: string;
}) {
	return (
		<div className="bauhaus-card bg-white p-8">
			<div className="border-b-4 border-black pb-6 mb-6">
				<div
					className="text-5xl font-bold text-black mb-4 tracking-tighter uppercase"
					style={{ fontFamily: font }}
				>
					{sample}
				</div>
				<div className="font-mono text-xs font-bold bg-black text-white inline-block px-2 py-1">
					{font}
				</div>
			</div>
			<div className="space-y-2">
				<div className="font-heading font-bold text-lg uppercase tracking-tight text-[var(--color-bauhaus-red)]">
					{name}
				</div>
				<div className="text-sm text-gray-700 font-body leading-relaxed">{usage}</div>
			</div>
		</div>
	);
}

// Component showcase
function ComponentShowcase({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<div className="space-y-6">
			<div className="flex items-center gap-4">
				<div className="w-12 h-2 bg-black" />
				<h3 className="font-display font-bold text-2xl uppercase tracking-tighter">{title}</h3>
			</div>
			<div className="bauhaus-card bg-white p-10 relative overflow-hidden">
				<div className="absolute top-0 right-0 w-8 h-8 bg-black opacity-5" />
				{children}
			</div>
		</div>
	);
}

export default function StyleGuide() {
	return (
		<div className="relative overflow-hidden min-h-screen selection:bg-[var(--color-bauhaus-yellow)] selection:text-black">
			{/* Decorative grid */}
			<div
				className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
				style={{
					backgroundImage:
						"linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px)",
					backgroundSize: "40px 40px",
				}}
			/>

			<div className="relative z-10">
				{/* Hero */}
				<section className="pt-24 pb-20 px-6 bg-[var(--color-bg-cream)] border-b-4 border-black">
					<div className="max-w-7xl mx-auto text-center">
						<div className="flex justify-center gap-4 mb-8">
							<div className="w-10 h-10 bg-[var(--color-bauhaus-red)] border-4 border-black" />
							<div className="w-10 h-10 bg-[var(--color-bauhaus-blue)] border-4 border-black rounded-full" />
							<div className="w-10 h-10 bg-[var(--color-bauhaus-yellow)] border-4 border-black rotate-45" />
						</div>
						<h1 className="font-display font-bold text-6xl uppercase tracking-tighter mb-4">
							Design <span className="text-white text-shadow-solid">System</span>
						</h1>
						<style>{`
							.text-shadow-solid {
								text-shadow: 
									-2px -2px 0 #111,  
									2px -2px 0 #111,
									-2px 2px 0 #111,
									2px 2px 0 #111,
									6px 6px 0 var(--color-bauhaus-blue);
							}
						`}</style>
						<p className="text-xl text-gray-800 font-body max-w-xl mx-auto font-bold uppercase tracking-widest mt-8">
							Form follows function. Geometric precision.
						</p>
					</div>
				</section>

				<main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
					{/* Philosophy */}
					<section>
						<h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-12 border-l-8 border-[var(--color-bauhaus-red)] pl-6">
							Philosophy
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
							<div className="font-body text-xl leading-relaxed text-black font-medium">
								<p className="mb-6">
									Our design system is rooted in the{" "}
									<strong className="text-[var(--color-bauhaus-blue)]">Bauhaus tradition</strong>: a
									focus on clarity, efficiency, and the beauty of structural mechanics.
								</p>
								<p>
									We reject unnecessary decoration. Every element serves a functional purpose,
									mirroring the efficiency of the Hono and React Server Components architecture.
								</p>
							</div>
							<div className="relative h-64 bg-white border-4 border-black shadow-[16px_16px_0px_0px_#111] overflow-hidden">
								<div className="absolute top-10 left-10 w-32 h-32 bg-[var(--color-bauhaus-yellow)] border-4 border-black rounded-full" />
								<div className="absolute bottom-10 right-10 w-40 h-12 bg-[var(--color-bauhaus-red)] border-4 border-black" />
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-full bg-black" />
							</div>
						</div>
					</section>

					{/* Color Palette */}
					<section>
						<h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-12 border-l-8 border-[var(--color-bauhaus-blue)] pl-6">
							Primary Colors
						</h2>
						<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
							<ColorSwatch
								name="Bauhaus Red"
								hex="#e32636"
								variable="--color-bauhaus-red"
								className="shadow-[4px_4px_0px_0px_var(--color-bauhaus-blue)]"
							/>
							<ColorSwatch
								name="Bauhaus Blue"
								hex="#1c3aa9"
								variable="--color-bauhaus-blue"
								className="shadow-[4px_4px_0px_0px_var(--color-bauhaus-yellow)]"
							/>
							<ColorSwatch
								name="Bauhaus Yellow"
								hex="#f8e026"
								variable="--color-bauhaus-yellow"
								className="shadow-[4px_4px_0px_0px_var(--color-bauhaus-red)]"
							/>
							<ColorSwatch name="Pure Black" hex="#111111" variable="--color-bauhaus-black" />
							<ColorSwatch name="Cream Background" hex="#f4f4f0" variable="--color-bg-cream" />
						</div>
					</section>

					{/* Typography */}
					<section>
						<h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-12 border-l-8 border-[var(--color-bauhaus-yellow)] pl-6">
							Typography
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<TypeSpecimen
								name="Display & Heading"
								font="Space Grotesk, sans-serif"
								sample="The Modern Stack"
								usage="High-impact headlines, navigational elements, and strong emphasis."
							/>
							<TypeSpecimen
								name="Body Text"
								font="Inter, sans-serif"
								sample="Form Follows Function"
								usage="Reading text, descriptions, and functional instructions."
							/>
							<TypeSpecimen
								name="Monospace"
								font="JetBrains Mono, monospace"
								sample="const system = 'bauhaus';"
								usage="Code blocks, technical data, and terminal output."
							/>
						</div>
					</section>

					{/* Components */}
					<section>
						<h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-12 border-l-8 border-black pl-6">
							Components
						</h2>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<ComponentShowcase title="Buttons">
								<div className="flex flex-wrap gap-8">
									<button type="button" className="bauhaus-button bauhaus-button-primary">
										Primary
									</button>
									<button type="button" className="bauhaus-button bauhaus-button-secondary">
										Secondary
									</button>
									<button type="button" className="bauhaus-button bg-black text-white">
										Black
									</button>
								</div>
							</ComponentShowcase>

							<ComponentShowcase title="Inputs">
								<div className="space-y-6 max-w-sm">
									<input
										type="text"
										placeholder="Input field..."
										className="w-full px-4 py-3 bg-white border-4 border-black focus:outline-none focus:bg-[var(--color-bauhaus-yellow)] transition-colors font-heading font-bold uppercase tracking-tight"
									/>
									<select className="w-full px-4 py-3 bg-white border-4 border-black focus:outline-none font-heading font-bold uppercase tracking-tight">
										<option>Option One</option>
										<option>Option Two</option>
									</select>
								</div>
							</ComponentShowcase>

							<ComponentShowcase title="Cards">
								<div className="bauhaus-card p-6 bg-white relative">
									<div className="absolute top-0 left-0 w-2 h-full bg-[var(--color-bauhaus-red)]" />
									<h4 className="font-heading font-bold text-xl uppercase mb-2">Card Title</h4>
									<p className="font-body text-sm text-gray-600">
										Basic component structure with structural emphasis.
									</p>
								</div>
							</ComponentShowcase>

							<ComponentShowcase title="Functional Badges">
								<div className="flex flex-wrap gap-4">
									<span className="bg-[var(--color-bauhaus-red)] text-white px-3 py-1 font-heading font-bold text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_#111]">
										Red Alert
									</span>
									<span className="bg-[var(--color-bauhaus-blue)] text-white px-3 py-1 font-heading font-bold text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_#111]">
										Blue Link
									</span>
									<span className="bg-[var(--color-bauhaus-yellow)] text-black px-3 py-1 font-heading font-bold text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_#111]">
										Yellow Info
									</span>
								</div>
							</ComponentShowcase>
						</div>
					</section>

					{/* Layout Grid Example */}
					<section>
						<h2 className="font-display font-bold text-4xl uppercase tracking-tighter mb-12 border-l-8 border-black pl-6">
							Grid Composition
						</h2>
						<div className="grid grid-cols-12 grid-rows-3 h-[400px] border-4 border-black bg-white">
							<div className="col-span-8 row-span-2 border-r-4 border-b-4 border-black bg-[var(--color-bg-cream)] p-8">
								<div className="w-16 h-16 bg-[var(--color-bauhaus-red)] border-4 border-black rounded-full" />
							</div>
							<div className="col-span-4 border-b-4 border-black bg-[var(--color-bauhaus-blue)]" />
							<div className="col-span-4 border-b-4 border-black bg-white" />
							<div className="col-span-2 border-r-4 border-black bg-[var(--color-bauhaus-yellow)]" />
							<div className="col-span-6 border-r-4 border-black bg-black" />
							<div className="col-span-4 bg-white" />
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
