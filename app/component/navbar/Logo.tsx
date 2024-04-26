"use client"

import Image from "next/image"
const Logo = () => {
  return (
    <div>
      <Image
        alt="Logo"
        className="
      hidden md:block cursor-pointer
      
      "
        width="200"
        height="100"
        src="/images/Logo.png"
      />
    </div>
  )
}

export default Logo
