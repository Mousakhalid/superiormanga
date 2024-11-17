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
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in DAE Electrical Engineering?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Minimum requirement is matriculation or equivalent. For further details, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">q2. WHAT are the total marks of DAE Electrical Engineering?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: DAE Electrical Engineering is a three-year diploma program with varying marks per year. The total marks depend on the specific courses and practical exams.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q3. WHAT ARE THE SUBJECT-WISE MARKS FOR DAE ELECTRICAL ENGINEERING?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                In DAE Electrical Engineering, you study several core subjects, including:
                                <br />
                                <br />
                                1. Islamiat = Marks as per syllabus
                                <br />
                                <br />
                                2. Pakistan Studies = Marks as per syllabus
                                <br />
                                <br />
                                3. Mathematics = Marks as per syllabus
                                <br />
                                <br />
                                4. Chemistry = Marks as per syllabus
                                <br />
                                <br />
                                5. Computer Application = Marks as per syllabus
                                <br />
                                <br />
                                6. Principal of Electrical Engineering = Marks as per syllabus
                                <br />
                                <br />
                                The subjects may include practical and theoretical components as prescribed in the curriculum.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. WHICH FIELDS ARE OPEN TO PURSUE AFTER DAE ELECTRICAL ENGINEERING?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                <p>After completing your DAE Electrical Engineering, you can choose from various career paths or further studies. Examples include:</p>
                                <ul className="py-5 list-disc">
                                    <li>Electrical Engineer (Assistant Level)</li>
                                    <li>Technician in Power Sector</li>
                                    <li>Automation Specialist</li>
                                    <li>Telecom Technician</li>
                                    <li>Industrial Electrician</li>
                                    <li>Further studies in B.Tech or BS Electrical Engineering</li>
                                    <li>Project Supervisor in Electrical Projects</li>
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
