import { Card, CardBody } from "@nextui-org/card";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { accordionItemsClass } from "../accordionconfig";
import React from "react";

export function courses(itemClasses: accordionItemsClass) {
	return (
		<div className="w-full flex flex-row">
			<div className="w-1/4 flex flex-col items-center">
				<Card className="w-fit mb-4 bg-zinc-800 text-[20px] text-slate-300">
					<CardBody>
						Biomedical Engineering
					</CardBody>
				</Card>
				<Accordion itemClasses={itemClasses}>
					<AccordionItem title="Immunoengineering"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Focus on immune systems activity with both autoimmunity and cancer scenarios.
						Adapted molecular engineering techniques for curating the adaptive immunity response.
					</AccordionItem>
					<AccordionItem title="Automated Science"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Covers the use of machine learning and artificial intelligence in experiment design.
					</AccordionItem>
					<AccordionItem title="Biomaterials"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Lectures consisted of different applications of material science when designing implants and other surgical devices. 
					</AccordionItem>
					<AccordionItem title="Engineering Design"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Project teams focus on designing a medical device with the focus on design requirements and guidelines.
						My team focused on a hip implant for the first semester and an allergy detection device for the second. 
					</AccordionItem>
					<AccordionItem title="Instrument Design"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Lab course based primarily on circuit design for rudimentary signal processing.
						Devices built throughout the semester were an EKG, spirometer, and skin conductivity. 
					</AccordionItem>
					<AccordionItem title="Bioreactor Design"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Optimizing biochemical product yield to industrial quantities based off mathematical models dictating enzyme kinematics.						
					</AccordionItem>
					<AccordionItem title="Biofluid Mechanics"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Applications of differential equations to biological flows in the human body such as blood flow and respiration.
					</AccordionItem>
					<AccordionItem title="Cell Biology"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Study protein transcription through the differential equation models simulating transcription networks. 
					</AccordionItem>
				</Accordion>
			</div>
			<div className="w-1/4 flex flex-col items-center">
				<Card className="w-fit mb-4 bg-zinc-900 text-[20px] text-slate-200">
					<CardBody>
						Mathematics
					</CardBody>
				</Card>
				<Accordion itemClasses={itemClasses}>
					<AccordionItem title="Nonlinear Programming"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Optimization in convex spaces subject to nonlinear constraints, transformation techniques to obtain a convex optimization problem, and applicatoins to machine learning. 
					</AccordionItem>
					<AccordionItem title="Linear Programming"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Focus on linear models and constraints yielding convex polytopes, applying to stock portfolio optimization, transportation problems, and flow networks.
						Our final project was designing a wildfire evacuation model for Sonoma County in California. 
					</AccordionItem>
					<AccordionItem title="Complex Analysis"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Analysis of formalized calculus in one complex variable. Cauchy residue theorems and formulas were highly emphasized.
						Power and Laurent series' were covered in depth to aid analysis of the Gamma and Beta functions over the complex numbers. 
					</AccordionItem>
					<AccordionItem title="Nonlinear Dynamics"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Bifurcation plots resulting from difference equations and ordinary differential equations.
						Chaos theory, attractors, and manifold theory were covered with ordinary differential equations. 
					</AccordionItem>
					<AccordionItem title="Modeling in Biology"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Use of mathematical models to describe natural phenomena such as predator-prey population dynamics, epidemiological models, and cell population growth.
						My final project was beta cell function in the liver to restore insulin production in diabetics. 
					</AccordionItem>
					
					<AccordionItem title="Combinatorics"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Covered a multitude of number theoretic identities then switching to focus on graph theory and branch pruning for algorithm optimization. 
					</AccordionItem>
					<AccordionItem title="Probability Theory"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Foundations of probability from an analysis perspective, defining probability spaces by adding measure to subsets of Euclidean space.
						Statistics was lightly touched upon from a pure math perspective. 
					</AccordionItem>
					<AccordionItem title="Honors Analysis"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Formalized multivariable calculus to analysis on manifolds, covering topics in linear algebra, differential geometry, complex analysis, and measure theory. 
					</AccordionItem>
					<AccordionItem title="Honors Mathematics"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Formalized concepts from arithmetic, algebra, linear algebra, single variable calculs, and number theory. 
					</AccordionItem>
				</Accordion>
			</div>
			<div className="w-1/4 flex flex-col items-center">
				<Card className="w-fit mb-4 bg-zinc-900 text-[20px] text-slate-200">
					<CardBody>
						Computer Science
					</CardBody>
				</Card>
				<Accordion itemClasses={itemClasses}>
					<AccordionItem title="Machine Learning"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Introduction to machine learning models in Python starting from support vector machines and finishing with neural networks.
						Course projects and homeworks covered statistics, probability, linear algebra, algorithm design, and imputation techniques. 
					</AccordionItem>
					<AccordionItem title="Algorithm Design"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						First course for code optimization, with a heavy emphasis on code efficiency.
						Projects consisted of large datasets with the goal to process data inputs quickly using C++
					</AccordionItem>
					<AccordionItem title="Data Structures"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Introduction to coding in C++ for code efficiency and data input methods. 
					</AccordionItem>
				</Accordion>
			</div>
			<div className="w-1/4 flex flex-col items-center">
				<Card className="w-fit mb-4 bg-zinc-800 text-[20px] text-slate-300">
					<CardBody>
						Biochemistry
					</CardBody>
				</Card>
				<Accordion itemClasses={itemClasses}>
					<AccordionItem title="Protein Function"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Lecture on different functional groups present in macromolecules. Discussed several methods of protein structural analysis and methods to remove black box effects of protein function. 
					</AccordionItem>
					<AccordionItem title="Bioinorganic Chemistry"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Focus on metals use in organic chemistry and protein function, analyzing enzymatic capabilities of different metals in biological reactions.
					</AccordionItem>
					<AccordionItem title="Physical Chemistry"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Quantum level description of chemical properties and how they change during chemical reactions then focus on thermodynamics and energy transfer. 
					</AccordionItem>
					<AccordionItem title="Genetics"
						indicator={({ isOpen }) => (!isOpen && "View")}
						disableIndicatorAnimation
					>
						Molecular analysis on genetic transcription and replication methods using statistics and probability theory to predict Drosophila phenotypes. 
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}










