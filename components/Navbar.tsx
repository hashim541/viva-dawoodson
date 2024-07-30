
import { navItems } from "@/utils/data"
import ThemeToggle from "./ThemeToggle"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center px-4 py-3 backdrop-blur-md overflow-hidden rounded-xl mt-2">
      <div className='bg-gradient-to-r from-background to-background opacity-50 absolute inset-0 -z-30'></div>
      <header>
        <Image
          src={'/assets/images/logo.png'}
          alt="Viva Dawoodson Logo"
          width={80}
          height={100}
        />
      </header>

      <div className="ml-auto flex items-center gap-10">
        <ul className="hidden md:flex gap-8 ">
          {navItems.map(item => (
            <a href={'/#' + item} key={item}>
              <li className="text-text">{item}</li>
            </a>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Navbar