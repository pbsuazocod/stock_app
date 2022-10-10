import React from 'react'

import { ProgressSpinner } from 'primereact/progressspinner';

// import './Styles.css';

export default function InputLoader({error, action}) {
  return (
    <div className={'input-loader'}>
      {error ? (
        <button type='button' onClick={() => action()} title={'Reintentar'}>
            <i className="pi pi-exclamation-circle input-loader-error-icon"></i>
        </button>
      ) : (
        <ProgressSpinner strokeWidth={6} />
      )}
    </div>
  )
}