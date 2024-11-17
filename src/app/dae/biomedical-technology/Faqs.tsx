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
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in DAE Biomedical Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The minimum requirement is matriculation or equivalent. For more details, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q2. What are the total marks for DAE Biomedical Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: DAE Biomedical Technology is a three-year diploma program with varying marks per year. The total marks depend on the specific courses and practical exams.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q3. What are the subject-wise marks for DAE Biomedical Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                In DAE Biomedical Technology, you study several core subjects, including:
                                <br />
                                <br />
                                1. Islamiat = Marks as per syllabus
                                <br />
                                2. Pakistan Studies = Marks as per syllabus
                                <br />
                                3. Applied Mathematics = Marks as per syllabus
                                <br />
                                4. Business Communication = Marks as per syllabus
                                <br />
                                5. Industrial Economics = Marks as per syllabus
                                <br />
                                6. Measuring Instruments = Marks as per syllabus
                                <br />
                                7. Solid State Electronics = Marks as per syllabus
                                <br />
                                8. Digital Electronics = Marks as per syllabus
                                <br />
                                9. Electrical Machine and Industrial Electronics = Marks as per syllabus
                                <br />
                                10. Operational Amplifier and Application = Marks as per syllabus
                                <br />
                                11. Patient Safety = Marks as per syllabus
                                <br />
                                12. Ultrasound = Marks as per syllabus
                                <br />
                                13. X-Ray = Marks as per syllabus
                                <br />
                                14. Film Processing Equipment = Marks as per syllabus
                                <br />
                                The subjects may include practical and theoretical components as prescribed in the curriculum.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. What career paths can I pursue after DAE Biomedical Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                <p>After completing DAE Biomedical Technology, you can pursue various career opportunities, including:</p>
                                <ul className="py-5 list-disc">
                                    <li>Biomedical Technician</li>
                                    <li>Medical Equipment Specialist</li>
                                    <li>Clinical Engineering Technician</li>
                                    <li>Maintenance Engineer in Healthcare Institutions</li>
                                    <li>Radiology Equipment Technician</li>
                                    <li>Further studies in BS Biomedical Engineering</li>
                                    <li>Job opportunities in hospitals, medical device companies, and health institutions</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
