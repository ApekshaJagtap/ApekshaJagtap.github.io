import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

export default function Footer() {
    return (
        <footer id="footer" className="text-center text-white" style={{ backgroundColor: '#d3d3d3' }}> {/* Changed to a greyish color */}
            {/* Grid container */}
            <div className="container p-4 pb-0">
                <div className="row" style={{ color: 'black' }}>
                    <div className="col footer_col">
                        <FaLocationDot style={{ fontSize: '24px' }} />
                        <h5>Office Address</h5>
                        <p>Serve No. 292/2/2, MIDC, Nimblak,<br />Nagar, Ahmednagar,<br />Maharashtra, 414111</p>
                    </div>
                    <div className="col footer_col">
                        <MdEmail style={{ fontSize: '24px' }} />
                        <h5>General Enquiries</h5>
                        <p>Email: <a href="mailto:shrishagroupofpacakging@gmail.com" style={{ color: 'black', textDecoration: 'none' }}>shrishagroupofpacakging@gmail.com</a></p>
                    </div>
                    <div className="col footer_col">
                        <IoCall style={{ fontSize: '24px' }} />
                        <h5>Call Us</h5>
                        <p>Phone: 9765338396, 9146473948</p>
                    </div>    
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                 © 2024 Copyright:&nbsp; SHRISHA GROUP OF PACKAGING
            </div>
        </footer>
    );
}
