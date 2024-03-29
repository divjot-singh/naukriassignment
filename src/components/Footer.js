import React from 'react';

export default function Footer (){
    
        return (
            <footer className="footer">
                <div className="nav-item active">
                    <img src="assets/category-images/back_office.png" alt="Jobs" width="25" height="25" />
                    <p>Jobs</p>
                </div>
                <div className="nav-item">
                    <img src="assets/category-images/beautician.png" alt="Applications" width="25" height="30" />
                    <p>Applies</p>
                </div>
                <div className="nav-item">
                    <img src="assets/category-images/business_development.png" alt="Profile" width="25" height="25" />
                    <p>Profile</p>
                </div>
            </footer>
        );
    
}