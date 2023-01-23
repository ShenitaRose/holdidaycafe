import Image from "next/image"



export default function Section1() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                An Aromatic and Ambient experience
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
                all-day adventures, long shifts at work, and tough travel schedules.
              </p>
            </div>
  
            <div className="mt-16 grid grid-cols-1 gap-y-16 gap-x-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
              <div>
                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/illustrations/coffeering.jpg"
                    alt="Drawstring top with elastic loop closure and textured interior padding."
                    className="h-full w-full object-cover object-center"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                  combination of on-the-go treats that your heart desires. Yes, we did the math.
                </p>
              </div>
              <div>
                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/illustrations/twocups.jpg"
                    alt="Front zipper pouch with included key ring."
                    className="h-full w-full object-cover object-center"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                  for even the most unexpected snack attacks and sharing needs.
                </p>
              </div>
              <div>
                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/illustrations/coffeeground.jpg"
                    alt="Front zipper pouch with included key ring."
                    className="h-full w-full object-cover object-center"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                  for even the most unexpected snack attacks and sharing needs.
                </p>
              </div>
              <div>
                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/images/illustrations/enjoy.jpg"
                    alt="Front zipper pouch with included key ring."
                    className="h-full w-full object-cover object-center"
                    width={1000}
                    height={1000}
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                  for even the most unexpected snack attacks and sharing needs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
  