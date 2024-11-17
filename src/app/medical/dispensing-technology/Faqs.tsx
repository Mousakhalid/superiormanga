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
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in Dispensing Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The minimum requirement is an F.Sc (Pre-Medical) or equivalent. For more details, visit Superior College Lalazar Campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q2. What does the Dispensing Technology program cover?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: The program covers pharmacology, medication dispensing, inventory management, and patient safety, preparing students for roles in pharmaceutical services.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q3. What are the career opportunities after completing Dispensing Technology?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Graduates can work as pharmacy technicians, dispensers, or in pharmaceutical management. Opportunities also exist in hospitals and retail pharmacies.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. What facilities are available for Dispensing Technology students?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Our program offers modern pharmaceutical labs, advanced dispensing equipment, and experienced instructors to ensure hands-on learning.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
