"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Dropdown from "../components/forms/dropdown";

export default function Input() {
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
                </div>
            </main>
        </>
    );
}