import React from 'react'
import Hero from './Hero'
import Introduction from './Introduction'
import Eligibility from './Eligibility'
import Admission from '../pre-medical/Admission'
import { Faqs } from './Faq'

const page = () => {
    return (
        <div>
            <Hero />
            <Introduction />
            <Eligibility />
            <Admission />
            <Faqs />
        </div>
    )
}

export default page