import Image from "next/image"

export default function Hero() {
    return (
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
        <Image
                    className="h-full w-full object-cover"
                    src="/images/illustrations/cafebanner.jpg"
                    alt="people sitting in a cafe"
                    height={2000}
                    width={2000}
                  />
        </div>
      </div>
    )
  }
  