import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@nextui-org/theme";
import React from "react";

import "./globals.css";

import GaussianEllipse from '@/components/gaussian';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Speigle",
  description: "Introductory Website",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
	const backgroundFormat = "bg-gradient-to-b from-slate-100 to-slate-300 h-screen w-screen";
	//const backgroundFormat = "bg-slate-200 h-screen w-screen";
	
	return (
		<html lang="en">
			<body>
			<div className={cn(inter.className, backgroundFormat)}>
				<div className="relative w-full h-full">
					<div className="absolute inset-0 z-10">{children}</div>
					<div className="absolute inset-0 z-0"><GaussianEllipse /></div>
				</div>
				</div>
			</body>
		</html>);
}
