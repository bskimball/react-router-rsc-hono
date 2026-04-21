"use client";

import { isRouteErrorResponse, Link, NavLink, useNavigation, useRouteError } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
	const navigation = useNavigation();
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</head>
			<body className="bg-background text-foreground min-h-screen font-sans antialiased">
				<header className="glass border-b border-border-subtle sticky inset-x-0 top-0 z-50 backdrop-blur-xl">
					<div className="mx-auto max-w-7xl px-4 relative flex h-16 items-center justify-between gap-4 sm:gap-8">
						<div className="flex items-center gap-6">
							<Link to="/" className="flex items-center gap-2 group">
								<div className="size-8 bg-brand-gradient rounded-lg flex items-center justify-center shadow-lg shadow-brand-primary/20 group-hover:scale-105 transition-transform border border-brand-glow">
									<span className="text-white font-bold text-sm">RR</span>
								</div>
								<span className="font-bold text-lg tracking-tight text-brand-gradient group-hover:text-brand-gradient-accent transition-colors duration-300">
									React Router
								</span>
							</Link>
							<nav>
								<ul className="gap-2 flex">
									<li>
										<NavLink
											to="/"
											className="px-3 py-1.5 rounded-lg text-sm font-medium text-foreground-muted transition-all duration-200 hover:text-foreground hover:bg-surface aria-[current]:bg-surface aria-[current]:text-foreground"
										>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink
											to="/about"
											className="px-3 py-1.5 rounded-lg text-sm font-medium text-foreground-muted transition-all duration-200 hover:text-foreground hover:bg-surface aria-[current]:bg-surface aria-[current]:text-foreground"
										>
											About
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>
						<div>
							{navigation.state !== "idle" && (
								<div className="h-4 w-4 animate-spin rounded-full border-2 border-brand-primary border-t-transparent" />
							)}
						</div>
					</div>
				</header>
				<div className="relative">{children}</div>
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
		<main className="mx-auto max-w-7xl px-4 py-12 lg:py-20">
			<article className="glass-strong rounded-3xl p-8 lg:p-12 text-center border-brand-glow">
				<h1 className="text-6xl font-bold text-brand-gradient">{status}</h1>
				<p className="mt-4 text-xl text-foreground-muted">{message}</p>
				<div className="mt-8">
					<Link
						to="/"
						className="inline-flex items-center justify-center rounded-xl bg-brand-gradient px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-primary/25 transition-all hover:scale-105 hover:opacity-90"
					>
						Go Back Home
					</Link>
				</div>
			</article>
		</main>
	);
}
