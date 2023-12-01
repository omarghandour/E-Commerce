import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
          <header>
        <h1>Terms & Conditions</h1>
    </header>
    <div className="container">
        <h2>1. Acceptance of Terms</h2>
        <p>
            By accessing and using this website, you agree to be bound by these Terms & Conditions.
        </p>

        <h2>2. Use of the Website</h2>
        <p>
            You agree to use this website for lawful purposes only and in a manner consistent with all applicable laws and regulations.
        </p>


        <h2>3. <Link style={{background: 'black', color: 'white', padding: '2px', borderRadius:'5px'}} href={'/contactus'}>Contact Us</Link></h2>
        <p>
            If you have any questions or concerns regarding these Terms & Conditions, please contact us at [your contact information].
        </p>
    </div>
    </div>
  )
}

export default page