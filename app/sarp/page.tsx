import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
          <header>
        <h1>Shipping & Return Policy</h1>
    </header>
    <div className="container">
        <h2>Shipping Policy</h2>
        <p>
            We offer shipping over the world. Shipping costs and delivery times may vary depending on your location and the shipping method chosen during checkout. We strive to process and ship orders as quickly as possible.
        </p>

        <h2>Returns and Refunds</h2>
        <p>
            If you are not completely satisfied with your purchase, you may return it within 7 days days of receiving the product for a full refund. To initiate a return, please contact our customer support team at <Link style={{background: 'black', color: 'white', padding: '2px', borderRadius:'5px'}} href={'/contactus'}>Contact Us</Link>
        </p>

        <h2>Exchanges</h2>
        <p>
            We are happy to exchange products if you receive a defective or incorrect item. Please contact our customer support team within 10 days of receiving the product to request an exchange.
        </p>


        <h2><Link style={{background: 'black', color: 'white', padding: '2px', borderRadius:'5px'}} href={'/contactus'}>Contact Us</Link></h2>
        <p>
            If you have any questions or concerns regarding our Shipping & Return Policy, please contact us at <Link style={{background: 'black', color: 'white', padding: '2px', borderRadius:'5px'}} href={'/contactus'}>Contact Us</Link>.
        </p>
    </div>
    </div>
  )
}

export default page