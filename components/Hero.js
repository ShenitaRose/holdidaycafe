import Image from "next/image"

export default function Hero() {
    return (
      <div className="overflow-hidden rounded-lg bg-gray-100 shadow">
        <div className="px-4 py-5 sm:p-6">
        <Image
                    className="h-full w-full object-cover"
                    src="/images/illustrations/678.jpg"
                    alt="people sitting in a cafe"
                    height={800}
                    width={800}
                  />
        </div>
      </div>
    )
  }
  