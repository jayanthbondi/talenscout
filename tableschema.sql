CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('Admin', 'Recruiter') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE candidate_profile_mapping (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id BINARY(16) NOT NULL, 
    profile_url VARCHAR(255) UNIQUE NOT NULL, 
    FOREIGN KEY (candidate_id) REFERENCES candidate_metadata(candidate_id) ON DELETE CASCADE
);

CREATE TABLE downloaded_candidate_mapping (
    downloaded_candidate_id BINARY(16) PRIMARY KEY, 
    user_id INT NOT NULL, 
    candidate_id BINARY(16) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY (candidate_id) REFERENCES candidate_metadata(candidate_id) ON DELETE CASCADE
);

CREATE TABLE candidate_metadata (
    downloaded_candidate_id BINARY(16) NOT NULL, 
    candidate_id BINARY(16) NOT NULL, 
    full_name VARCHAR(255) NOT NULL,
    job_title VARCHAR(255),
    headline VARCHAR(500),
    profile_picture_url VARCHAR(255),
    location VARCHAR(255),
    country VARCHAR(100),
    industry VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (downloaded_candidate_id),
    FOREIGN KEY (downloaded_candidate_id) REFERENCES downloaded_candidate_mapping(downloaded_candidate_id) ON DELETE CASCADE
);

CREATE TABLE candidate_company_info (
    downloaded_candidate_id BINARY(16) NOT NULL, 
    company_name VARCHAR(255),
    company_url VARCHAR(255),
    company_domain VARCHAR(255),
    company_email_domain VARCHAR(255),
    company_overview TEXT,
    company_type VARCHAR(100),
    company_size INT,
    company_country VARCHAR(100),
    company_revenue BIGINT,
    company_founded_year INT,
    company_industry VARCHAR(100),
    company_headquarter VARCHAR(255),
    company_website VARCHAR(255),
    company_logo_url VARCHAR(255),
    company_specialties JSON,
    company_locations JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (downloaded_candidate_id) REFERENCES candidate_metadata(downloaded_candidate_id) ON DELETE CASCADE
);

CREATE TABLE candidate_experience (
    experience_id INT AUTO_INCREMENT PRIMARY KEY,
    downloaded_candidate_id BINARY(16) NOT NULL, 
    experience JSON,
    FOREIGN KEY (downloaded_candidate_id) REFERENCES candidate_metadata(downloaded_candidate_id) ON DELETE CASCADE
);

CREATE TABLE candidate_education (
    education_id INT AUTO_INCREMENT PRIMARY KEY,
    downloaded_candidate_id BINARY(16) NOT NULL, 
    education JSON,
    FOREIGN KEY (downloaded_candidate_id) REFERENCES candidate_metadata(downloaded_candidate_id) ON DELETE CASCADE
);

CREATE TABLE candidate_skills (
    skill_id INT AUTO_INCREMENT PRIMARY KEY,
    downloaded_candidate_id BINARY(16) NOT NULL, 
    skills JSON,
    FOREIGN KEY (downloaded_candidate_id) REFERENCES candidate_metadata(downloaded_candidate_id) ON DELETE CASCADE
);

CREATE TABLE candidate_collection (
    collection_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    collection_name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

CREATE TABLE downloaded_candidate_collection (
    id INT AUTO_INCREMENT PRIMARY KEY,
    downloaded_candidate_id BINARY(16) NOT NULL, 
    collection_id INT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (collection_id) REFERENCES candidate_collection(collection_id) ON DELETE CASCADE,
    FOREIGN KEY (downloaded_candidate_id) REFERENCES candidate_metadata(downloaded_candidate_id) ON DELETE CASCADE
);

CREATE TABLE candidate_contact_info (
    contact_id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_id BINARY(16) NOT NULL, 
    contact_type ENUM('Phone', 'PersonalEmail', 'WorkEmail') NOT NULL,
    contact_value VARCHAR(255) NOT NULL,
    verified_status ENUM('Verified', 'Unverified') DEFAULT 'Unverified',
    UNIQUE(candidate_id, contact_type, contact_value), 
    FOREIGN KEY (candidate_id) REFERENCES candidate_metadata(candidate_id) ON DELETE CASCADE
);

CREATE TABLE system_candidate_contact_info (
    system_contact_id INT AUTO_INCREMENT PRIMARY KEY,
    contact_id INT NOT NULL,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    FOREIGN KEY (contact_id) REFERENCES candidate_contact_info(contact_id) ON DELETE CASCADE
);

CREATE TABLE user_candidate_contact_info (
    user_contact_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    contact_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY (contact_id) REFERENCES candidate_contact_info(contact_id) ON DELETE CASCADE
);

CREATE TABLE candidate_contact_pull_activity (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_contact_id INT NOT NULL, 
    credit_used TINYINT(1) DEFAULT 1, 
    action_type ENUM('Reuse', 'NewFetch') NOT NULL, 
    pulled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_contact_id) REFERENCES user_candidate_contact_info(user_contact_id) ON DELETE CASCADE
);

CREATE TABLE contact_provider (
    provider_id BINARY(16) PRIMARY KEY,
    provider_name VARCHAR(255) NOT NULL, 
    contact_type ENUM('Phone', 'PersonalEmail', 'WorkEmail') NOT NULL,
    credit_cost INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(provider_name, contact_type)
);
