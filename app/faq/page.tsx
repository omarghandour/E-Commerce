import Link from 'next/link'
import React from 'react'
import './faq.css'
const page = () => {
  return (
    <div>
          <header>
        <h1>Frequently Asked Questions</h1>
    </header>
    <div className="container">
        <h2>General Questions</h2>
        <div className="faq-item">
            <p className="question">Q: How can I place an order?</p>
            <p>A: You can place an order by visiting our website, selecting the desired products, and following the checkout process.</p>
        </div>

        <div className="faq-item">
            <p className="question">Q: What payment methods do you accept?</p>
            <p>A: We accept cash on delivery only inside Egypt.</p>
        </div>

        <h2>Shipping and Returns</h2>
        <div className="faq-item">
            <p className="question">Q: How long does shipping take?</p>
            <p>A: Shipping times may vary based on your location and the shipping method selected. You can check estimated delivery times during the checkout process.</p>
        </div>

        <div className="faq-item">
            <p className="question">Q: What is your return policy?</p>
            <p>A: We offer a 7-day return policy. If you are not satisfied with your purchase, please refer to our <a href="return-policy.html">Return Policy</a> for more details.</p>
        </div>


        <h2><Link style={{background: 'black', color: 'white', padding: '2px', borderRadius:'5px'}} href={'/contactus'}>Contact Us</Link></h2>
        <p>If you could not find an answer to your question in our FAQs, please do not hesitate to <Link style={{background: 'black', color: 'white', padding: '2px', borderRadius:'5px'}} href={'/contactus'}>Contact Us</Link> for further assistance.</p>
    </div>
    </div>
  )
}

export default page