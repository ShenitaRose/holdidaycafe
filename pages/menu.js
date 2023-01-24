import Header from "../components/header"
import Image from "next/image"

export default function Menu() {
    return (
      <div className="bg-gray-100">
            <Header />
        <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-lime-900">Our Menu</h2>
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Enjoy the Brew
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Our menu is the best part of the Eco Experience!
            </p>
            <figure className="py-16">
            <Image
              className="w-full rounded-lg"
              src="/images/illustrations/cafemenu.png"
              alt=""
              width={1310}
              height={873}
            />
           
          </figure>
          </div>
        </div>
      </div>
    )
  }
  