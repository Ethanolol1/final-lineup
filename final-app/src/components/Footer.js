import React from 'react'
import '../styles/Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <InstagramIcon /> <GitHubIcon /> <LinkedInIcon />
        </div>
        <p> &copy; 2023 vallineups.com</p>
    </div>
  )
}

export default Footer