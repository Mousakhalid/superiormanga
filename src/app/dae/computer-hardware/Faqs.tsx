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
                    <p className="text-[#0C7E81] text-3xl font-bold">Frequently Asked <br /> Questions</p>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        <AccordionItem value="item-1" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in DAE Computer Hardware at Superior College Lalazar Campus?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Minimum requirement is matriculation or equivalent. For further details, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q2. WHAT are the total marks of DAE Computer Hardware?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: DAE Computer Hardware is a three-year diploma program with varying marks per year. The total marks depend on the specific courses and practical exams.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q3. WHAT ARE THE SUBJECT-WISE MARKS FOR DAE COMPUTER HARDWARE?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                In DAE Computer Hardware, you study several core subjects, including:
                                <br />
                                <br />
                                1. Electrical Essentials = Marks as per syllabus
                                <br />
                                <br />
                                2. Network = Marks as per syllabus
                                <br />
                                <br />
                                3. Electronic Devices & Circuits I = Marks as per syllabus
                                <br />
                                <br />
                                4. Electrical Drawing = Marks as per syllabus
                                <br />
                                <br />
                                5. Computer Application = Marks as per syllabus
                                <br />
                                <br />
                                6. General Engineering Workshop = Marks as per syllabus
                                <br />
                                <br />
                                7. Islamiat = Marks as per syllabus
                                <br />
                                <br />
                                8. Pakistan Studies = Marks as per syllabus
                                <br />
                                <br />
                                9. Applied Mathematics = Marks as per syllabus
                                <br />
                                <br />
                                10. Applied Chemistry = Marks as per syllabus
                                <br />
                                <br />
                                11. Applied Physics = Marks as per syllabus
                                <br />
                                <br />
                                The subjects may include practical and theoretical components as prescribed in the curriculum.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. WHICH FIELDS ARE OPEN TO PURSUE AFTER DAE COMPUTER HARDWARE?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                <p>After completing your DAE Computer Hardware, you can choose from various career paths or further studies. Examples include:</p>
                                <ul className="py-5 list-disc">
                                    <li>Computer Hardware Engineer (Assistant Level)</li>
                                    <li>Network Technician</li>
                                    <li>Electronics Technician</li>
                                    <li>IT Support Technician</li>
                                    <li>Computer Repair Specialist</li>
                                    <li>Further studies in B.Tech or BS Computer Engineering</li>
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
