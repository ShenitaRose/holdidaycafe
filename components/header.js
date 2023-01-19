import { ImFacebook, ImTwitter, ImYoutube, ImPinterest } from "react-icons/im";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href="/" className="font-bold uppercase text-3xl">The Holiday Cafe</Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <Link href="/" className="text-gray-600">Home</Link>
                    <Link href="/" className="text-gray-600">Menu</Link>
                    <Link href="/" className="text-gray-600">Gallery</Link>
                    <Link href="/" className="text-gray-600">Location</Link>
                    <Link href="/" className="text-gray-600">Contact</Link>
                </div>
            </div>

        </div>

    </header>
  )
}
