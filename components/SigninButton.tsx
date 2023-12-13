'use client'
import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'
const SigninButton = () => {
  const {data: session} = useSession();
  if (session && session.user) {
    return (
      <div className='ml-auto flex flex-col items-center gap-4'>
        {session.user.image ? <img className='rounded' src={session.user.image} />: null}
        <p className='text-black-600'>{session.user.name}</p>
        <button onClick={() => signOut()} className='mb-2 me-2 rounded-lg border border-red-700 px-2 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900'>Sign Out</button>
      </div>
    )
  }
  return (

<button onClick={() => signIn()}  type="button" className="mb-2 me-2 inline-flex items-center rounded-lg bg-[#050708] px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-[#050708]/90 focus:outline-none focus:ring-4 focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 dark:focus:ring-[#050708]/50">
<svg className="me-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
</svg>
Sign in with Google
</button>
  )
}

export default SigninButton
