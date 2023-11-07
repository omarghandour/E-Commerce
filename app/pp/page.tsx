import Link from 'next/link'
import React from 'react'
import './pp.css'
const page = () => {
  return (
    <div>
           <header>
        <h1>Privacy Policy</h1>
    </header>
    <div className="container">
        <p>
            This Privacy Policy describes how we collect, use, and share information when you use our e-commerce website.
        </p>

        <h2>Information We Collect</h2>
        <p>
            We may collect information that you provide to us, including your name, email address, and other personal information. We may also collect information about your browsing behavior on our website.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
            We use the information we collect to provide and improve our services, to communicate with you, and to personalize your experience. We may also use your information for marketing and advertising purposes.
        </p>

        <h2>Sharing Your Information</h2>
        <p>
            We never share your information  
              </p>

        
        <h2>Contact Us</h2>
        <p>
            If you have any questions or concerns regarding our Privacy Policy, please contact us at <Link style={{background: 'black', color: 'white', padding: '2px', borderRadius:'5px'}} href={'/contactus'}>Contact Us</Link>.
        </p>
    </div>
    </div>
  )
}

export default page