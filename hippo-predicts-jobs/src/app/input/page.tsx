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
                <div>
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

                    <Radio
                        label={radioMajorLabel}
                    />   

                    <Radio
                        label={radioCoverLetterLabel}
                    />    

                    <Input
                        type="number"
                        label="Input minimum salary:"
                    />

                    <Input
                        type="number"
                        label="Input maximum salary:"
                    />

                    <Input
                        type="number"
                        label="Simplify numerator:"
                    />

                    <Input
                        type="number"
                        label="Simplify denominator:"
                    />

                </div>
            </main>
        </>
    );
}