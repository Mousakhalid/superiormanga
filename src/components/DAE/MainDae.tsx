import React from 'react'
import Hero from './Hero'
import Introduction from './Introduction'
import ProgramsDAE from './Programs'
import Admission from '@/app/intermediate/pre-medical/Admission'

const MainDae = () => {
  return (
    <div>
      <Hero />
      <Introduction />
      <ProgramsDAE /> 
      <Admission />
    </div> 
  )
}

export default MainDae