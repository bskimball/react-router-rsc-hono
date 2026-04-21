"use client";

import { isRouteErrorResponse, Link, NavLink, useNavigation, useRouteError } from "react-router";

// Geometric Shapes for Logo
function BauhausLogo({ className = "w-10 h-10" }: { className?: string }) {
	return (
		<svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="10" y="10" width="35" height="35" fill="var(--color-bauhaus-red)" />
			<circle cx="75" cy="27.5" r="17.5" fill="var(--color-bauhaus-blue)" />
			<polygon points="27.5,90 10,55 45,55" fill="var(--color-bauhaus-yellow)" />
			<path d="M90 90 L55 90 L55 55 Z" fill="var(--color-bauhaus-black)" />
		</svg>
	);
}

export function Layout({ children }: { children: React.ReactNode }) {
	const navigation = useNavigation();
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</head>
			<body className="bg-background text-text-primary min-h-screen font-body antialiased">
				{/* Global Bauhaus Header */}
				<header className="bauhaus-header sticky top-0 z-50">
					<div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
						<div className="flex items-center gap-6">
							<Link to="/" className="flex items-center gap-4 group">
								<BauhausLogo className="w-10 h-10 transition-transform group-hover:rotate-90 duration-500" />
								<span className="font-display font-bold text-2xl uppercase tracking-tighter hidden sm:block text-black">
									RR<span className="text-[var(--color-bauhaus-red)]">•</span>RSC
								</span>
							</Link>
							<nav className="hidden md:block">
								<ul className="flex items-center gap-10 font-heading font-bold uppercase text-sm tracking-wider">
									<li>
										<NavLink
											to="/"
											className="hover:text-[var(--color-bauhaus-blue)] transition-colors relative group aria-[current]:text-[var(--color-bauhaus-blue)]"
										>
											Home
											<span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--color-bauhaus-blue)] transition-all group-hover:w-full group-aria-[current]:w-full" />
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/about"
											className="hover:text-[var(--color-bauhaus-red)] transition-colors relative group aria-[current]:text-[var(--color-bauhaus-red)]"
										>
											About
											<span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--color-bauhaus-red)] transition-all group-hover:w-full group-aria-[current]:w-full" />
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/style"
											className="hover:text-[var(--color-bauhaus-yellow)] transition-colors relative group aria-[current]:text-[var(--color-bauhaus-yellow)]"
										>
											Style Guide
											<span className="absolute -bottom-2 left-0 w-0 h-1 bg-[var(--color-bauhaus-yellow)] transition-all group-hover:w-full group-aria-[current]:w-full" />
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>
						<div className="flex items-center gap-4">
							{navigation.state !== "idle" && (
								<div className="h-6 w-6 border-4 border-black border-t-[var(--color-bauhaus-red)] rounded-full animate-spin" />
							)}
							<a
								href="https://github.com"
								target="_blank"
								rel="noreferrer"
								className="bauhaus-button bauhaus-button-primary text-xs py-2 px-4 hidden sm:flex"
							>
								GitHub
							</a>
						</div>
					</div>
				</header>

				<main className="relative z-10">{children}</main>

				{/* Global Bauhaus Footer */}
				<footer className="bg-black text-white py-16 px-6 mt-auto">
					<div className="max-w-7xl mx-auto">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t-8 border-white pt-12">
							<div className="lg:col-span-2">
								<Link to="/" className="flex items-center gap-3 mb-6 inline-flex">
									<div className="w-8 h-8 bg-[var(--color-bauhaus-yellow)] border-2 border-white" />
									<span className="font-display font-bold text-2xl uppercase tracking-tighter">
										RR•RSC
									</span>
								</Link>
								<p className="font-body text-gray-400 font-medium max-w-sm mb-8">
									Experimental template demonstrating functional architecture with Hono, React
									Router, and React Server Components.
								</p>
								<div className="flex gap-4">
									<div className="w-12 h-12 bg-[var(--color-bauhaus-red)] border-2 border-white rounded-full" />
									<div className="w-12 h-12 bg-[var(--color-bauhaus-blue)] border-2 border-white" />
									<div className="w-12 h-12 bg-[var(--color-bauhaus-yellow)] border-2 border-white rounded-tr-[24px]" />
								</div>
							</div>

							<div>
								<h3 className="font-heading font-bold uppercase text-sm tracking-widest text-gray-400 mb-6">
									Navigation
								</h3>
								<ul className="space-y-4 font-bold font-body uppercase text-sm">
									<li>
										<Link
											to="/"
											className="hover:text-[var(--color-bauhaus-yellow)] transition-colors"
										>
											Home
										</Link>
									</li>
									<li>
										<Link
											to="/about"
											className="hover:text-[var(--color-bauhaus-yellow)] transition-colors"
										>
											About Stack
										</Link>
									</li>
									<li>
										<Link
											to="/style"
											className="hover:text-[var(--color-bauhaus-yellow)] transition-colors"
										>
											Design System
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<h3 className="font-heading font-bold uppercase text-sm tracking-widest text-gray-400 mb-6">
									Resources
								</h3>
								<ul className="space-y-4 font-bold font-body uppercase text-sm">
									<li>
										<a
											href="https://hono.dev"
											className="hover:text-[var(--color-bauhaus-blue)] transition-colors"
										>
											Hono Docs
										</a>
									</li>
									<li>
										<a
											href="https://reactrouter.com"
											className="hover:text-[var(--color-bauhaus-blue)] transition-colors"
										>
											React Router
										</a>
									</li>
									<li>
										<a
											href="https://react.dev"
											className="hover:text-[var(--color-bauhaus-blue)] transition-colors"
										>
											React RSC
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
							<p>© MMXXIV THE ACADEMY SYSTEM</p>
							<p>Built with Hono • React Router • RSC</p>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}

export function ErrorBoundary() {
	const error = useRouteError();
	let status = 500;
	let message = "An unexpected error occurred.";

	if (isRouteErrorResponse(error)) {
		status = error.status;
		message = status === 404 ? "Page not found." : error.statusText || message;
	}

	return (
		<main className="mx-auto max-w-7xl px-4 py-24 lg:py-32">
			<div className="bauhaus-card bg-white p-12 lg:p-20 text-center relative overflow-hidden">
				<div className="absolute top-0 left-0 w-24 h-24 bg-[var(--color-bauhaus-red)] border-b-4 border-r-4 border-black" />
				<h1 className="text-9xl font-display font-bold text-black mb-4 relative z-10">{status}</h1>
				<p className="mt-4 text-2xl font-heading font-bold uppercase tracking-tight text-black mb-12 relative z-10">
					{message}
				</p>
				<div className="relative z-10">
					<Link to="/" className="bauhaus-button bauhaus-button-primary text-xl px-10 py-4">
						Return to System
					</Link>
				</div>
				<div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--color-bauhaus-yellow)] rounded-full border-t-4 border-l-4 border-black translate-x-1/2 translate-y-1/2" />
			</div>
		</main>
	);
}
