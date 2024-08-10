"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Dropdown from "../components/forms/dropdown";
import Radio from "../components/forms/radio";
import Input from "../components/forms/input";

export default function InputForm() {
    /* Company Type */
    const [selectedOptionCompanyType, setSelectedOptionCompanyType] = useState("");

    const handleCompanyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionCompanyType(event.target.value);
    };

    const optionsCompanyType = [
        "Fortune 500",
        "Startup",
        "Mid tier",
        "Easy shi",
        "Government",
        "Left field"
    ];

    const companyTypeLabel = "Company Type"; 

    /* Job Type */

    const [selectedOptionJobType, setSelectedOptionJobType] = useState("");

    const handleJobChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionJobType(event.target.value);
    };

    const optionsJobType = [
        "Full Stack",
        "Back End",
        "Front End",
        "SWE/SDE",
        "Data",
        "QA",
        "ML"
    ];

    const jobTypeLabel = "Job Type"; 

    /* Education */

    const [selectedOptionEduType, setSelectedOptionEduType] = useState("");

    const handleEduChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionEduType(event.target.value);
    };

    const optionsEduType = [
        "High School Diploma",
        "Associates",
        "Bachelors",
        "Masters",
        "PhD",
    ];

    const eduTypeLabel = "Degree"; 

    /* Clearance */

    const [selectedOptionClearanceType, setSelectedOptionClearanceType] = useState("");

    const handleClearanceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionClearanceType(event.target.value);
    };

    const optionsClearanceType = [
        "Confidential",
        "Secret",
        "Top Secret",
    ];

    const clearanceTypeLabel = "Clearance"; 

    /* Status */
    
    const [selectedOptionStatusType, setSelectedOptionStatusType] = useState("");

    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionStatusType(event.target.value);
    };

    const optionsStatusType = [
        "Sent",
        "Accepted",
        "Rejected",
        "Response Back",
        "Ghosted"
    ];

    const statusTypeLabel = "Application status?"; 

    /* radios */
    const radioMajorLabel = "Do you have a SCI major?";
    const radioCoverLetterLabel = "Did you submit a cover letter?";

    return (
        <>
            <main className="input-page-bg">
                <form className="flex flex-col items-center h-[100vh] w-[100vw] bg-orange-400">
                    <div className="grid grid-cols-[auto_auto_auto] w-[70vw] h-[30vh] p-2 bg-pink-500">
                        <Dropdown 
                            options={optionsCompanyType} 
                            selectedOption={selectedOptionCompanyType} 
                            label={companyTypeLabel}
                            handleChange={handleCompanyChange} 
                        /> 

                        <Dropdown 
                            options={optionsJobType} 
                            selectedOption={selectedOptionJobType} 
                            label={jobTypeLabel}
                            handleChange={handleJobChange} 
                        /> 

                        <Dropdown 
                            options={optionsEduType} 
                            selectedOption={selectedOptionEduType} 
                            label={eduTypeLabel}
                            handleChange={handleEduChange} 
                        />   

                        <Dropdown 
                            options={optionsClearanceType} 
                            selectedOption={selectedOptionClearanceType} 
                            label={clearanceTypeLabel}
                            handleChange={handleClearanceChange} 
                        /> 

                        <Dropdown 
                            options={optionsStatusType} 
                            selectedOption={selectedOptionStatusType} 
                            label={statusTypeLabel}
                            handleChange={handleStatusChange} 
                        /> 
                    </div> 

                    <div className="grid grid-cols-[auto_auto] w-[70vw] h-[5vh] p-2 bg-green-400">
                        <Radio
                            label={radioMajorLabel}
                        />   

                        <Radio
                            label={radioCoverLetterLabel}
                        />    
                    </div>   
    
                </form>
                
                
            </main>
        </>
    );
}