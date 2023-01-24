import Image from "next/image"

export default function Hero() {
    return (
        <div className="relative mt-16">
            <div className=" absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <Image
                    className="h-full w-full object-cover"
                    src="/images/illustrations/cafebanner.jpg"
                    alt="coffee"
                    width={1200}
                    height={1200}
                  />
                  <div className="absolute inset-0" />
                </div>
                <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    
                  </h1>
                  
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
  }
  