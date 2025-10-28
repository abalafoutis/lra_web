import { navItems } from "@/lib/constants";
import Link from "next/link";
import Image from 'next/image'
import { Button } from "./ui/button";

export default function Navbar(){
    return (
       <nav className="fixed top-0 left-0 right-0 z-50 bg-white
       backdrop-blur-md border-b border-border transiion-colors duration-300">
          <div className="max-w7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                {/* Logo */}

                <div className="flex items-center space-x-3">
                    <Image src="/logo.png" alt="Logo" width={70} height={70}/>
                    <h1 className="text-2xl font-black font-heading text-primary">
                        Laboratory of Robotics & Automation
                    </h1>
                </div>
{/* Navigation */}
<div className="hidden lg:block">
  <div className="flex items-baseline space-x-8">
    {navItems.map(item => (
      <Link
        key={item.name}
        href={item.href}
        className="text-foreground hover:text-primary px-3 py-2 text-lg font-medium transition-colors duration-300"
      >
        {item.name}
      </Link>
    ))}
  </div>
</div>

{/* Login Button */}
<div className="hidden lg:flex items-center space-x-4">
  <Button className="font-semibold">Login</Button>
</div>

            </div>
          </div>
       </nav>
    );
}