'use client'

import { Card } from "@nextui-org/card";

export function TitleCard({children,} : Readonly<{children: React.ReactNode;}>) {
	return (
		<Card className="w-full bg-transparent border-none shadow-none rounded-none text-black px-2 py-1 relative group font-saturday text-[42px] font-bold mr-1 ml-1 mt-4 mb-4">
			<div className="absolute top-0 left-0 w-[60px] h-[30px] border-t-5 border-l-5 border-[#000000] rounded-none"/>
			<div className="absolute bottom-0 right-0 w-[60px] h-[30px] border-b-5 border-r-5 border-[#000000] rounded-none"/>
			{children}
		</Card>
  );
}
