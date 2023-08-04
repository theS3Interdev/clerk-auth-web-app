import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/header';
import '@/app/styles/globals.css';

type Children = {
	children: ReactNode;
};

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.png',
		shortcut: '/favicon/png',
	},
	title: 'Next.JS + Clerk Auth',
	description: 'Next.JS application that uses Clerk for authentication and user management.',
};

export default function RootLayout({ children }: Children) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className="scroll-smooth antialiased font-opensans">
					<header>
						<Header />
					</header>

					<main className="container mx-auto">
						<div className="flex items-start justify-center min-h-screen">
							<div className="mt-20">{children}</div>
						</div>
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
