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
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in Operation Theatre Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The minimum requirement is an Matric or F.Sc (Pre-Medical) or equivalent. For more details, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q2. What does the Operation Theatre Technology program cover?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The program covers surgical procedures, operating room setup, instrument sterilization, and patient safety protocols, preparing students for roles in surgical support teams.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q3. What are the career opportunities after completing Operation Theatre Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Graduates can work as operation theatre technologists, surgical assistants, or sterilization technicians. Opportunities also exist in hospitals, trauma centers, and surgical units.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. What facilities are available for Operation Theatre Technology students?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Our program offers fully equipped operation theatre labs, surgical simulation equipment, and experienced instructors to provide hands-on and practical training.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
