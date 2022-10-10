import React from 'react'

import './Styles.css';

export default function FormStepper({currentStep, stepText, totalSteps}) {
  return (
    <div className='form-stepper'>
        <div className='form-stepper-info'>
          {stepText && <p className='form-step-text'>{stepText}</p>}
          <p className='form-stepper-counter'>Paso {currentStep}/{totalSteps}</p>
        </div>
        <div className='form-stepper-bar'>
          <div 
            className='form-stepper-bar-progress'
            style={{width: `${currentStep/totalSteps * 100}%`}}
          >
          </div>
        </div>
    </div>
  )
}
