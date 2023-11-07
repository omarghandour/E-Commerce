import CodForm from '@/components/codForm'
import React from 'react'
const page = () => {
    
  return (
          <div className="p-4 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold">Enter your details</h1>
          <p>Please fill in the form below</p>
          <CodForm />
          </div>
  )
}

export default page