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
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q1. What is the minimum requirement for enrollment in FSc. pre-engineering?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: Minimum requirement is matriculation or equivalent. For further details, visit superior college lalazar campus.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">q2. WHAT are the total marks of FSC (Pre engineering)?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                Ans: FSc is a two-year programme in parts with 550 marks each year. Thus total marks of FSc are 1100
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q3. WHAT ARE THE SUBJECT-WISE MARKS FOR FSC (PRE engineering)?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                In FSc (Pre-Medical), you study 6 subjects in both parts 1 & 2. The subject wise breakdown of marks for FSc Pre-Medical is as follows:
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
                                4. Physics = 100 marks
                                <br />
                                <br />
                                5. Chemistry = 100 marks
                                <br />
                                <br />
                                6. Mathematics= 100 marks
                                <br />
                                <br />
                                The same subjects are studied in FSc Pre-Engineering part II.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className="bg-white px-6">
                            <AccordionTrigger className="uppercase text-start text-[12px] text-gray-700">Q4. WHICH FIELDS ARE OPEN TO PURSUE AFTER FSC (PRE engineering)?</AccordionTrigger>
                            <AccordionContent className="text-start">
                                <p>After completing your FSc Pre-Engineering, you can choose from a wide range of career choices whichever attracts you the most. Examples include:</p>
                                <ol className=" py-5 list-disc">
                                    <li>Aeronautical engineering</li>
                                    <li>Chemical Engineering</li>
                                    <li>Civil Engineering</li>
                                    <li>Computer Engineering</li>
                                    <li>Electrical Engineering</li>
                                    <li>Industrial engineering</li>
                                    <li>Software Engineering</li>
                                    <li>Business Manager and more</li>
                                </ol>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
