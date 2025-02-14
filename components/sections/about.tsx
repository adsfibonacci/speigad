import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/react";

export function about() {
	return (
		<div className="flex flex-row rounded-lg w-3/4 bg-transparent">
			<Card className="flex flex-col bg-zinc-900 w-full justify-center items-center rounded-lg shadow-lg shadow-slate-600">
				<CardBody className="text-[20px] text-slate-200">
					I am currently an undergraduate student at the University of Michigan pursuing a dual degree in Biomedical Engineering (BME) and Mathematical Biology.
					I have completed coursework for the computer science and biochemistry minors. 
					My math interests focus are in subfields of differential equations such as ODE's, PDE's, and chaos thoery to model biological systems, though I have recently been interested in algorithm analysis. 
					My research interests in BME are modeling metabolite and drug delivery in the body using mathematical models.
				</CardBody>
			</Card>
		</div>
	);
}
