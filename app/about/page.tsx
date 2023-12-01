import Link from 'next/link'
import React from 'react'
import './about.css'
const page = () => {
  return (
    <div>
        <header>
        <h1>About Us</h1>
    </header>
    <div className="container">
        <h2>Our Story</h2>
        <p>
            Welcome to our About Us page. We are a passionate and dedicated team of individuals committed to providing the best products/services to our customers. Our journey began in 2020 when we set out on a mission to change the handmade market.
        </p>

        <h2>Our Team</h2>
        <p>
            Our team is made up of talented professionals with diverse backgrounds and expertise. We believe in collaboration, innovation, and delivering excellence in everything we do. Meet our core team members:
        </p>
        <ul>
            <li>Omar Ghandour - CEO</li>
            {/* <li>Jane Smith - COO</li>
            <li>Mike Johnson - CTO</li> */}
        </ul>

        <h2><Link style={{background: 'black', color: 'white', padding: '2px', borderRadius:'5px'}} href={'/contactus'}>Contact Us</Link></h2>
        <p>
            If you have any questions or would like to get in touch, please feel free to contact us at <Link style={{background: 'black', color: 'white', padding: '2px', borderRadius:'5px'}} href={'/contactus'}>Contact Us</Link>. love to hear from you and assist in any way we can.
        </p>
    </div>
    </div>
  )
}

export default page