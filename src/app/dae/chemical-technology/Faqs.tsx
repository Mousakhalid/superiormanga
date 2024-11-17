import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function Faqs() {
    return (
        <div className="bg-gray-100">
            <div className="grid md:px-32 px-8 py-16 md:grid-cols-2 grid-cols-1">
                <div>
                    <h1 className="font-bold text-yellow-500">FAQ</h1>
                    <p className="text-[#0C7E81] text-3xl font-bold">Frequently Ask <br /> Questions</p>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        <AccordionItem value="item-1" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in DAE Chemical Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Minimum requirement is matriculation or equivalent. For further details, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">q2. WHAT are the total marks of DAE Chemical Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: DAE Chemical Technology is a three-year diploma program with varying marks per year. The total marks depend on the specific courses and practical exams.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q3. WHAT ARE THE SUBJECT-WISE MARKS FOR DAE CHEMICAL TECHNOLOGY?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                In DAE Chemical Technology, you study several core subjects, including:
                                <br />
                                <br />
                                1. English = Marks as per syllabus
                                <br />
                                <br />
                                2. Pakistan Studies = Marks as per syllabus
                                <br />
                                <br />
                                3. M.A = Marks as per syllabus
                                <br />
                                <br />
                                4. P.COM = Marks as per syllabus
                                <br />
                                <br />
                                5. BCE = Marks as per syllabus
                                <br />
                                <br />
                                6. GC = Marks as per syllabus
                                <br />
                                <br />
                                7. BED = Marks as per syllabus
                                <br />
                                <br />
                                8. BC = Marks as per syllabus
                                <br />
                                <br />
                                9. BM = Marks as per syllabus
                                <br />
                                <br />
                                The subjects may include practical and theoretical components as prescribed in the curriculum.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. WHICH FIELDS ARE OPEN TO PURSUE AFTER DAE CHEMICAL TECHNOLOGY?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                <p>After completing your DAE Chemical Technology, you can explore various career paths or further studies. Examples include:</p>
                                <ul className="py-5 list-disc">
                                    <li>Chemical Process Operator</li>
                                    <li>Quality Control Technician</li>
                                    <li>Plant Supervisor</li>
                                    <li>Lab Technician</li>
                                    <li>Research Assistant in Chemical Labs</li>
                                    <li>Further studies in B.Tech or BS Chemical Engineering</li>
                                    <li>Safety Officer in Chemical Plants</li>
                                    <li>Job opportunities in both government and private sectors</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
