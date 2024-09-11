"use client";

import { useState } from "react";
import { NextUIProvider, Snippet } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

import { CornerButton, TitleButton } from "@/components/corner-button";
import { work } from "@/components/sections/work";
import { about } from "@/components/sections/about";
import { DRP } from "@/components/sections/drp";
import { courses } from "@/components/sections/courses";
import { Activities } from "@/components/sections/activities";
import { Resume } from "@/components/sections/resume";


import { accordionItemsClass } from "@/components/accordionconfig";
import { GithubLogo, LinkedinLogo } from "@/components/logos";


export default function Home() {
	const [isWork, setIsWork] = useState(false);
	const [isAbout, setIsAbout] = useState(false);
	const [isActivities, setIsActivites] = useState(false);
	const [isDRP, setIsDRP] = useState(false);
	const [isCourses, setIsCourses] = useState(false);
	const [isResume, setIsResume] = useState(false);

	const homeHandle = () => {
		setIsAbout(false);
		setIsActivites(false);
		setIsWork(false);
		setIsDRP(false);
		setIsCourses(false);
		setIsResume(false);
	};
	const aboutHandle = () => {
		setIsAbout(true);
		setIsActivites(false);
		setIsWork(false);
		setIsDRP(false);
		setIsCourses(false);
		setIsResume(false);
	};
	const activitiesHandle = () => {
		setIsAbout(false);
		setIsActivites(true);
		setIsWork(false);
		setIsDRP(false);
		setIsCourses(false);
		setIsResume(false);
	}
	const workHandle = () => {
		setIsAbout(false);
		setIsActivites(false);
		setIsWork(true);
		setIsDRP(false);
		setIsCourses(false);
		setIsResume(false);
	};
	const drpHandle = () => {
		setIsAbout(false);
		setIsActivites(false);
		setIsWork(false);
		setIsDRP(true);
		setIsCourses(false);
		setIsResume(false);
	}
	const coursesHandle = () => {
		setIsAbout(false);
		setIsActivites(false);
		setIsWork(false);
		setIsDRP(false);
		setIsCourses(true);
		setIsResume(false);
	}
	const resumeHandle = () => {
		setIsAbout(false);
		setIsActivites(false);
		setIsWork(false);
		setIsDRP(false);
		setIsCourses(false);
		setIsResume(true);
	}

	const itemClasses: accordionItemsClass = {
		base: "w-full bg-zinc-900 rounded-lg shadow-slate-600 shadow-lg data-disabled:bg-zinc-900",
		title: "font-normal text-[24px] text-slate-200",
		trigger: "px-2 py-0 data-[hover=true]:bg-slate-900 rounded-lg h-14 flex items-center data-[disabled=true]:bg-zinc-900",
		indicator: "text-medium",
		content: "text-[18px] text-slate-200 px-2",
	};

	return (
		<NextUIProvider>
			<div className="h-screen flex">
				<div className="flex flex-col w-1/4">
					<div className="flex flex-col h-1/4 w-full gap-2 pb-8 items-center top-left-0">
						<TitleButton>Alexander Speigle</TitleButton>
						<Snippet className="bg-transparent border-2 rounded-lg text-sm w-fit" symbol="" size="sm">
							speigad@umich.edu							
						</Snippet>
						<Snippet className="bg-transparent border-2 rounded-lg text-sm w-fit" symbol="" size="sm">
							+1 (248)-482-9381
						</Snippet>
						<div className="flex flex-row gap-2">
							<Link href="https://www.linkedin.com/in/alexander-speigle-aa5724265"><LinkedinLogo className="fill-current text-foreground hover:text-primary" /></Link>
							<Link href="https://github.com/adsfibonacci"><GithubLogo className="fill-current text-foreground hover:text-primary" /></Link>
						</div>
					</div>
					<div className="flex pt-16 gap-8">
						<div className="flex flex-col w-1/2">
							<CornerButton className="w-fit" onClick={homeHandle}>Home</CornerButton>
							<CornerButton className="w-fit" onClick={activitiesHandle}>Activities</CornerButton>
							<CornerButton className="w-fit" onClick={drpHandle}>Math Projects</CornerButton>
							<CornerButton className="w-fit" onClick={resumeHandle}>Resume</CornerButton>
						</div>
						<div className="flex flex-col w-1/2">
							<CornerButton className="w-fit" onClick={aboutHandle}>About Me</CornerButton>
							<CornerButton className="w-fit" onClick={workHandle}>Work Experience</CornerButton>
							<CornerButton className="w-fit" onClick={coursesHandle}>Courses</CornerButton>							
						</div>
					</div>
					<div className="image-container w-1/8 absolute bottom-8 left-8 rounded-lg border border-black bg-gradient-to-b from-[#4C5666] to-[#8A939F] shadow-slate-600 shadow-lg">
						<Image
							src="/suit-picture-crop.png"
							alt="Image"
							quality={100}
							width={250}
							height={250}
						/>
					</div>
				</div>
				<div className="flex flex-col w-3/4 h-full items-left justify-center py-8">
					{isWork && work(itemClasses)}
					{isAbout && about()}
					{isActivities && Activities(itemClasses)}
					{isDRP && DRP(itemClasses)}
					{isCourses && courses(itemClasses)}
					{isResume && Resume()}
				</div>
			</div>
		</NextUIProvider>
	);
};
