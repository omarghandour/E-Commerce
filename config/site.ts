export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Dinge", 
  description: "Simple store for everyone and everything",
  footer: [
    { name: "Home", href: "/" },
    { name: "About", href: "about" },
    { name: "Terms & Conditions", href: "tac" },
    { name: "Shipping & Return Policy", href: "sarp" },
    { name: "Privacy Policy", href: "pp" },
    { name: "FAQ", href: "faq" },
  ],
}
