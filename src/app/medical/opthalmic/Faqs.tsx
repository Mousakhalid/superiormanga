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
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in Ophthalmic Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The minimum requirement is a Matric or F.Sc (Pre-Medical) or equivalent. For more details, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q2. What does the Ophthalmic Technology program cover?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The program covers eye anatomy, vision testing techniques, optical instrument handling, and patient care, preparing students for roles in eye care support.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q3. What are the career opportunities after completing Ophthalmic Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Graduates can work as ophthalmic technologists, vision care assistants, or in optical clinics. Opportunities also exist in hospitals, eye care centers, and research facilities.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. What facilities are available for Ophthalmic Technology students?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Our program provides fully equipped eye labs, modern optical instruments, and experienced instructors to ensure comprehensive hands-on training.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
