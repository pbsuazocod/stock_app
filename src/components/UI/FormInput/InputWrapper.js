import React, {useState, useRef, useEffect} from 'react'

import InputLoader from './InputLoader';

// import './Styles.css';

export default function InputWrapper(props) {
    const {
        formik,
        fieldName,
        label,
        toolTip,
        helpText,
        isRequired,
        isLoading,
        isLoadingError,
        isLoadingAction,
        children
    } = props;
    const [showToolTip, setShowToolTip] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    function useOutsideAlerter(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                if (showToolTip) {
                    setShowToolTip(false);
                }
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref, showToolTip]);
    }

    return (
        <div 
            className={`p-field w-full`} 
            ref={wrapperRef} 
            onClick={showToolTip ? () => setShowToolTip(false) : null}
        >

            <label
                htmlFor={fieldName}
                className={`${formik.errors[fieldName] && formik.touched[fieldName] ? 'p-error' : ''}`}>
                <span>
                    {label}
                    {isRequired ? " *" : ""}
                
                    {toolTip &&
                    <button className='helptext-toggle' type='button' onClick={() => setShowToolTip(!showToolTip)}>?</button>}
                </span>

                {(isLoading || isLoadingError) &&
                <InputLoader
                    error={isLoadingError}
                    action={isLoadingAction}
                />}
            </label>

            <div className='input-field-wrapper'>

                {/* Input Field */}

                {children}

                {showToolTip &&
                <div className='helptext-popup'>
                    <button className='helptext-toggle' onClick={() => setShowToolTip(!showToolTip)}>?</button>
                    <p>{toolTip}</p>
                </div>}

            </div>

            {helpText &&
            <small className="p-helptext">{helpText}</small>}

            {formik.touched[fieldName] && formik.errors[fieldName] &&
            <small className="p-error">{formik.touched[fieldName] && formik.errors[fieldName]}</small>}

        </div>
    )
}
