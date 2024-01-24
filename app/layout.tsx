import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import "@/app/styles/globals.css";

type Children = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Clerk Auth",
  description:
    "Next.JS application that uses Clerk for authentication and user management.",
};

export default function RootLayout({ children }: Children) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="scroll-smooth font-opensans antialiased">
          <header>
            <Header />
          </header>

          <main className="container mx-auto">
            <div className="flex min-h-screen items-start justify-center">
              <div className="mt-20">{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
