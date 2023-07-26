import React from 'react';
import type { Metadata } from 'next';
import '@/app/styles/globals.css';

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.png',
		shortcut: '/favicon/png',
	},
	title: 'Next.JS Starter Template App',
	description: 'Starter template for Next.JS projects using TypeScript and Tailwind CSS.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="scroll-smooth font-ubuntu antialiased">
				<header>Header Section</header>

				<main>{children}</main>

				<footer>Footer Section</footer>
			</body>
		</html>
	);
}