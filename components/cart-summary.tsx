"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import {useSession} from 'next-auth/react'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { stringify } from "querystring"
import SigninButton from "./SigninButton"

export function CartSummary() {
  const {data: session} = useSession();
    const {formattedTotalPrice, totalPrice, cartDetails, cartCount, redirectToCheckout} = useShoppingCart()
    const [isLoading, setLoading] = useState(false)
    const isDisabled = isLoading || cartCount === 0
    const shippingAmount = cartCount! > 0 ? 5000 : 0
    const totalAmount = totalPrice! + shippingAmount



    async function onCheckoute() {
      setLoading(true)
    const response = await fetch('/api/cod',{
      method: "POST",
      body: JSON.stringify(cartDetails)
    })
    const data = await response.json()
    const result = await redirectToCheckout(data.id)
    if(result?.error){
       console.error(result)
    }
    setLoading(false)
    }


  async function onCheckout() {
    setLoading(true)
    const response = await fetch('/api/checkout',{
      method: "POST",
      body: JSON.stringify(cartDetails)
    })
    const data = await response.json()
    const result = await redirectToCheckout(data.id)
    if(result?.error){
       console.error(result)
    }
    setLoading(false)
  }


// console.log(cartDetails);

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-200 bg-gray-50 px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">{formatCurrencyString({value: shippingAmount, currency: "EGP"})}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">{formatCurrencyString({value: totalAmount, currency: "EGP"})}</dd>
        </div>
      </dl>

      <div className="mt-6">
       {session?.user ?  <Link href={cartCount === 0 ? '' : '/cod'}>
        <Button  className="w-full" disabled={isDisabled}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Loading..." : "Checkout"}
        </Button></Link> : <>
        <p className="mb-2 text-center">Sign in with Google to Checkout</p>
        <div className="m-auto flex flex-col items-center"><SigninButton /></div>
        </>}


      </div>
    </section>
  )
}
