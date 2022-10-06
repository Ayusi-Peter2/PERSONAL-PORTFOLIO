import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <TwitterIcon />
                <LinkedInIcon />
                <GitHubIcon />
                <EmailIcon />

            </div>
            <p>&copy; 2022 James Njenga</p>
        </div>
    )
}

export default Footer;