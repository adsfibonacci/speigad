import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { accordionItemsClass } from "../accordionconfig";

export function work(itemClasses: accordionItemsClass) {
	return (
		<div className="w-3/4">
			<Accordion itemClasses={itemClasses}>
				<AccordionItem title="Undergraduate Lab Research"
					subtitle="Chandrasekaran Lab"
					indicator={({ isOpen }) => (!isOpen && "View")}
					disableIndicatorAnimation
				>
					<ul>
						<li> ● Formatted literature data as linear programming inputs and analyzed probabilistic outputs in MATLAB and R</li>
						<li> ● Compared predicted transcription factors to flux balance predictions available through the Cobra toolbox</li>
						<li> ● Implemented neural networks to reconstruct transcription network after downregulation from microarray data</li>
						<li> ● Transcribed model from MATLAB to C++ to increase large dataset efficiency and improve system portability</li>
						<li> ● Presented updates, new methods, and results for weekly lab meetings involving other members of the project</li>
					</ul>
				</AccordionItem>
				<AccordionItem key="2" title="Course Grader: Biomedical Applied Math"
					subtitle="Anne Draelos"
					indicator={({ isOpen }) => (!isOpen && "View")}
					disableIndicatorAnimation
				>
					<ul>
						<li> ● Reviewed and commented on submissions to improve understanding of both code and course mathematics</li>
						<li> ● Updated rubrics and solution manuals for future grading staff to match current programming language choice</li>
						<li> ● Communicated common errors with instruction staff to modify course material and address lacking content</li>
					</ul>
				</AccordionItem>
				<AccordionItem title="SITC Monitor"
							   subtitle="Gavin LaRose"
					indicator={({ isOpen }) => (!isOpen && "View")}
					disableIndicatorAnimation
				>
					<ul>
						<li> ● Monitor Math Department computer labs for class schedules </li>
						<li> ● Basic computer maintenance with downed computers due to faulty Windows updates, forewarding it when it requires higher credentials </li>
						<li> ● Proctored introductory math exams for undergraduate students </li>
					</ul>
				</AccordionItem>
			</Accordion>
		</div>);
}
