DROP SCHEMA IF EXISTS jobapp_schema CASCADE;
CREATE SCHEMA jobapp_schema;
SET SCHEMA 'jobapp_schema';

/* DOMAINS */
CREATE DOMAIN jobapp_schema.zip_code_check as INTEGER 
    CHECK 

/* User can't add any new job types */
CREATE TABLE job_types (
    job_id VARCHAR(5),
    job_title VARCHAR(100) NOT NULL,
    CONSTRAINT JOB_PK
        PRIMARY KEY (job_id),
    CONSTRAINT JOB_UN
        UNIQUE (job_title)
);

/* User can't add any new company types */
CREATE TABLE company_types (
    company_type_id VARCHAR(5),
    company_type VARCHAR(100) NOT NULL,
    CONSTRAINT COMP_TYPE_PK
        PRIMARY KEY (company_type_id),
    CONSTRAINT COMP_TYPE_UN
        UNIQUE (company_type)
);

/* User can't add any new clearance ids */
CREATE TABLE clearance (
    clearance_id VARCHAR(5) NOT NULL,
    clearance VARCHAR(100) NOT NULL,
    CONSTRAINT CLEARANCE_PK
        PRIMARY KEY (clearance_id),
    CONSTRAINT CLEARANCE_UN
        UNIQUE (clearance)
);

/* User can't add any new education as of now */
CREATE TABLE edu (
    ed_id VARCHAR(5) NOT NULL,
    degrees VARCHAR(100) NOT NULL,
    majors VARCHAR(100) NOT NULL,
    gpa DOUBLE PRECISION NOT NULL
    CONSTRAINT EDU_PK
        PRIMARY KEY (ed_id),
    CONSTRAINT MAJOR
        UNIQUE(majors)
    CONSTRAINT DEGREE
        UNIQUE(degrees)
);

/* is this the right way? - do we need a pk or fk?*/ 
CREATE TABLE wanted_salary (
    min INTEGER NOT NULL,
    max INTEGER NOT NULL
);

CREATE TABLE location_info (
    zipcode INTEGER NOT NULL,
    /* so these need to be generated? */
    longitude INTEGER,
    latitude INTEGER,
    CONSTRAINT COMP_TYPE_PK
        PRIMARY KEY (company_type_id),
);

CREATE TABLE actual_job_app (
    app_number SERIAL PRIMARY KEY,
    job_title VARCHAR(100) NOT NULL,
    company_type VARCHAR(100) NOT NULL,
    min INTEGER NOT NULL,
    max INTEGER NOT NULL,
    zipcode INTEGER NOT NULL,
    clearance VARCHAR(100) NOT NULL,
    degrees VARCHAR(100) NOT NULL,
    majors VARCHAR(100) NOT NULL,
    gpa DOUBLE PRECISION NOT NULL
    /* fks for all? */
);