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
                        Frequently Asked <br /> Questions
                    </p>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full space-y-2">
                        <AccordionItem value="item-1" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">
                                Q1. What is the minimum requirement for enrollment in Physiotherapy?
                            </AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The minimum requirement is an F.Sc (Pre-Medical) or equivalent. For more details, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">
                                Q2. What does the Physiotherapy program cover?
                            </AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The program covers musculoskeletal therapy, neurological rehabilitation, sports injury management, and therapeutic exercise, preparing students for clinical practice.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">
                                Q3. What are the career opportunities after completing Physiotherapy?
                            </AccordionTrigger>
                            <AccordionContent className="text-start">
                                Graduates can work as physiotherapists in hospitals, sports centers, rehabilitation clinics, or private practice. Opportunities also exist in wellness centers and community healthcare.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">
                                Q4. What facilities are available for Physiotherapy students?
                            </AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Our program offers advanced physiotherapy labs, rehabilitation equipment, and experienced instructors to provide hands-on training and practical knowledge.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    );
}
