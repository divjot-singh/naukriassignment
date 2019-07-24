import React from 'react';

export default function Footer (){
    
        return (
            <footer className="footer">
                <div className="nav-item active">
                    <img src="assets/category-images/back_office.png" width="30" height="30" />
                    <p>Jobs</p>
                </div>
                <div className="nav-item">
                    <img src="assets/category-images/beautician.png" width="30" height="30" />
                    <p>Applies</p>
                </div>
                <div className="nav-item">
                    <img src="assets/category-images/business_development.png" width="30" height="30" />
                    <p>Profile</p>
                </div>
            </footer>
        );
    
}