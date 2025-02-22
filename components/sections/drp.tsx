import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { accordionItemsClass } from "../accordionconfig";

export function DRP(itemClasses: accordionItemsClass) {
	return (
		<div className="w-3/4 flex justify-center">
			<Card className="w-1/3 bg-zinc-900 text-slate-200">
				<CardHeader>
					<Link
						isExternal
						showAnchorIcon
						href="https://sites.google.com/umich.edu/drp/home"
						underline="hover"
						color="primary"
						size="lg"
					>Program Info</Link>
				</CardHeader>
				<CardBody>
					A DRP is a semester long program where a math graduate student is paired with an undergraduate student to mentor them in a math subfield. Both of mine were formatted as independent courses where I presented a segment of the topic I focused on in readings.
				</CardBody>
			</Card>
			<Accordion itemClasses={itemClasses}>
				<AccordionItem title="Partial Differential Equations"
							   subtitle="Solutions to the Heat Equation"
							   indicator={({isOpen}) => (!isOpen && "View")}
							   disableIndicatorAnimation
				>
					<ul>
						<li> ● Studied material following the analogous PhD course with weekly graduate mentorship</li>
						<li> ● Focused on fluid mechanics within biological tissues and systems and complemented current coursework</li>
						<li> ● Modeled drug diffusion of a BMP coated hip implant through the femur using the heat equation in COMSOL</li>
						<li> ● Presented the heat equations structure of the radial symmetries in an end of semester project to math peers</li>
					</ul>
					<p className="pt-4"><b>Abstract:</b> The heat equation is a partial differential equation modeling diffusion of heat and particulate matter through space and time. This talk will provide the necessary interpretations of PDEs as well as methods for solving simple second order equations. The scope will focus on the equation over symmetric domains and characterize the radial solutions. Using the fundamental solutions to the heat equation, variations to the equations will be made to adjust for different models and phenomena.</p>
				</AccordionItem>
				<AccordionItem title="Abstract Algebra"
							   subtitle="The Euclidean Algorithm"
							   indicator={({isOpen}) => (!isOpen && "View")}
							   disableIndicatorAnimation
					>
					<ul>
						<li> ● Studied material from the Dummit and Foote Algebra textbook, covering groups, rings, modules, and isomorphism theorems regarding each</li>
						<li> ● Analyzed the Division Algorithm's efficiency in extensions of the integers such as the Gaussian Integers and Integer polynomial rings</li>
						<li> ● Prepared Beamer slides for an end of summer presentation to introduce mathematical objects and their applications to computer science</li>
						<li> ● Continued studying topics from algebraic geometry for applications in cryptography</li>
					</ul>
					<p className="pt-4"><b>Abstract:</b>The Euclidean Algorithm is a quick way to find the greatest common divisor (GCD) between any two
						integers. We will define rings, ring norms, and Euclidean domains where the algorithm is guaranteed to
						converge, then find the GCD of elements in the Gaussian integers and polynomial rings. In particular, we
						will focus on the worst case time complexity in the different scenarios.</p>
					<a className="pt-4 text-[#006FEE]" href="/presentation.pdf" target="_blank">Slides</a>
					<a className="pl-4 text-[#006fee]" href="https://www.desmos.com/calculator/03bvipexfg" target="_blank">Principal Ideals Demo</a>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
