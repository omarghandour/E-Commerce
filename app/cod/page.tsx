import CodForm from '@/components/codForm'
import React from 'react'
const page = () => {

  return (
          <div className="mx-auto max-w-3xl p-4">
          <h1 className="text-3xl font-bold">Enter your details</h1>
          <p>Please fill in the form below to pay on delivery, or pay with card</p>
          <CodForm />
          </div>
  )
}

export default page
