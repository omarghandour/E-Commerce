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

export function SiteHeader() {
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
            className="h-9 lg:w-[300px] search"
            defaultValue={defaultSearchQuery}
          />
          {/* <button type="submit">
          <img className="SubmitLogo" src="/submit-success-check-mark-svgrepo-com.svg" alt="Submit icon" />
          </button> */}
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
          {process.env.NODE_ENV === 'development' && (
            <Link href={'/studio'}>
              <Button size="sm" variant="ghost">
                <Edit className="h-5 w5"/>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
