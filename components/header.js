import { ImFacebook, ImTwitter, ImYoutube, ImPinterest } from "react-icons/im";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href="/" className="font-bold uppercase text-4xl">The Eco Cafe</Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6 ">
                    
                    <Link href="/menu" className="text-lg font-bold">Menu</Link>
                    <Link href="/gallery" className="text-lg font-bold">Gallery</Link>
                    <Link href="/contact" className="text-lg font-bold">Contact</Link>
                </div>
            </div>

        </div>

    </header>
  )
}
