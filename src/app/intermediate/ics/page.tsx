import React from 'react'
import Hero from './Hero'
import Introduction from './Introduction'
import Eligibity from './Eligibity'
import Admission from '../pre-medical/Admission'
import { Faqs } from './Faqs'

const page = () => {
  return (
    <div>
        <Hero />
        <Introduction />
        <Eligibity />
        <Admission />
        <Faqs />
    </div>
  )
}

export default page