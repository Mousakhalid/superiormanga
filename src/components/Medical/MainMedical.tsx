import React from 'react'
import Hero from './Hero'
import Introduction from './Introduction'
import MedicalPrograms from './MedicalPrograms'
import Admission from '@/app/intermediate/pre-medical/Admission'

const MainMedical = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <MedicalPrograms />
      <Admission />
    </div>
  )
}

export default MainMedical