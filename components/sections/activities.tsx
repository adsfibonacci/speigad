import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { accordionItemsClass } from "../accordionconfig";
import { Link } from "@nextui-org/react";

export function Activities(itemClasses: accordionItemsClass) {
	return (
		<div className="w-3/4">
			<Accordion itemClasses={itemClasses}>
				<AccordionItem title="Evening Walking Club Host"
					subtitle="SUMS Host"
					indicator={({ isOpen }) => (!isOpen && "View")}
					disableIndicatorAnimation
				>
					Several times a week, I host the Evening Walks which are an evening activity hosted by the Society of Undergraduate Math Students
					(<Link isExternal href="https://sites.lsa.umich.edu/sums/">SUMS</Link>).
					The routes differ, but we always walk within the Ann Arbor city limits for around an hour. Typically, the mileage is between 3 and 4 miles.
				</AccordionItem>
				<AccordionItem key="2" title="Summer Engineering Exploration Camp Counselor"
					subtitle="SWE"
					indicator={({ isOpen }) => (!isOpen && "View")}
					disableIndicatorAnimation
				>
					The Summer Engineering Exploration (<Link color="primary" isExternal href="https://www.seecamp.org/">SEE</Link>) Camp is a one week summer camp aimed at getting high school sophomores and juniors interested in various engineering programs offered at the University of Michigan. I have enjoyed being a counselor for the summer of 2023 and 2024.
					The program is hosted by the Society of Women Engineers (<Link color="primary" isExternal href="https://swe.org/">SWE</Link>).
				</AccordionItem>
			</Accordion>
		</div>);
}
