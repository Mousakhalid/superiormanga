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
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in i.com?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Minimum requirement is matriculation or equivalent. For further details, visit superior college lalazar campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">q2. WHAT are the total marks of i.com?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: In I.Com, you study 6 subjects in both parts I & II. Both parts carry equal marks that are 550. The subject wise breakdown of marks for I.Com is as follows:

                                <br />
                                <br />
                                1. English (Compulsory) = 100 Marks
                                <br />
                                <br />
                                2. Urdu (Compulsory) = 100 Marks
                                <br />
                                <br />
                                3. Islamic Education (Compulsory) = 50 marks (Part I only)/ Pakistan Studies (Compulsory) = 50 marks (Part II only)
                                <br />
                                <br />
                                4. Principle of Accounting = 100 marks
                                <br />
                                <br />
                                5. Principle of Economics = 75 marks/ Commercial Geography = 75 marks
                                <br />
                                <br />
                                6. Principle of Commerce = 75 marks/ Banking or Computer = 75 marks
                                <br />
                                <br />
                                7. Business Mathematics = 50 marks/ Business Statistics = 50 marks
                                <br />
                                <br />
                                The same subjects are studied in FSc Pre-Medical part II.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. WHICH FIELDS ARE OPEN TO PURSUE AFTER i.com?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                <p>After completing your I.Com, you can choose from a wide range of career choices whichever attracts you the most. Examples include:</p>
                                <ul className=" py-5 list-disc">
                                    <li>CA</li>
                                    <li>ACCA</li>
                                    <li>Accouting</li>
                                    <li>Zoologist</li>
                                    <li>Business Studies</li>
                                    <li>Marketing and more</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
