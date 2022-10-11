import React from 'react'

import './Styles.css';

export default function FormStepper({currentStep, stepText, totalSteps}) {

  console.log(stepText)
  return (
    <div className='form-stepper'>
      {stepText}
    </div>
  )
}
