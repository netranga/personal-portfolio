"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{[
							{ name: "Projects", href: "/projects", color: "from-blue-400 to-blue-500" },
							{ name: "About Me", href: "/about", color: "from-teal-400 to-teal-500" },
							{ name: "Contact", href: "/contact", color: "from-purple-400 to-purple-500" },
						].map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="relative text-lg duration-200 text-zinc-300 hover:text-zinc-100 group"
							>
								{item.name}
								<span className={`absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r ${item.color} scale-x-0 transition-transform group-hover:scale-x-100`} />
							</Link>
						))}
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
