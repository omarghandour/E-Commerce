'use client'
import { product } from '@/sanity/schemas/product-schema'
import { Car } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import './cod.css'
const CodForm = () => {
  const router = useRouter();
          const [fullname, setFullname] = useState('')
          const [email, setEmail] = useState('')
          const [number, setNumber] = useState('')
          const [error, setError] = useState([]) 
          const {cartDetails} = useShoppingCart();
          const cartItems = Object.entries(cartDetails!).map(([_, product]) => product)
          const j = cartItems
          const cd: object = j.map(obj => obj).filter(obj => obj !== undefined);
          const [bss, setBss] = useState(false)
          const [btn, setBtn] = useState(false);
      //     const g = cartDetails.name        
           console.log(cd);
           function btnn (){
            setBtn(true);
           }
          const handlesubmit = async (e: any) =>{
                e.preventDefault();

                const res = await fetch("api/cod", {
                    method: "POST",
                    headers: {
                              "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                              fullname,
                              email,
                              number,
                              cd
                    })
                })
                const msg = await res.json();
          //       setError(msg);
          console.log(msg.success);
          if(msg.success === true){
            setBss(true);
          }
        
          }
          const { clearCart } = useShoppingCart()

            useEffect(()=>{
              if(bss === true){
                clearCart();
                setBss(false);
                router.push('/succs'); 
              }
          },[bss])
         
//  async function bs(){
//   // console.log(bss);
    
//       if(bss === true){
//         console.log('s');
//       }
  
// }
  return (
    <>
    <form onSubmit={handlesubmit} className="py-4 mt-4 border-t flex flex-col gap-5">
 
          <div>
                    <label htmlFor="fullname">Full name</label>
                    <input onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" placeholder='Omar Ghandour' id="fullname" />
          </div>
          <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='omar@gmail.com' id="email" />
          </div>
          <div>
                    <label htmlFor="number">Number</label>
                    <input onChange={(e) => setNumber(e.target.value)} value={number} type="text" placeholder='01...' id="number" />
          </div>
          <button onClick={btnn} className="bg-green-700 p-3 text-white font-bold" type='submit'>{btn ? "Loading..." : "Submit"}</button>
    </form>
    </>
  )
}

export default CodForm