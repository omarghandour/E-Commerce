"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useShoppingCart } from "use-shopping-cart"

import "./cod.css"
import { useSession } from "next-auth/react"

import { Button } from "./ui/button"

const CodForm = () => {
  const { data: session } = useSession()

  const router = useRouter()
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAdress2] = useState("")
  const [number, setNumber] = useState("")
  const [error, setError] = useState([])
  const { cartDetails, totalPrice } = useShoppingCart()
  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product)
  const j = cartItems
  const cd: any[] = j.map((obj) => obj).filter((obj) => obj !== undefined)
  const [bss, setBss] = useState(false)
  const [btn, setBtn] = useState(false)
  const [msgg, setMsgg] = useState(false)
  const [okk, setOKk] = useState<boolean>()

  const names = cartItems
    .map((obj: { name: string }) => obj.name)
    .filter((name: string) => name !== undefined)
  // const prices = cartItems.map((obj: { price: number }) => obj.price).filter((price: number) => price !== undefined);
  const quantities = cartItems
    .map((obj: { quantity: number }) => obj.quantity)
    .filter((quantity: number) => quantity !== undefined)
  // const colors = cartItems.map((obj: { color: string[] }) => obj.color).filter((color: number) => color !== undefined);
  const n = `'${JSON.stringify(names)}'`
  // const p = `'${prices}'`;
  const gdsg: string[] = []
  const q = quantities.map((el) => {
    let fg = JSON.stringify(el)
    gdsg.push(fg)
  })
  const qq = gdsg.join("")

  const color = cd
    .map((obj: { product_data: string }) => obj.product_data)
    .filter((color: string) => color !== undefined)
  const desc = JSON.stringify(color)
  const ta = JSON.stringify(totalPrice)

  console.log(session)
  function btnn() {
    setBtn(true)
  }
  const handlesubmit = async (e: any) => {
    e.preventDefault()

    const res = await fetch("api/cod", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        number,
        cd,
        address1,
        address2,
      }),
    })
    const msg = await res.json()
    //       setError(msg);
    // console.log(msg);

    console.log(msg.success)
    if (msg.success === true) {
      setBss(true)
      setMsgg(false)
    } else {
      setMsgg(true)
    }
  }
  const { clearCart } = useShoppingCart()
  useEffect(() => {
    if (bss === true) {
      clearCart()
      setBss(false)
      router.push("/succs")
    }
  }, [bss, okk])

  const rr = process.env.PAYMOP_API_KEY

  const gyuy = session?.user?.name?.split(" ")

  const getnum = () => {
    if (gyuy) {
      const fn = gyuy[0]
      const ln = gyuy[1]

      let ff = prompt("Get number")
      if (ff != null || ff != undefined) {
        if (ff.length >= 11) {
          paymob(ff, fn, ln)
        } else {
          alert("number is not valid please click on the button again")
        }
      }
    }
  }
  const paymob = async (ff: any, fn: any, ln: any) => {
    setBtn(true)
    let data = {
      api_key: rr,
    }

    let request = await fetch("https://accept.paymob.com/api/auth/tokens", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    let response = await request.json()

    let tt = response.token
    secondstep(tt, ff, fn, ln)
  }
  const secondstep = async (tt: any, ff: any, fn: any, ln: any) => {
    let data = {
      auth_token: tt,
      delivery_needed: "false",
      amount_cents: ta,
      currency: "EGP",
      items: [
        {
          name: n,
          amount_cents: ta,
          description: desc,
          quantity: qq,
        },
      ],
    }

    let request = await fetch(
      "https://accept.paymob.com/api/ecommerce/orders",
      {
        method: "post",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )

    let response = await request.json()

    let id = response.id

    thirdstep(id, tt, ff, fn, ln)
  }

  const thirdstep = async (id: any, tt: any, ff: any, fn: any, ln: any) => {
    let data = {
      auth_token: tt,
      amount_cents: ta,
      expiration: 3600,
      order_id: id,
      billing_data: {
        apartment: "NA",
        email: session?.user?.email,
        floor: "NA",
        first_name: fn,
        street: "NA",
        building: "NA",
        phone_number: ff,
        shipping_method: "NA",
        postal_code: "NA",
        city: "NA",
        country: "NA",
        last_name: ln,
        state: "NA",
      },
      currency: "EGP",
      integration_id: 4322361,
    }

    let request = await fetch(
      "https://accept.paymob.com/api/acceptance/payment_keys",
      {
        method: "post",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    )

    let response = await request.json()

    let lastToken = response.token

    const ok = request.ok
    if (!ok) {
      setMsgg(true)
    } else {
      setMsgg(false)
      setOKk(true)
    }
    cardpayment(lastToken)
  }
  useEffect(() => {
    if (okk === true) {
      clearCart()
      setBtn(false)
    }
  }, [okk])

  const cardpayment = async (lastToken: any) => {
    let iframeurl = `https://accept.paymob.com/api/acceptance/iframes/798278?payment_token=${lastToken}`
    //  window.open(iframeurl, '_blank');
    router.replace(iframeurl)
    //  router.push('/')
  }
  // const phone = prompt("Enter your phone number");
  // if(phone == null || phone == undefined){
  //   alert("Invalid phone number")
  //   console.log(phone, 'ggg');

  // }
  //    if (phone != null || phone != undefined) {
  //   if(phone.length >= 11){
  //     alert("Ok");
  //   }else {
  // alert("Invalid phone number");
  //   }
  // }
  return (
    <>
      {/* <Button onClick={getnum} className="mt-1 h-11   w-full bg-black" >
                {msgg ? 'Error' : btn ? "Loading..." : "pay with card" }

        </Button> */}
      <form
        name="form"
        onSubmit={handlesubmit}
        className="mt-4 flex flex-col gap-5 border-t py-4"
      >
        <div>
          <label htmlFor="fullname">Full name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            placeholder="Omar Ghandour"
            id="fullname"
            required
            minLength={2}
            maxLength={50}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="omar@gmail.com"
            id="email"
            required
            minLength={2}
            maxLength={100}
          />
        </div>
        <div>
          <label htmlFor="address1">Address 1</label>
          <input
            onChange={(e) => setAddress1(e.target.value)}
            value={address1}
            type="text"
            placeholder="Cairo, Nasr City .. etc"
            id="address1"
            required
            minLength={5}
            maxLength={150}
          />
        </div>
        <div>
          <label htmlFor="address2">Address 2</label>
          <input
            onChange={(e) => setAdress2(e.target.value)}
            value={address2}
            type="text"
            placeholder="Optional"
            id="address2"
            maxLength={150}
          />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            type="numbrt"
            placeholder="01..."
            id="number"
            required
            minLength={11}
            maxLength={20}
          />
        </div>
        <button
          onClick={btnn}
          className="bg-green-700 p-3 font-bold text-white"
          type="submit"
        >
          {msgg ? "Error" : btn ? "Loading..." : "Submit"}
        </button>
      </form>
    </>
  )
}

export default CodForm
