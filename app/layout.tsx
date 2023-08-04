import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import '@/app/styles/globals.css';

type Children = {
	children: ReactNode;
};

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.png',
		shortcut: '/favicon/png',
	},
	title: 'Next.JS + Clerk Auth App',
	description: 'Next.JS application that uses Clerk for authentication and user management.',
};

export default function RootLayout({ children }: Children) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className="scroll-smooth font-ubuntu antialiased">
					<header>Header Section</header>

					<main>{children}</main>

					<footer>Footer Section</footer>
				</body>
			</html>
		</ClerkProvider>
	);
}
