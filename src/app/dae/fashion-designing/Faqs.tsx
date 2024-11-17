import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
    return (
        <div className="bg-gray-100">
            <div className="grid md:px-32 px-8 py-16 md:grid-cols-2 grid-cols-1">
                <div>
                    <h1 className="font-bold text-yellow-500">FAQ</h1>
                    <p className="text-[#0C7E81] text-3xl font-bold">
                        Frequently Ask <br /> Questions
                    </p>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        <AccordionItem value="item-1" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">
                                Q1. What is the minimum requirement for enrollment in DDM Fashion Designing?
                            </AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Minimum requirement is matriculation or equivalent. For further details, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">
                                Q2. WHAT ARE THE SUBJECTS FOR DDM FASHION DESIGNING?
                            </AccordionTrigger>
                            <AccordionContent className="text-start">
                                In DDM Fashion Designing, you study various subjects, including:
                                <br />
                                <br />
                                1. Islamiat = Marks as per syllabus
                                <br />
                                <br />
                                2. Pakistan Studies = Marks as per syllabus
                                <br />
                                <br />
                                3. English = Marks as per syllabus
                                <br />
                                <br />
                                4. Urdu = Marks as per syllabus
                                <br />
                                <br />
                                5. Hand Embroidery I = Marks as per syllabus
                                <br />
                                <br />
                                6. Machine Embroidery I = Marks as per syllabus
                                <br />
                                <br />
                                7. Sewing Technique I = Marks as per syllabus
                                <br />
                                <br />
                                8. Hand Embroidery II = Marks as per syllabus
                                <br />
                                <br />
                                9. Machine Embroidery II = Marks as per syllabus
                                <br />
                                <br />
                                10. Sewing Technique II = Marks as per syllabus
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">
                                Q3. WHAT CAREER PATHS ARE AVAILABLE AFTER DDM FASHION DESIGNING?
                            </AccordionTrigger>
                            <AccordionContent className="text-start">
                                <p>
                                    After completing your DDM Fashion Designing, you can pursue various career paths, such as:
                                </p>
                                <ul className="py-5 list-disc">
                                    <li>Fashion Designer</li>
                                    <li>Embroidery Specialist</li>
                                    <li>Costume Designer</li>
                                    <li>Textile Artist</li>
                                    <li>Fashion Illustrator</li>
                                    <li>Further studies in Fashion and Textile Design</li>
                                    <li>Entrepreneur in Fashion Industry</li>
                                    <li>Opportunities in both local and international fashion markets</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
