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
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in the Diploma in Office Management?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The minimum requirement for enrollment is 45% marks in matriculation, intermediate, or an equivalent qualification. For more information, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">q2. WHAT is the duration and structure of the Diploma in Office Management?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The Diploma in Office Management is a three-year program that includes both theoretical classes and practical training to cover all essential office management skills.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q3. WHAT ARE THE SUBJECTS COVERED IN THE DIPLOMA IN OFFICE MANAGEMENT?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                The Diploma in Office Management includes the following core subjects over the three years:
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
                                6. Office Procedures and Management = Marks as per syllabus
                                <br />
                                <br />
                                The curriculum is structured to provide comprehensive administrative and technical training.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. WHAT CAREER OPPORTUNITIES ARE AVAILABLE AFTER THE DIPLOMA IN OFFICE MANAGEMENT?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                <p>After completing the Diploma in Office Management, you can explore a wide range of career opportunities. Examples include:</p>
                                <ul className="py-5 list-disc">
                                    <li>Office Manager</li>
                                    <li>Administrative Assistant</li>
                                    <li>HR Assistant</li>
                                    <li>Data Entry Specialist</li>
                                    <li>Front Desk Officer</li>
                                    <li>Customer Support Executive</li>
                                    <li>Positions in both government and private sectors</li>
                                    <li>Further studies in business administration or related fields</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
