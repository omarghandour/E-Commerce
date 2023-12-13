"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Edit, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "use-shopping-cart"
import './cod.css'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import NotReq from "./notReq"
import SigninButton from "./SigninButton"
import { useState } from "react"
import {useSession} from 'next-auth/react'

export function SiteHeader() {
  const {data: session} = useSession();
const [prof, setProf] = useState<boolean>(false);
  const Pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const {cartCount} = useShoppingCart()
  const defaultSearchQuery = searchParams.get('search') ?? ""
  if(Pathname.startsWith('/studio')) return null;
  function onSubmit(event : React.SyntheticEvent<HTMLFormElement>){
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const searchQuery = formData.get('search')
      router.replace(`/?search=${searchQuery}`)
  }
  const profilehandler = () => {
    setProf(!prof)
  }
       const sIcon = ()=>{
        const sr = document.getElementById('search');
        sr?.classList.add('click');
       }
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="hedr mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        {/* <NotReq /> */}

        <form onSubmit={onSubmit} className=" items-center lg:inline-flex">
          <Input
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="search h-9 lg:w-[300px]"
            defaultValue={defaultSearchQuery}
          />
        </form>
        <div className="flex items-center space-x-1">
          <Link href="/cart">

            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <ThemeToggle />
          <button onClick={() => profilehandler()}>
{          // eslint-disable-next-line @next/next/no-img-element
}          <img  id="profile" className="rounded" src={session?.user?.image || "./profile-circle-svgrepo-com.svg"} alt="d" style={{width: "35px"}} />
         </button>
          <div className={prof ? " profile " : "hidden"}>
            <SigninButton />
          </div>
          {process.env.NODE_ENV === null && (
            <Link href={'/studio'}>
              <Button size="sm" variant="ghost">
                <Edit className="w5 h-5"/>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
